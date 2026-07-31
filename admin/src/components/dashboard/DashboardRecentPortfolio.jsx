/** @format */

import { motion } from "framer-motion";
import { ArrowLeft2, Eye, Gallery, Edit2, Star1 } from "iconsax-reactjs";
import { Link } from "react-router-dom";

const portfolios = [
  {
    id: 1,
    title: "وب‌سایت شرکتی",
    category: "WordPress",
    status: "منتشر شده",
    featured: true,
  },
  {
    id: 2,
    title: "فروشگاه اینترنتی",
    category: "WooCommerce",
    status: "منتشر شده",
    featured: false,
  },
  {
    id: 3,
    title: "پنل مدیریت CRM",
    category: "React",
    status: "پیش‌نویس",
    featured: false,
  },
  {
    id: 4,
    title: "وبلاگ شخصی",
    category: "WordPress",
    status: "منتشر شده",
    featured: true,
  },
];

const DashboardRecentPortfolio = () => {
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
        duration: 0.4,
      }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* =======================================================
          Header
      ======================================================= */}

      <div className='flex flex-col gap-4 border-b border-base-300 p-5 sm:flex-row sm:items-center sm:justify-between'>
        <div>
          <h2 className='text-lg font-bold lg:text-xl'>آخرین نمونه‌کارها</h2>

          <p className='mt-1 text-sm text-base-content/60'>
            جدیدترین پروژه‌های ثبت شده
          </p>
        </div>

        <Link
          to='/portfolio'
          className='btn btn-primary btn-sm rounded-xl w-full sm:w-auto'>
          مشاهده همه
          <ArrowLeft2 size={16} />
        </Link>
      </div>

      {/* =======================================================
          Desktop
      ======================================================= */}

      <div className='hidden xl:block overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th className='w-[45%]'>عنوان</th>
              <th>دسته‌بندی</th>
              <th>وضعیت</th>
              <th>ویژه</th>
              <th className='text-center w-28'>عملیات</th>
            </tr>
          </thead>

          <tbody>
            {portfolios.map((item) => (
              <tr key={item.id} className='hover'>
                <td>
                  <div className='flex items-center gap-3'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                      <Gallery size={22} variant='Bulk' />
                    </div>

                    <span className='font-semibold'>{item.title}</span>
                  </div>
                </td>

                <td>{item.category}</td>

                <td>
                  <div
                    className={`badge rounded-xl ${
                      item.status === "منتشر شده" ?
                        "badge-success text-xs"
                      : "badge-warning "
                    }`}>
                    {item.status}
                  </div>
                </td>

                <td>
                  {item.featured ?
                    <Star1 size={20} variant='Bulk' className='text-primary' />
                  : "-"}
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

      <div className='grid gap-4 p-5 sm:grid-cols-2 xl:hidden'>
        {portfolios.map((item) => (
          <div
            key={item.id}
            className='rounded-2xl border border-base-300 bg-base-100 p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md'>
            <div className='flex items-start justify-between gap-3'>
              <div className='flex items-start gap-3'>
                <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                  <Gallery size={22} variant='Bulk' />
                </div>

                <div className='min-w-0'>
                  <h3 className='truncate font-bold'>{item.title}</h3>

                  <p className='mt-1 text-sm text-base-content/60'>
                    {item.category}
                  </p>
                </div>
              </div>
              <div className='flex flex-col items-end gap-2'>
                {item.featured && (
                  <Star1 size={18} variant='Bulk' className='text-primary' />
                )}

                <div
                  className={`badge badge-sm rounded-lg ${
                    item.status === "منتشر شده" ?
                      "badge-success"
                    : "badge-warning"
                  }`}>
                  {item.status}
                </div>
              </div>

              <div className='mt-5 flex items-center justify-end gap-2 border-t border-base-300 pt-4'>
                <button className='btn btn-ghost btn-sm btn-circle'>
                  <Eye size={17} />
                </button>

                <button className='btn btn-primary btn-sm btn-circle'>
                  <Edit2 size={17} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default DashboardRecentPortfolio;
