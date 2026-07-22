/** @format */

import { Element } from "react-scroll";
import { motion } from "framer-motion";

import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import ServiceCTA from "./ServiceCTA";

import { services } from "./services.data";
import { useState } from "react";
import ServicesDrawer from "./ServicesDrawer";

function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (service) => {
    setSelectedService(service);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedService(null);
  };
  return (
    <Element name='services'>
      <section
        className='
          relative
          overflow-hidden
          py-24
          md:py-32
        '>
        {/* Background Decoration */}

        <div
          className='
            absolute
            inset-0
            -z-10
            overflow-hidden
          '>
          <div
            className='
              absolute
              top-24
              left-10
              h-72
              w-72
              rounded-full
              bg-primary/5
              blur-[120px]
            '
          />

          <div
            className='
              absolute
              bottom-10
              right-10
              h-96
              w-96
              rounded-full
              bg-secondary/5
              blur-[150px]
            '
          />
        </div>

        <div
          className='
            container
            mx-auto
            px-5
            lg:px-8
          '>
          {/* Header */}

          <ServicesHeader />

          {/* Grid */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
            className='mt-20'>
            <ServicesGrid services={services} onOpenDrawer={handleOpenDrawer} />
            <ServicesDrawer
              service={selectedService}
              isOpen={isDrawerOpen}
              onClose={handleCloseDrawer}
            />
          </motion.div>

          {/* CTA */}

          <div className='mt-24'>
            <ServiceCTA />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Services;
