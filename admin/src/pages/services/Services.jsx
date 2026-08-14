/** @format */

import { useCallback, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// import servicesApi from "@/api/services.api";
import servicesApi from "../../api/services.api";

import ServicesHeader from "../../components/services/ServicesHeader";
import ServicesStats from "../../components/services/ServicesStats";
import ServicesToolbar from "../../components/services/ServicesToolbar";
import ServicesTable from "../../components/tables/ServicesTable";
import ServicesModal from "../../components/services/ServicesModal";
import ServiceForm from "../../components/services/ServiceForm";
import ServiceDrawer from "../../components/services/ServiceDrawer";
import ServiceDeleteModal from "../../components/services/ServiceDeleteModal";
import ServiceSkeleton from "../../components/services/ServiceSkeleton";
import EmptyState from "../../components/ui/EmptyState";

const Services = () => {
  /* =========================================================
     STATES
  ========================================================= */

  const [services, setServices] = useState([]);

  const [selectedService, setSelectedService] = useState(null);

  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const [isStatusUpdating, setIsStatusUpdating] = useState(false);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  /* =========================================================
     RESPONSE HELPERS
  ========================================================= */

  const extractData = (response) => {
    return response?.data?.data ?? response?.data ?? null;
  };

  /* =========================================================
     GET SERVICES
  ========================================================= */

  const fetchServices = useCallback(async () => {
    try {
      setIsInitialLoading(true);

      const response = await servicesApi.getAll();

      const data = extractData(response);

      setServices(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("GET SERVICES ERROR:", error);

      setServices([]);

      toast.error(
        error?.response?.data?.message || "دریافت سرویس‌ها انجام نشد.",
      );
    } finally {
      setIsInitialLoading(false);
    }
  }, []);

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  /* =========================================================
     CREATE
  ========================================================= */

  const handleCreate = () => {
    setSelectedService(null);
    setIsFormOpen(true);
  };

  /* =========================================================
     EDIT
  ========================================================= */

  const handleEdit = (service) => {
    if (!service?.id) {
      return;
    }

    setSelectedService(service);
    setIsFormOpen(true);
  };

  /* =========================================================
     VIEW
  ========================================================= */

  const handleView = (service) => {
    if (!service?.id) {
      return;
    }

    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  /* =========================================================
     DELETE OPEN
  ========================================================= */

  const handleDelete = (service) => {
    if (!service?.id) {
      return;
    }

    setSelectedService(service);
    setIsDeleteOpen(true);
  };

  /* =========================================================
     CLOSE FORM
  ========================================================= */

  const closeForm = () => {
    if (isSubmitting) {
      return;
    }

    setIsFormOpen(false);
    setSelectedService(null);
  };

  /* =========================================================
     CLOSE DRAWER
  ========================================================= */

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedService(null);
  };

  /* =========================================================
     SAVE SERVICE
  ========================================================= */

  const handleSave = async (data) => {
    try {
      setIsSubmitting(true);

      let response;

      if (selectedService?.id) {
        response = await servicesApi.update(selectedService.id, data);
      } else {
        response = await servicesApi.create(data);
      }

      const savedService = response?.data?.data;

      if (!savedService?.id) {
        throw new Error("اطلاعات سرویس از سرور دریافت نشد.");
      }

      if (selectedService?.id) {
        setServices((prev) =>
          prev.map((item) =>
            item.id === savedService.id ? savedService : item,
          ),
        );

        toast.success("سرویس با موفقیت بروزرسانی شد.");
      } else {
        setServices((prev) => [...prev, savedService]);

        toast.success("سرویس با موفقیت ایجاد شد.");
      }

      closeForm();
    } catch (error) {
      console.error("SAVE SERVICE ERROR:", error);

      const message =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        error?.message ||
        "ذخیره سرویس انجام نشد.";

      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     DELETE SERVICE
  ========================================================= */

  const handleConfirmDelete = async () => {
    if (!selectedService?.id) {
      return;
    }

    try {
      setIsDeleting(true);

      await servicesApi.delete(selectedService.id);

      setServices((prev) =>
        prev.filter((item) => item.id !== selectedService.id),
      );

      setIsDeleteOpen(false);
      setSelectedService(null);

      toast.success("سرویس با موفقیت حذف شد.");
    } catch (error) {
      console.error("DELETE SERVICE ERROR:", error);

      toast.error(error?.response?.data?.message || "حذف سرویس انجام نشد.");
    } finally {
      setIsDeleting(false);
    }
  };

  /* =========================================================
     TOGGLE STATUS
  ========================================================= */

  const handleToggleStatus = async (service) => {
    if (!service?.id) {
      return;
    }

    try {
      setIsStatusUpdating(true);

      const response = await servicesApi.toggleStatus(service.id);

      const updatedService = response?.data?.data;

      if (!updatedService?.id) {
        throw new Error("Invalid service response.");
      }

      setServices((prev) =>
        prev.map((item) =>
          item.id === updatedService.id ? updatedService : item,
        ),
      );

      setSelectedService((prev) =>
        prev?.id === updatedService.id ? updatedService : prev,
      );

      toast.success(
        updatedService.isActive ? "سرویس فعال شد." : "سرویس غیرفعال شد.",
      );
    } catch (error) {
      console.error("TOGGLE SERVICE STATUS ERROR:", error);

      toast.error(
        error?.response?.data?.message || "تغییر وضعیت سرویس انجام نشد.",
      );
    } finally {
      setIsStatusUpdating(false);
    }
  };

  /* =========================================================
     FILTER
  ========================================================= */

  const normalizedSearch = search.trim().toLowerCase();

  const filteredServices = services.filter((service) => {
    const title = service?.title?.toLowerCase() || "";

    const shortDescription = service?.shortDescription?.toLowerCase() || "";

    const category = service?.category?.toLowerCase() || "";

    const matchesSearch =
      !normalizedSearch ||
      title.includes(normalizedSearch) ||
      shortDescription.includes(normalizedSearch) ||
      category.includes(normalizedSearch);

    const matchesStatus =
      filter === "all" ? true : service?.isActive === (filter === "active");

    return matchesSearch && matchesStatus;
  });

  /* =========================================================
     INITIAL LOADING
  ========================================================= */

  if (isInitialLoading) {
    return (
      <section
        className='
          min-h-screen
          bg-base-200
          p-4
          md:p-6
        '>
        <div className='container mx-auto'>
          <ServiceSkeleton />
        </div>
      </section>
    );
  }

  /* =========================================================
     RENDER
  ========================================================= */

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
        {/* ===================================================
            HEADER
        =================================================== */}

        <ServicesHeader onCreate={handleCreate} />

        {/* ===================================================
            STATS
        =================================================== */}

        <ServicesStats services={services} />

        {/* ===================================================
            TOOLBAR
        =================================================== */}

        <ServicesToolbar
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
        />

        {/* ===================================================
            TABLE / EMPTY STATE
        =================================================== */}

        {filteredServices.length > 0 ?
          <ServicesTable
            services={filteredServices}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
            loading={isStatusUpdating}
          />
        : <EmptyState
            title={
              search || filter !== "all" ?
                "سرویسی پیدا نشد"
              : "هنوز سرویسی ایجاد نشده است"
            }
            description={
              search || filter !== "all" ?
                "فیلترها یا عبارت جستجو را تغییر دهید."
              : "اولین سرویس خود را ایجاد کنید تا در سایت نمایش داده شود."
            }
            actionText={search || filter !== "all" ? null : "ایجاد سرویس جدید"}
            onAction={handleCreate}
          />
        }
      </div>

      {/* =====================================================
          CREATE / EDIT MODAL
      ===================================================== */}

      <ServicesModal
        open={isFormOpen}
        onClose={closeForm}
        title={selectedService ? "ویرایش سرویس" : "افزودن سرویس"}>
        <ServiceForm
          initialValues={selectedService}
          loading={isSubmitting}
          onSubmit={handleSave}
          onCancel={closeForm}
        />
      </ServicesModal>

      {/* =====================================================
          DETAILS DRAWER
      ===================================================== */}

      <ServiceDrawer
        open={isDrawerOpen}
        service={selectedService}
        onClose={closeDrawer}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={handleToggleStatus}
        loading={isStatusUpdating}
      />

      {/* =====================================================
          DELETE MODAL
      ===================================================== */}

      <ServiceDeleteModal
        open={isDeleteOpen}
        service={selectedService}
        loading={isDeleting}
        onClose={() => {
          if (!isDeleting) {
            setIsDeleteOpen(false);
          }
        }}
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
};

export default Services;
