/** @format */

import { motion } from "framer-motion";
import { Gallery, DocumentUpload, Eye, TickCircle } from "iconsax-reactjs";

const stats = [
  {
    id: 1,
    title: "وضعیت نمایش",
    value: "فعال",
    icon: Eye,
  },
  {
    id: 2,
    title: "تصویر هیرو",
    value: "1 فایل",
    icon: Gallery,
  },
  {
    id: 3,
    title: "رزومه",
    value: "PDF",
    icon: DocumentUpload,
  },
  {
    id: 4,
    title: "وضعیت اطلاعات",
    value: "کامل",
    icon: TickCircle,
  },
];

const HeroStats = () => {
  return (
    <section className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.id}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -4,
            }}
            className='rounded-3xl border border-base-300 bg-base-100 p-5 transition-all duration-300'>
            <div className='flex items-center justify-between'>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
                <Icon size={26} variant='Bulk' />
              </div>

              <div className='badge badge-primary badge-outline rounded-xl'>
                Hero
              </div>
            </div>

            <div className='mt-8'>
              <h3 className='text-3xl font-black'>{item.value}</h3>

              <p className='mt-2 text-sm text-base-content/60'>{item.title}</p>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
};

export default HeroStats;
