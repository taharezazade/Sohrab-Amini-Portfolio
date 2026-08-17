/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { CloseCircle, Gallery, Hierarchy, Link1, Star1 } from "iconsax-reactjs";

const API_ORIGIN =
  import.meta.env.VITE_API_URL?.replace(/\/api\/?$/, "") ||
  "http://localhost:5000";

const getImageUrl = (value) => {
  if (!value) return null;
  if (/^https?:\/\//i.test(value)) return value;
  if (value.startsWith("/")) return `${API_ORIGIN}${value}`;
  return `${API_ORIGIN}/uploads/${value.replace(/^\/+/, "")}`;
};

const PortfolioDrawer = ({ open = false, portfolio = null, onClose }) => {
  const images = [
    ...(portfolio?.thumbnail ? [portfolio.thumbnail] : []),
    ...(portfolio?.images || []).map((item) => item.image || item.url),
  ]
    .map(getImageUrl)
    .filter(Boolean)
    .filter((value, index, array) => array.indexOf(value) === index);

  return (
    <AnimatePresence>
      {open && portfolio && (
        <div className='fixed inset-0 z-[90]' dir='rtl'>
          <motion.button
            type='button'
            aria-label='بستن'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className='absolute inset-0 h-full w-full bg-black/40 backdrop-blur-sm'
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.25 }}
            className='absolute right-0 top-0 h-full w-full max-w-2xl overflow-y-auto bg-base-100 shadow-2xl'>
            <header className='sticky top-0 z-10 flex items-center justify-between border-b border-base-200 bg-base-100/95 px-5 py-4 backdrop-blur'>
              <div>
                <h2 className='font-black'>{portfolio.title}</h2>
                <p className='mt-1 text-xs text-base-content/50'>
                  جزئیات نمونه‌کار
                </p>
              </div>

              <button
                type='button'
                onClick={onClose}
                className='btn btn-ghost btn-square btn-sm'>
                <CloseCircle size={23} />
              </button>
            </header>

            <div className='space-y-6 p-5'>
              {images.length > 0 ?
                <div className='grid gap-3 sm:grid-cols-2'>
                  {images.map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt={portfolio.title}
                      className='aspect-video w-full rounded-2xl object-cover'
                    />
                  ))}
                </div>
              : <div className='flex h-48 flex-col items-center justify-center gap-2 rounded-2xl bg-base-200 text-base-content/40'>
                  <Gallery size={40} />
                  <span className='text-sm'>تصویری ثبت نشده است.</span>
                </div>
              }

              <div>
                <h3 className='text-lg font-black'>{portfolio.title}</h3>
                <p className='mt-2 whitespace-pre-line text-sm leading-7 text-base-content/65'>
                  {portfolio.description}
                </p>
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                <Info label='دسته‌بندی' value={portfolio.category} />
                <Info label='مشتری' value={portfolio.client} />
                <Info label='مدت زمان' value={portfolio.duration} />
                <Info label='نقش' value={portfolio.role} />
                <Info label='وضعیت' value={portfolio.status} />
                <Info label='ترتیب' value={portfolio.order} />
              </div>

              <div>
                <h4 className='font-black'>تکنولوژی‌ها</h4>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {(portfolio.technologies || []).map((item) => (
                    <span key={item} className='badge badge-outline'>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className='flex flex-wrap gap-2'>
                {portfolio.featured && (
                  <span className='badge badge-warning gap-1'>
                    <Star1 size={14} />
                    ویژه
                  </span>
                )}

                {portfolio.projectUrl && (
                  <a
                    href={portfolio.projectUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-sm btn-outline gap-2'>
                    <Link1 size={16} />
                    پروژه
                  </a>
                )}

                {portfolio.githubUrl && (
                  <a
                    href={portfolio.githubUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='btn btn-sm btn-outline gap-2'>
                    <Hierarchy size={16} />
                    GitHub
                  </a>
                )}
              </div>

              <InfoBlock title='چالش' value={portfolio.challenge} />
              <InfoBlock title='راهکار' value={portfolio.solution} />

              <div>
                <h4 className='font-black'>امکانات</h4>
                <ul className='mt-3 space-y-2'>
                  {(portfolio.features || []).map((item) => (
                    <li
                      key={item}
                      className='rounded-xl bg-base-200 px-3 py-2 text-sm'>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
};

const Info = ({ label, value }) => (
  <div className='rounded-2xl bg-base-200 p-3'>
    <p className='text-xs text-base-content/50'>{label}</p>
    <p className='mt-1 font-bold'>{value || "-"}</p>
  </div>
);

const InfoBlock = ({ title, value }) => (
  <div>
    <h4 className='font-black'>{title}</h4>
    <p className='mt-2 whitespace-pre-line text-sm leading-7 text-base-content/65'>
      {value || "-"}
    </p>
  </div>
);

export default PortfolioDrawer;
