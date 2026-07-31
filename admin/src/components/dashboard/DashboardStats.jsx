/** @format */

import { motion } from "framer-motion";
import {
  DocumentText,
  Gallery,
  Briefcase,
  MessageQuestion,
} from "iconsax-reactjs";

const stats = [
  {
    id: 1,
    title: "نمونه‌کارها",
    value: 12,
    icon: Gallery,
  },
  {
    id: 2,
    title: "خدمات",
    value: 8,
    icon: Briefcase,
  },
  {
    id: 3,
    title: "پیام‌های تماس",
    value: 24,
    icon: MessageQuestion,
  },
  {
    id: 4,
    title: "صفحات سایت",
    value: 6,
    icon: DocumentText,
  },
];

const DashboardStats = () => {
  return (
    <section className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
              duration: 0.4,
            }}
            whileHover={{
              y: -5,
            }}
            className='group relative overflow-hidden rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg'>
            {/* Glow */}

            <div className='pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/5 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100' />

            <div className='relative z-10 flex items-start justify-between'>
              <div>
                <p className='text-sm text-base-content/60'>{item.title}</p>

                <h2 className='mt-4 text-4xl font-black text-primary'>
                  {item.value}
                </h2>

                <p className='mt-2 text-xs text-base-content/45'>
                  آخرین بروزرسانی امروز
                </p>
              </div>

              <div className='flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-content'>
                <Icon size={30} variant='Bulk' />
              </div>
            </div>

            <div className='mt-8 h-1 overflow-hidden rounded-full bg-base-300'>
              <div className='h-full w-2/3 rounded-full bg-primary transition-all duration-500 group-hover:w-full' />
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default DashboardStats;
