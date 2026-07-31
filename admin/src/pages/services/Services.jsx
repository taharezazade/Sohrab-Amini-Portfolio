/** @format */

const Services = () => {
  return <div>Services</div>;
};

export default Services;

// /** @format */

// import { useState } from "react";

// import ServicesHeader from "../../components/services/ServicesHeader";
// import ServicesStats from "../../components/services/ServicesStats";
// import ServicesToolbar from "../../components/services/ServicesToolbar";
// import ServicesList from "../../components/services/ServicesList";
// import ServiceDrawer from "../../components/services/ServiceDrawer";
// import ServiceDeleteModal from "../../components/services/ServiceDeleteModal";
// import ServiceSkeleton from "../../components/services/ServiceSkeleton";
// import EmptyState from "../../components/ui/EmptyState";

// const Services = () => {
//   /* ============================
//       States
//   ============================ */

//   const [services, setServices] = useState([]);

//   const [selectedService, setSelectedService] = useState(null);

//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const [isDeleteOpen, setIsDeleteOpen] = useState(false);

//   const [loading, setLoading] = useState(false);

//   const [search, setSearch] = useState("");

//   const [filter, setFilter] = useState("all");

//   /* ============================
//       Handlers
//   ============================ */

//   const handleCreate = () => {
//     setSelectedService(null);

//     setIsDrawerOpen(true);
//   };

//   const handleEdit = (service) => {
//     setSelectedService(service);

//     setIsDrawerOpen(true);
//   };

//   const handleDelete = (service) => {
//     setSelectedService(service);

//     setIsDeleteOpen(true);
//   };

//   const handleCloseDrawer = () => {
//     setIsDrawerOpen(false);

//     setSelectedService(null);
//   };

//   const handleSave = (data) => {
//     console.log(data);

//     // TODO:
//     // Create / Update API

//     handleCloseDrawer();
//   };

//   const handleConfirmDelete = () => {
//     console.log("Delete:", selectedService);

//     // TODO:
//     // Delete API

//     setIsDeleteOpen(false);

//     setSelectedService(null);
//   };

//   /* ============================
//       Filter
//   ============================ */

//   const filteredServices = services.filter((service) => {
//     const matchSearch = service.title
//       ?.toLowerCase()
//       .includes(search.toLowerCase());

//     const matchStatus =
//       filter === "all" ? true : service.isActive === (filter === "active");

//     return matchSearch && matchStatus;
//   });

//   /* ============================
//       Loading
//   ============================ */

//   if (loading) {
//     return (
//       <div
//         className='
//           min-h-screen
//           bg-base-200
//           p-4
//           md:p-6
//         '>
//         <ServiceSkeleton />
//       </div>
//     );
//   }

//   return (
//     <section
//       className='
//         min-h-screen
//         bg-base-200
//         p-4
//         md:p-6
//       '>
//       <div
//         className='
//           container
//           mx-auto
//           space-y-6
//         '>
//         {/* Header */}

//         <ServicesHeader onCreate={handleCreate} />

//         {/* Stats */}

//         <ServicesStats services={services} />

//         {/* Toolbar */}

//         <ServicesToolbar
//           search={search}
//           setSearch={setSearch}

//           filter={filter}
//           setFilter={setFilter}
//         />

//         {/* Content */}

//         {filteredServices.length > 0 ?
//           <ServicesList
//             services={filteredServices}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//           />
//         : <EmptyState
//             title='هنوز سرویسی ایجاد نشده است'

//             description='
//                 اولین سرویس خود را ایجاد کنید
//                 تا در سایت نمایش داده شود.
//               '

//             actionText='
//                 ایجاد سرویس جدید
//               '

//             onAction={handleCreate}
//           />
//         }
//       </div>

//       {/* Drawer */}

//       <ServiceDrawer
//         open={isDrawerOpen}

//         onClose={handleCloseDrawer}

//         service={selectedService}

//         onSubmit={handleSave}
//       />

//       {/* Delete Modal */}

//       <ServiceDeleteModal
//         open={isDeleteOpen}

//         service={selectedService}

//         onClose={() => setIsDeleteOpen(false)}

//         onConfirm={handleConfirmDelete}
//       />
//     </section>
//   );
// };

// export default Services;
