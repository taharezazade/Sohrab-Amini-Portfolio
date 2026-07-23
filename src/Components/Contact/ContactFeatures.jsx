/** @format */

import { motion } from "framer-motion";
import { TickCircle } from "iconsax-reactjs";

import { contactData } from "./contact.data";
import { fadeUpVariants, featureVariants } from "./contact.animations";

function ContactFeatures() {
  return (
    <motion.section variants={fadeUpVariants} className='mt-10'>
      <div className='mb-12 text-center'>
        <span
          className='
            badge
            badge-primary
            badge-outline
            rounded-full
            px-5
            py-4
          '>
          مزایای همکاری
        </span>

        <h3
          className='
            mt-6
            text-3xl
            font-black
            lg:text-5xl
          '>
          چرا پروژه خود را به من بسپارید؟
        </h3>

        <p
          className='
            mx-auto
            mt-6
            max-w-3xl
            leading-9
            text-base-content/70
          '>
          هدف فقط تحویل یک وب‌سایت نیست؛ بلکه ساخت محصولی سریع، استاندارد، قابل
          توسعه و متناسب با نیاز واقعی کسب‌وکار شماست. در تمام مراحل پروژه، از
          تحلیل اولیه تا تحویل نهایی، کیفیت، شفافیت و ارتباط مؤثر در اولویت قرار
          دارد.
        </p>
      </div>

      <div
        className='
          grid
          gap-6
          md:grid-cols-2
        '>
        {contactData.features.map((feature) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.id}
              variants={featureVariants}
              whileHover={{
                y: -8,
              }}
              className='
                group
                rounded-3xl
                border
                border-base-300/60
                bg-base-100/60
                p-5
                transition-all
                duration-500
                hover:border-primary/30
              '>
              <div
                className='
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  transition-all
                  duration-500
                  group-hover:bg-primary
                '>
                <Icon
                  size={30}
                  variant='Bulk'
                  className='
                    text-primary
                    transition-colors
                    duration-500
                    group-hover:text-primary-content
                  '
                />
              </div>

              <div className='mt-6 flex items-center gap-2'>
                <TickCircle size={20} variant='Bold' className='text-success' />

                <h4 className='text-xl font-black'>{feature.title}</h4>
              </div>

              <p
                className='
                  mt-4
                  leading-8
                  text-base-content/70
                '>
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}

export default ContactFeatures;
