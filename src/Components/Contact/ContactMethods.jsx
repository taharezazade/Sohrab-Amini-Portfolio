/** @format */

import { motion } from "framer-motion";
import { contactData } from "./contact.data";

import { cardVariants } from "./contact.animations";

function ContactMethods() {
  const methods = [contactData.phone, contactData.whatsapp];

  return (
    <div
      className='
        grid
        gap-5
        sm:grid-cols-2
      '>
      {methods.map((method) => {
        const Icon = method.icon;

        return (
          <motion.article
            key={method.label}
            href={method.href}
            target={method.label === "واتساپ" ? "_blank" : undefined}
            rel={method.label === "واتساپ" ? "noopener noreferrer" : undefined}
            variants={cardVariants}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className='
              group
              flex flex-row items-start justify-start gap-4
              relative
              overflow-hidden

              rounded-3xl
              border
              border-base-300/70

              bg-base-100/60
              backdrop-blur-xl

              p-5

              transition-all
              duration-500

              hover:border-primary/30
              hover:shadow-2xl
              hover:shadow-primary/10
            '>
            {/* Glow */}

            <div
              className='
                pointer-events-none
                absolute
                -right-20
                -top-20

                h-52
                w-52

                rounded-full
                bg-primary/10

                opacity-0
                blur-[90px]

                transition-all
                duration-700

                group-hover:opacity-100
              '
            />

            {/* Icon */}

            <div
              className='
                relative
                z-10

                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-2xl

                bg-primary/10

                transition-all
                duration-500

                group-hover:bg-primary
                group-hover:rotate-6
                group-hover:scale-110
              '>
              <Icon
                size={32}
                variant='Bulk'
                className='
                  text-primary

                  transition-colors
                  duration-500

                  group-hover:text-primary-content
                '
              />
            </div>

            {/* Content */}

            <div className='relative z-10 flex gap-2 flex-col'>
              <h3
                className='
                  text-xl
                  font-black
                '>
                {method.label}
              </h3>

              <p
                className='
                  leading-7
                  text-base-content/70
                '>
                برای دریافت مشاوره، هماهنگی پروژه و شروع همکاری از این طریق با
                من در ارتباط باشید.
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}

export default ContactMethods;
