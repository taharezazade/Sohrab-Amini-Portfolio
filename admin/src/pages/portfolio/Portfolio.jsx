/** @format */

import { useMemo, useState } from "react";

import PortfolioHeader from "../../components/portfolio/PortfolioHeader";
import PortfolioStats from "../../components/portfolio/PortfolioStats";
import PortfolioToolbar from "../../components/portfolio/PortfolioToolbar";
import PortfolioList from "../../components/portfolio/PortfolioList";

import PortfolioModal from "../../components/portfolio/PortfolioModal";
import PortfolioDrawer from "../../components/portfolio/PortfolioDrawer";
import PortfolioDeleteModal from "../../components/portfolio/PortfolioDeleteModal";

import PortfolioSkeleton from "../../components/portfolio/PortfolioSkeleton";
import PortfolioEmptyState from "../../components/portfolio/PortfolioEmptyState";

const Portfolio = () => {
  /* ============================
      States
  ============================ */

  const [portfolios, setPortfolios] = useState([]);

  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  /* Filters */

  const [search, setSearch] = useState("");

  const [status, setStatus] = useState("all");

  const [featured, setFeatured] = useState("all");

  const [sort, setSort] = useState("newest");

  /* ============================
      Handlers
  ============================ */

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

  const handleCloseModal = () => {
    setModalOpen(false);

    setSelectedPortfolio(null);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);

    setSelectedPortfolio(null);
  };

  const handleSave = (data) => {
    console.log("Save Portfolio:", data);

    /*
      TODO:
      Create / Update API
    */

    handleCloseModal();
  };

  const handleConfirmDelete = () => {
    console.log("Delete Portfolio:", selectedPortfolio);

    /*
      TODO:
      Delete API
    */

    setDeleteOpen(false);

    setSelectedPortfolio(null);
  };

  const handleToggleStatus = (portfolio) => {
    console.log("Toggle Status:", portfolio);

    /*
      TODO:
      Update API
    */
  };

  const handleToggleFeatured = (portfolio) => {
    console.log("Toggle Featured:", portfolio);

    /*
      TODO:
      Update API
    */
  };

  const handleRefresh = () => {
    console.log("Refresh Portfolios");

    /*
      TODO:
      Fetch API
    */
  };

  /* ============================
      Filter
  ============================ */

  const filteredPortfolios = useMemo(() => {
    let result = [...portfolios];

    if (search) {
      result = result.filter((item) =>
        item.title?.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (status !== "all") {
      result = result.filter((item) => item.status === status);
    }

    if (featured !== "all") {
      result = result.filter((item) => item.featured === (featured === "true"));
    }

    if (sort === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "order") {
      result.sort((a, b) => a.order - b.order);
    }

    if (sort === "oldest") {
      result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    if (sort === "newest") {
      result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    return result;
  }, [portfolios, search, status, featured, sort]);

  /* ============================
      Loading
  ============================ */

  if (loading) {
    return (
      <section
        className='
          min-h-screen
          bg-base-200
          p-4

          md:p-6
        '>
        <PortfolioSkeleton />
      </section>
    );
  }

  return (
    <section
      className='
        min-h-screen

        bg-base-200

        p-4

        md:p-6
      '>
      <div
        className='
          container

          mx-auto

          space-y-6
        '>
        {/* Header */}

        <PortfolioHeader
          total={portfolios.length}

          onCreate={handleCreate}
        />

        {/* Stats */}

        <PortfolioStats portfolios={portfolios} />

        {/* Toolbar */}

        <PortfolioToolbar
          search={search}

          setSearch={setSearch}

          status={status}

          setStatus={setStatus}

          featured={featured}

          setFeatured={setFeatured}

          sort={sort}

          setSort={setSort}

          onRefresh={handleRefresh}

          onCreate={handleCreate}
        />

        {/* Content */}

        {filteredPortfolios.length > 0 ?
          <PortfolioList
            portfolios={filteredPortfolios}

            onView={handleView}

            onEdit={handleEdit}

            onDelete={handleDelete}

            onToggleStatus={handleToggleStatus}

            onToggleFeatured={handleToggleFeatured}
          />
        : <PortfolioEmptyState
            onCreate={handleCreate}

            searchMode={search || status !== "all" || featured !== "all"}
          />
        }
      </div>

      {/* Create / Edit Modal */}

      <PortfolioModal
        open={modalOpen}

        portfolio={selectedPortfolio}

        loading={loading}

        onClose={handleCloseModal}

        onSubmit={handleSave}
      />

      {/* Detail Drawer */}

      <PortfolioDrawer
        open={drawerOpen}

        portfolio={selectedPortfolio}

        onClose={handleCloseDrawer}
      />

      {/* Delete Modal */}

      <PortfolioDeleteModal
        open={deleteOpen}

        portfolio={selectedPortfolio}

        onClose={() => setDeleteOpen(false)}

        onConfirm={handleConfirmDelete}

        loading={loading}
      />
    </section>
  );
};

export default Portfolio;
