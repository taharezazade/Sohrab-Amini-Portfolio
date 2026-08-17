/** @format */

import { motion } from "framer-motion";
import { Archive, Briefcase, Star1, TickCircle } from "iconsax-reactjs";

const PortfolioStats = ({ portfolios = [] }) => {
  const stats = [
    {
      title: "کل نمونه‌کارها",
      value: portfolios.length,
      icon: Briefcase,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      title: "منتشر شده",
      value: portfolios.filter((item) => item.status === "PUBLISHED").length,
      icon: TickCircle,
      color: "text-success",
      bg: "bg-success/10",
    },
    {
      title: "پروژه ویژه",
      value: portfolios.filter((item) => item.featured).length,
      icon: Star1,
      color: "text-warning",
      bg: "bg-warning/10",
    },
    {
      title: "آرشیو شده",
      value: portfolios.filter((item) => item.status === "ARCHIVED").length,
      icon: Archive,
      color: "text-error",
      bg: "bg-error/10",
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="card border border-base-300 bg-base-100 shadow-sm"
          >
            <div className="card-body flex-row items-center gap-4 p-5">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.bg}`}
              >
                <Icon size={25} variant="Bulk" className={item.color} />
              </div>

              <div>
                <p className="text-sm text-base-content/60">{item.title}</p>
                <p className="mt-1 text-2xl font-black">{item.value}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default PortfolioStats;
