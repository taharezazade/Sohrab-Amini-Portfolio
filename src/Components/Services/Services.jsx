/** @format */

import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

import ServicesHeader from "./ServicesHeader";
import ServicesGrid from "./ServicesGrid";
import ServiceCTA from "./ServiceCTA";
import ServicesDrawer from "./ServicesDrawer";

import { useServices } from "@/hooks/useServices";

function Services() {
  const { services, loading } = useServices();

  const [selectedService, setSelectedService] = useState(null);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpenDrawer = (service) => {
    setSelectedService(service);

    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setSelectedService(null);

    setIsDrawerOpen(false);
  };

  return (
    <Element name='services'>
      <section
        className='
          relative
          overflow-hidden
          py-4
          md:py-10
        '>
        {/* Background */}

        <div
          className='
            absolute
            inset-0
            -z-10
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
          <ServicesHeader />

          <motion.div
            initial={{
              opacity: 0,
            }}

            whileInView={{
              opacity: 1,
            }}

            viewport={{
              once: true,
              amount: 0.1,
            }}

            transition={{
              duration: 0.6,
            }}

            className='mt-20'>
            {loading ?
              <div
                className='
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    xl:grid-cols-4
                    gap-6
                  '>
                {Array.from({
                  length: 8,
                }).map((_, index) => (
                  <div
                    key={index}
                    className='
                        h-[520px]
                        rounded-3xl
                        bg-base-300/40
                        animate-pulse
                      '
                  />
                ))}
              </div>
            : <ServicesGrid
                services={services}

                onOpenDrawer={handleOpenDrawer}
              />
            }

            <ServicesDrawer
              service={selectedService}

              isOpen={isDrawerOpen}

              onClose={handleCloseDrawer}
            />
          </motion.div>

          <div className='mt-24'>
            <ServiceCTA />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Services;
