/** @format */

import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import portfolioService from "../../services/portfolio.service";

import PortfolioHeader from "../../components/portfolio/PortfolioHeader";
import PortfolioStats from "../../components/portfolio/PortfolioStats";
import PortfolioToolbar from "../../components/portfolio/PortfolioToolbar";
import PortfolioList from "../../components/portfolio/PortfolioList";
import PortfolioModal from "../../components/portfolio/PortfolioModal";
import PortfolioDrawer from "../../components/portfolio/PortfolioDrawer";
import PortfolioDeleteModal from "../../components/portfolio/PortfolioDeleteModal";
import PortfolioEmptyState from "../../components/portfolio/PortfolioEmptyState";
import PortfolioSkeleton from "../../components/portfolio/PortfolioSkeleton";

const getErrorMessage = (error, fallback = "عملیات انجام نشد.") =>
  error?.response?.data?.message ||
  error?.response?.data?.error?.message ||
  error?.message ||
  fallback;

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const [pageLoading, setPageLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [featured, setFeatured] = useState("all");
  const [sort, setSort] = useState("newest");

  const loadPortfolios = useCallback(async (showLoader = true) => {
    try {
      if (showLoader) setPageLoading(true);

      const response = await portfolioService.getAll();
      const data = response?.data?.data ?? response?.data ?? [];

      setPortfolios(Array.isArray(data) ? data : []);
    } catch (error) {
      toast.error(getErrorMessage(error, "دریافت نمونه‌کارها ناموفق بود."));
      setPortfolios([]);
    } finally {
      if (showLoader) setPageLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPortfolios();
  }, [loadPortfolios]);

  const handleCreate = () => {
    setSelectedPortfolio(null);
    setModalOpen(true);
  };

  const handleEdit = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setModalOpen(true);
  };

  const handleView = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setDrawerOpen(true);
  };

  const handleDelete = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setDeleteOpen(true);
  };

  const handleSave = async (formData) => {
    try {
      setActionLoading(true);

      if (selectedPortfolio?.id) {
        await portfolioService.update(selectedPortfolio.id, formData);
        toast.success("نمونه‌کار با موفقیت ویرایش شد.");
      } else {
        await portfolioService.create(formData);
        toast.success("نمونه‌کار با موفقیت ایجاد شد.");
      }

      setModalOpen(false);
      setSelectedPortfolio(null);
      await loadPortfolios(false);
    } catch (error) {
      toast.error(getErrorMessage(error, "ذخیره نمونه‌کار ناموفق بود."));
      throw error;
    } finally {
      setActionLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!selectedPortfolio?.id) return;

    try {
      setActionLoading(true);
      await portfolioService.remove(selectedPortfolio.id);

      toast.success("نمونه‌کار با موفقیت حذف شد.");
      setDeleteOpen(false);
      setSelectedPortfolio(null);

      await loadPortfolios(false);
    } catch (error) {
      toast.error(getErrorMessage(error, "حذف نمونه‌کار ناموفق بود."));
    } finally {
      setActionLoading(false);
    }
  };

  const handleToggleStatus = async (portfolio) => {
    const nextStatus =
      portfolio.status === "PUBLISHED" ? "DRAFT" : "PUBLISHED";

    try {
      setActionLoading(true);

      await portfolioService.updateStatus(portfolio.id, nextStatus);

      setPortfolios((current) =>
        current.map((item) =>
          item.id === portfolio.id ? { ...item, status: nextStatus } : item,
        ),
      );

      toast.success("وضعیت نمونه‌کار تغییر کرد.");
    } catch (error) {
      toast.error(getErrorMessage(error, "تغییر وضعیت ناموفق بود."));
    } finally {
      setActionLoading(false);
    }
  };

  const filteredPortfolios = useMemo(() => {
    let result = [...portfolios];

    const normalizedSearch = search.trim().toLowerCase();

    if (normalizedSearch) {
      result = result.filter((item) =>
        [
          item.title,
          item.description,
          item.category,
          item.client,
          item.slug,
        ]
          .filter(Boolean)
          .some((value) =>
            String(value).toLowerCase().includes(normalizedSearch),
          ),
      );
    }

    if (status !== "all") {
      result = result.filter((item) => item.status === status);
    }

    if (featured !== "all") {
      result = result.filter(
        (item) => item.featured === (featured === "true"),
      );
    }

    if (sort === "title") {
      result.sort((a, b) =>
        String(a.title || "").localeCompare(String(b.title || ""), "fa"),
      );
    }

    if (sort === "order") {
      result.sort((a, b) => Number(a.order || 0) - Number(b.order || 0));
    }

    if (sort === "oldest") {
      result.sort(
        (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0),
      );
    }

    if (sort === "newest") {
      result.sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0),
      );
    }

    return result;
  }, [portfolios, search, status, featured, sort]);

  if (pageLoading) {
    return (
      <section className="min-h-screen bg-base-200 p-4 md:p-6">
        <PortfolioSkeleton />
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-base-200 p-4 md:p-6" dir="rtl">
      <div className="container mx-auto max-w-7xl space-y-6">
        <PortfolioHeader total={portfolios.length} onCreate={handleCreate} />

        <PortfolioStats portfolios={portfolios} />

        <PortfolioToolbar
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          featured={featured}
          setFeatured={setFeatured}
          sort={sort}
          setSort={setSort}
          onRefresh={() => loadPortfolios()}
          onCreate={handleCreate}
          loading={pageLoading || actionLoading}
        />

        {filteredPortfolios.length > 0 ? (
          <PortfolioList
            portfolios={filteredPortfolios}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
            actionLoading={actionLoading}
          />
        ) : (
          <PortfolioEmptyState
            onCreate={handleCreate}
            searchMode={Boolean(
              search || status !== "all" || featured !== "all",
            )}
          />
        )}
      </div>

      <PortfolioModal
        open={modalOpen}
        portfolio={selectedPortfolio}
        loading={actionLoading}
        onClose={() => {
          if (!actionLoading) {
            setModalOpen(false);
            setSelectedPortfolio(null);
          }
        }}
        onSubmit={handleSave}
      />

      <PortfolioDrawer
        open={drawerOpen}
        portfolio={selectedPortfolio}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedPortfolio(null);
        }}
      />

      <PortfolioDeleteModal
        open={deleteOpen}
        portfolio={selectedPortfolio}
        loading={actionLoading}
        onClose={() => {
          if (!actionLoading) {
            setDeleteOpen(false);
            setSelectedPortfolio(null);
          }
        }}
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
};

export default Portfolio;
