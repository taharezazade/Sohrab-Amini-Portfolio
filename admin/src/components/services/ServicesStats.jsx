/** @format */

import { motion } from "framer-motion";

import {
  Briefcase,
  TickCircle,
  CloseCircle,
  ArrangeHorizontal,
} from "iconsax-reactjs";

const ServicesStats = ({ services = [] }) => {
  const total = services.length;

  const active = services.filter(
    (service) => service?.isActive === true,
  ).length;

  const inactive = services.filter(
    (service) => service?.isActive === false,
  ).length;

  /*
   * Since Service model does not have a `featured` field,
   * we use order as the display priority.
   *
   * If later `featured Boolean` is added to Prisma,
   * this calculation should be changed.
   */
  const featured = services.filter(
    (service) => Number(service?.order) > 0,
  ).length;

  const stats = [
    {
      title: "کل سرویس‌ها",
      value: total,
      icon: Briefcase,
      description: "تعداد کل سرویس‌های ثبت شده",
      className: "text-primary bg-primary/10",
    },
    {
      title: "سرویس‌های فعال",
      value: active,
      icon: TickCircle,
      description: "سرویس‌های قابل نمایش در سایت",
      className: "text-success bg-success/10",
    },
    {
      title: "سرویس‌های غیرفعال",
      value: inactive,
      icon: CloseCircle,
      description: "سرویس‌های مخفی شده",
      className: "text-error bg-error/10",
    },
    {
      title: "دارای اولویت نمایش",
      value: featured,
      icon: ArrangeHorizontal,
      description: "سرویس‌هایی که ترتیب نمایش دارند",
      className: "text-warning bg-warning/10",
    },
  ];

  return (
    <div className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: index * 0.08,
            }}
            className='card border-base-300 bg-base-100 border shadow-sm'>
            <div className='card-body'>
              <div className='flex items-start justify-between'>
                <div>
                  <p className='text-base-content/60 text-sm'>{item.title}</p>

                  <h3 className='mt-2 text-3xl font-black'>{item.value}</h3>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${item.className}`}>
                  <Icon size={26} variant='Bold' />
                </div>
              </div>

              <p className='text-base-content/50 mt-5 text-xs'>
                {item.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ServicesStats;
