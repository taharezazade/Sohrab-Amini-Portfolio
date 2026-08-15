/** @format */

import { AnimatePresence, motion } from "framer-motion";
import {
  CloseCircle,
  TickCircle,
  Code1,
  MonitorMobbile,
  Category,
  Calendar2,
} from "iconsax-reactjs";

import ServiceActions from "./ServiceActions";

const ServiceDrawer = ({
  open = false,
  service = null,
  onClose,
  onEdit,
  onDelete,
  onToggleStatus,
  loading = false,
}) => {
  /*
   * ---------------------------------------------------------
   * Normalize Service Data
   * ---------------------------------------------------------
   */

  const features = Array.isArray(service?.features) ? service.features : [];

  const technologies =
    Array.isArray(service?.technologies) ? service.technologies : [];

  /*
   * ---------------------------------------------------------
   * Drawer
   * ---------------------------------------------------------
   */

  return (
    <AnimatePresence>
      {open && service && (
        <div className='fixed inset-0 z-[9999]'>
          {/* =================================================
              Overlay
          ================================================= */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='
              absolute
              inset-0
              bg-black/40
              backdrop-blur-sm
            '
          />

          {/* =================================================
              Drawer
          ================================================= */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 30,
            }}
            className='
              absolute
              right-0
              top-0
              flex
              h-full
              w-full
              max-w-xl
              flex-col
              border-l
              border-base-300
              bg-base-100
              shadow-2xl
            '>
            {/* =================================================
                Header
            ================================================= */}

            <div
              className='
                flex
                items-center
                justify-between
                border-b
                border-base-300
                bg-base-100
                p-6
              '>
              <div className='min-w-0'>
                <div className='flex items-center gap-3'>
                  <div
                    className='
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                    '>
                    <Category size={26} variant='Bold' />
                  </div>

                  <div className='min-w-0'>
                    <h2 className='truncate text-xl font-black'>
                      {service.title}
                    </h2>

                    {service.category && (
                      <p className='mt-1 text-sm text-base-content/60'>
                        {service.category}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <button
                type='button'
                className='btn btn-ghost btn-circle shrink-0'
                onClick={onClose}
                disabled={loading}>
                <CloseCircle size={26} />
              </button>
            </div>

            {/* =================================================
                Content
            ================================================= */}

            <div className='flex-1 space-y-6 overflow-y-auto p-6'>
              {/* =================================================
                  Identity
              ================================================= */}

              <section className='rounded-3xl bg-base-200 p-6'>
                <div className='flex items-start gap-4'>
                  <div
                    className='
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-primary/10
                      text-primary
                    '>
                    <Category size={32} variant='Bold' />
                  </div>

                  <div className='min-w-0'>
                    <h3 className='text-lg font-bold'>{service.title}</h3>

                    {service.shortDescription && (
                      <p className='mt-2 text-sm leading-7 text-base-content/60'>
                        {service.shortDescription}
                      </p>
                    )}

                    <div className='mt-4 flex flex-wrap items-center gap-2'>
                      <span
                        className={`badge ${
                          service.isActive ? "badge-success" : "badge-error"
                        }`}>
                        {service.isActive ? "فعال" : "غیرفعال"}
                      </span>

                      {service.category && (
                        <span className='badge badge-outline'>
                          {service.category}
                        </span>
                      )}

                      <span className='badge badge-outline'>
                        #{service.order ?? 0}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  Description
              ================================================= */}

              <section className='card border border-base-300 bg-base-100'>
                <div className='card-body'>
                  <h4 className='font-bold'>توضیحات</h4>

                  <p className='mt-3 leading-8 text-base-content/70'>
                    {service.description ||
                      "توضیحی برای این سرویس ثبت نشده است."}
                  </p>
                </div>
              </section>

              {/* =================================================
                  Features
              ================================================= */}

              <section className='card border border-base-300 bg-base-100'>
                <div className='card-body'>
                  <div className='flex items-center justify-between'>
                    <h4 className='font-bold'>امکانات این سرویس</h4>

                    <span className='badge badge-success badge-outline'>
                      {features.length}
                    </span>
                  </div>

                  {features.length > 0 ?
                    <div className='mt-5 space-y-4'>
                      {features.map((feature, index) => (
                        <div
                          key={`${service.id}-feature-${index}`}
                          className='flex items-start gap-3'>
                          <TickCircle
                            size={21}
                            variant='Bold'
                            className='mt-1 shrink-0 text-success'
                          />

                          <span className='leading-7 text-base-content/80'>
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  : <p className='mt-4 text-sm text-base-content/50'>
                      برای این سرویس امکانی ثبت نشده است.
                    </p>
                  }
                </div>
              </section>

              {/* =================================================
                  Technologies
              ================================================= */}

              <section className='card border border-base-300 bg-base-100'>
                <div className='card-body'>
                  <div className='flex items-center justify-between'>
                    <h4 className='font-bold'>تکنولوژی‌های مورد استفاده</h4>

                    <span className='badge badge-primary badge-outline'>
                      {technologies.length}
                    </span>
                  </div>

                  {technologies.length > 0 ?
                    <div className='mt-5 flex flex-wrap gap-2'>
                      {technologies.map((technology, index) => (
                        <span
                          key={`${service.id}-technology-${index}`}
                          className='
                            badge
                            badge-primary
                            badge-outline
                            px-4
                            py-3
                          '>
                          {technology}
                        </span>
                      ))}
                    </div>
                  : <p className='mt-4 text-sm text-base-content/50'>
                      تکنولوژی‌ای برای این سرویس ثبت نشده است.
                    </p>
                  }
                </div>
              </section>

              {/* =================================================
                  Service Information
              ================================================= */}

              <section className='card border border-base-300 bg-base-100'>
                <div className='card-body'>
                  <h4 className='mb-4 font-bold'>اطلاعات سرویس</h4>

                  <div className='space-y-4 text-sm'>
                    <div className='flex items-center justify-between gap-4'>
                      <span className='text-base-content/60'>ترتیب نمایش</span>

                      <span className='font-bold'>{service.order ?? 0}</span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                      <span className='flex items-center gap-2 text-base-content/60'>
                        <Calendar2 size={16} />
                        ایجاد شده
                      </span>

                      <span>
                        {service.createdAt ?
                          new Date(service.createdAt).toLocaleDateString(
                            "fa-IR",
                          )
                        : "---"}
                      </span>
                    </div>

                    <div className='flex items-center justify-between gap-4'>
                      <span className='flex items-center gap-2 text-base-content/60'>
                        <Calendar2 size={16} />
                        آخرین بروزرسانی
                      </span>

                      <span>
                        {service.updatedAt ?
                          new Date(service.updatedAt).toLocaleDateString(
                            "fa-IR",
                          )
                        : "---"}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* =================================================
                  Additional Information
              ================================================= */}

              <section className='grid gap-4 sm:grid-cols-2'>
                <div className='rounded-2xl border border-base-300 p-5'>
                  <Code1
                    size={28}
                    variant='Bulk'
                    className='mb-3 text-primary'
                  />

                  <h4 className='font-bold'>ساختار استاندارد</h4>

                  <p className='mt-2 text-sm leading-7 text-base-content/60'>
                    پیاده‌سازی اصولی و قابل توسعه متناسب با نیاز پروژه.
                  </p>
                </div>

                <div className='rounded-2xl border border-base-300 p-5'>
                  <MonitorMobbile
                    size={28}
                    variant='Bulk'
                    className='mb-3 text-primary'
                  />

                  <h4 className='font-bold'>توسعه حرفه‌ای</h4>

                  <p className='mt-2 text-sm leading-7 text-base-content/60'>
                    تمرکز بر کیفیت، عملکرد، امنیت و قابلیت نگهداری.
                  </p>
                </div>
              </section>
            </div>

            {/* =================================================
                Footer
            ================================================= */}

            <div className='border-t border-base-300 bg-base-100 p-6'>
              <ServiceActions
                service={service}
                loading={loading}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggleStatus={onToggleStatus}
              />
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceDrawer;
