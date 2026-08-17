/** @format */

import { motion } from "framer-motion";

import PortfolioCard from "./PortfolioCard";

function PortfolioGrid({
  projects,
  loading,
  error,
  onOpen,
}) {
  if (loading) {
    return (
      <div
        className="
          grid md:grid-cols-2 xl:grid-cols-3
          mt-12
          gap-8
        "
        aria-label="در حال بارگذاری نمونه‌کارها"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="
              flex flex-col overflow-hidden
              h-full
              bg-base-100
              rounded-[32px] border border-base-300
              shadow-xl
            "
          >
            <div className="h-[12.5rem] md:h-[16rem] bg-base-200 animate-pulse" />

            <div className="flex flex-1 flex-col p-6">
              <div className="h-5 w-20 rounded-full bg-base-200 animate-pulse" />
              <div className="mt-4 h-8 w-2/3 rounded bg-base-200 animate-pulse" />
              <div className="mt-4 h-20 rounded bg-base-200 animate-pulse" />
              <div className="mt-6 h-8 w-3/4 rounded-full bg-base-200 animate-pulse" />
              <div className="mt-auto pt-8 flex gap-3">
                <div className="h-12 flex-1 rounded-full bg-base-200 animate-pulse" />
                <div className="h-12 flex-1 rounded-full bg-base-200 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
          mt-12
          rounded-[32px]
          border border-base-300
          bg-base-100
          p-8
          text-center
          shadow-xl
        "
      >
        <p className="font-bold">
          دریافت نمونه‌کارها با خطا مواجه شد.
        </p>

        <p className="mt-2 text-sm text-base-content/60">
          لطفاً اتصال Backend و آدرس API را بررسی کنید.
        </p>
      </div>
    );
  }

  if (!projects.length) {
    return (
      <div
        className="
          mt-12
          rounded-[32px]
          border border-base-300
          bg-base-100
          p-8
          text-center
          shadow-xl
        "
      >
        <p className="font-bold">
          نمونه‌کاری برای نمایش وجود ندارد.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        grid md:grid-cols-2 xl:grid-cols-3
        mt-12
        gap-8
      "
    >
      {projects.map((project) => (
        <PortfolioCard
          key={project.id}
          project={project}
          onOpen={onOpen}
        />
      ))}
    </motion.div>
  );
}

export default PortfolioGrid;
