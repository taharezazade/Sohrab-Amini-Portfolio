/** @format */

const PortfolioSkeleton = () => (
  <div className="container mx-auto max-w-7xl space-y-6">
    <div className="skeleton h-28 w-full rounded-3xl" />

    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="skeleton h-24 rounded-3xl" />
      ))}
    </div>

    <div className="skeleton h-28 w-full rounded-3xl" />

    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-3xl border border-base-300">
          <div className="skeleton aspect-[16/10] w-full rounded-none" />
          <div className="space-y-3 p-5">
            <div className="skeleton h-5 w-2/3" />
            <div className="skeleton h-10 w-full" />
            <div className="skeleton h-8 w-full" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default PortfolioSkeleton;
