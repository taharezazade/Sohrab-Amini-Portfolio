/** @format */

import { useState } from "react";

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
  /* ============================
      States
  ============================ */

  const [services, setServices] = useState([]);

  const [selectedService, setSelectedService] = useState(null);

  const [isFormOpen, setIsFormOpen] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("all");

  /* ============================
      Handlers
  ============================ */

  const handleCreate = () => {
    setSelectedService(null);

    setIsFormOpen(true);
  };

  const handleEdit = (service) => {
    setSelectedService(service);

    setIsFormOpen(true);
  };

  const handleView = (service) => {
    setSelectedService(service);

    setIsDrawerOpen(true);
  };

  const handleDelete = (service) => {
    setSelectedService(service);

    setIsDeleteOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);

    setSelectedService(null);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);

    setSelectedService(null);
  };

  const handleSave = async (data) => {
    try {
      setLoading(true);

      /**
       * TODO:
       * Create / Update API
       */

      console.log("SAVE:", data);

      closeForm();
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);

      /**
       * TODO:
       * Delete API
       */

      console.log("DELETE:", selectedService);

      setIsDeleteOpen(false);

      setSelectedService(null);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = (service) => {
    console.log("TOGGLE STATUS:", service);

    /**
     * TODO:
     * Update API
     */
  };

  /* ============================
      Filter
  ============================ */

  const filteredServices = services.filter((service) => {
    const matchSearch = service.title
      ?.toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus =
      filter === "all" ? true : service.isActive === (filter === "active");

    return matchSearch && matchStatus;
  });

  /* ============================
      Loading
  ============================ */

  if (loading) {
    return (
      <div
        className='
        min-h-screen
        bg-base-200
        p-4
        md:p-6
      '>
        <ServiceSkeleton />
      </div>
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
        <ServicesHeader onCreate={handleCreate} />

        <ServicesStats services={services} />

        <ServicesToolbar
          search={search}

          setSearch={setSearch}

          filter={filter}

          setFilter={setFilter}
        />

        {filteredServices.length > 0 ?
          <ServicesTable
            services={filteredServices}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggleStatus={handleToggleStatus}
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

      {/* Create / Edit Modal */}

      <ServicesModal
        open={isFormOpen}

        onClose={closeForm}

        title={selectedService ? "ویرایش سرویس" : "افزودن سرویس"}>
        <ServiceForm
          initialValues={selectedService}

          loading={loading}

          onSubmit={handleSave}

          onCancel={closeForm}
        />
      </ServicesModal>

      {/* Details Drawer */}

      <ServiceDrawer
        open={isDrawerOpen}

        service={selectedService}

        onClose={closeDrawer}

        onEdit={handleEdit}

        onDelete={handleDelete}

        onToggleStatus={handleToggleStatus}
      />

      {/* Delete Modal */}

      <ServiceDeleteModal
        open={isDeleteOpen}

        service={selectedService}

        loading={loading}

        onClose={() => setIsDeleteOpen(false)}

        onConfirm={handleConfirmDelete}
      />
    </section>
  );
};

export default Services;
