/** @format */

import { motion } from "framer-motion";
import { ArrowLeft2, Edit2, Eye, Briefcase, TickCircle } from "iconsax-reactjs";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: "توسعه قالب اختصاصی وردپرس",
    category: "WordPress",
    active: true,
  },
  {
    id: 2,
    title: "توسعه افزونه اختصاصی",
    category: "Plugin",
    active: true,
  },
  {
    id: 3,
    title: "بهینه‌سازی سرعت وب‌سایت",
    category: "Optimization",
    active: true,
  },
  {
    id: 4,
    title: "توسعه API اختصاصی",
    category: "Backend",
    active: false,
  },
];

const DashboardRecentServices = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='flex items-center justify-between border-b border-base-300 p-6'>
        <div>
          <h2 className='text-xl font-bold'>آخرین خدمات</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            مدیریت و ویرایش خدمات سایت
          </p>
        </div>

        <Link to='/services' className='btn btn-primary btn-sm rounded-xl'>
          مشاهده همه
          <ArrowLeft2 size={16} />
        </Link>
      </div>

      {/* =======================================================
          Desktop
      ======================================================= */}

      <div className='hidden overflow-x-auto lg:block'>
        <table className='table'>
          <thead>
            <tr>
              <th>عنوان خدمت</th>
              <th>دسته‌بندی</th>
              <th>وضعیت</th>
              <th className='text-center'>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {services.map((service) => (
              <tr key={service.id} className='hover'>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                      <Briefcase size={22} variant='Bulk' />
                    </div>

                    <span className='font-semibold'>{service.title}</span>
                  </div>
                </td>

                <td>{service.category}</td>

                <td>
                  <div
                    className={`badge rounded-xl ${
                      service.active ? "badge-success" : "badge-error"
                    }`}>
                    {service.active ? "فعال" : "غیرفعال"}
                  </div>
                </td>

                <td>
                  <div className='flex items-center justify-center gap-2'>
                    <button className='btn btn-ghost btn-sm btn-circle'>
                      <Eye size={18} />
                    </button>

                    <button className='btn btn-primary btn-sm btn-circle'>
                      <Edit2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* =======================================================
          Mobile
      ======================================================= */}

      <div className='space-y-4 p-5 lg:hidden'>
        {services.map((service) => (
          <div
            key={service.id}
            className='rounded-2xl border border-base-300 bg-base-200 p-4'>
            <div className='flex items-start justify-between'>
              <div className='flex gap-3'>
                <div className='flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                  <Briefcase size={22} variant='Bulk' />
                </div>

                <div>
                  <h3 className='font-bold'>{service.title}</h3>

                  <p className='mt-1 text-sm text-base-content/60'>
                    {service.category}
                  </p>
                </div>
              </div>

              {service.active && (
                <TickCircle size={20} variant='Bulk' className='text-success' />
              )}
            </div>

            <div className='mt-4 flex items-center justify-between'>
              <div
                className={`badge rounded-xl ${
                  service.active ? "badge-success" : "badge-error"
                }`}>
                {service.active ? "فعال" : "غیرفعال"}
              </div>

              <div className='flex gap-2'>
                <button className='btn btn-ghost btn-sm btn-circle'>
                  <Eye size={18} />
                </button>

                <button className='btn btn-primary btn-sm btn-circle'>
                  <Edit2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DashboardRecentServices;
