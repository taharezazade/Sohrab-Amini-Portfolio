/** @format */

import { AnimatePresence, motion } from "framer-motion";

import ServiceCard from "./ServiceCard";
import { servicesContainerVariants } from "./services.animations";

function ServicesGrid({ services, onOpenDrawer }) {
  return (
    <motion.div
      variants={servicesContainerVariants}
      initial='hidden'
      whileInView='show'
      viewport={{
        once: true,
        amount: 0.15,
      }}
      layout
      className='
        mt-16
      '>
      <AnimatePresence mode='popLayout'>
        <motion.div
          layout
          className='
            grid
            gap-6

            grid-cols-1

            sm:grid-cols-2

            xl:grid-cols-4

            2xl:grid-cols-4
          '>
          {services.map((service) => (
            <motion.div
              key={service.id}
              layout
              layoutId={`service-${service.id}`}
              className='h-full'>
              <ServiceCard
                key={service.id}
                service={service}
                index={service.id}
                onOpenDrawer={onOpenDrawer}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

export default ServicesGrid;
