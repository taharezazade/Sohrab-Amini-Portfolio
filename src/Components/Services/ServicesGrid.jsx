/** @format */

import ServiceCard from "./ServiceCard";

function ServicesGrid({ services, onOpenDrawer }) {
  return (
    <div
      className='
        mt-16
      '>
      <div
        className='
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          2xl:grid-cols-4
        '>
        {services.map((service) => (
          <div key={service.id} className='h-full'>
            <ServiceCard
              service={service}
              index={service.id}
              onOpenDrawer={onOpenDrawer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesGrid;
