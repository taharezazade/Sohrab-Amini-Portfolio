/** @format */

import { motion } from "framer-motion";
import {
  TickCircle,
  CloseCircle,
  CloudConnection,
  Driver2,
  ShieldSecurity,
  Data,
} from "iconsax-reactjs";

const systemStatus = [
  {
    id: 1,
    title: "سرور",
    description: "Server Status",
    status: true,
    value: "Online",
    icon: Data,
  },
  {
    id: 2,
    title: "دیتابیس",
    description: "PostgreSQL",
    status: true,
    value: "Connected",
    icon: Driver2,
  },
  {
    id: 3,
    title: "فضای ذخیره‌سازی",
    description: "Uploads",
    status: true,
    value: "Healthy",
    icon: CloudConnection,
  },
  {
    id: 4,
    title: "امنیت سیستم",
    description: "Authentication",
    status: true,
    value: "Protected",
    icon: ShieldSecurity,
  },
];

const DashboardSystemStatus = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* Header */}

      <div className='border-b border-base-300 px-5 py-4 md:px-6'>
        <h2 className='text-lg font-bold md:text-xl'>وضعیت سیستم</h2>

        <p className='mt-1 text-xs text-base-content/60 md:text-sm'>
          وضعیت سرویس‌های اصلی پنل مدیریت
        </p>
      </div>

      {/* Cards */}

      <div className='grid grid-cols-1 gap-3 p-4 sm:grid-cols-2 md:p-5'>
        {systemStatus.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -2 }}
              className='
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-base-300
                bg-base-200
                p-4
                transition-all
                duration-200
                hover:border-primary/30
                hover:bg-base-100
              '>
              {/* Right */}

              <div className='flex items-center gap-3 min-w-0'>
                <div
                  className='
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-primary/10
                    text-primary
                  '>
                  <Icon size={22} variant='Bulk' />
                </div>

                <div className='min-w-0'>
                  <h3 className='truncate text-sm font-bold md:text-base'>
                    {item.title}
                  </h3>

                  <p className='truncate text-xs text-base-content/55'>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Left */}

              <div className='flex flex-col items-end gap-2'>
                <span
                  className={`badge badge-sm ${
                    item.status ? "badge-success" : "badge-error"
                  }`}>
                  {item.status ? "فعال" : "خطا"}
                </span>

                <div className='flex items-center gap-1'>
                  {item.status ?
                    <TickCircle
                      size={15}
                      variant='Bulk'
                      className='text-success'
                    />
                  : <CloseCircle
                      size={15}
                      variant='Bulk'
                      className='text-error'
                    />
                  }

                  <span className='text-xs font-medium text-base-content/70 md:text-sm'>
                    {item.value}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default DashboardSystemStatus;
