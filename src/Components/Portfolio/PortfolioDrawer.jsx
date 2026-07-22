/** @format */

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import {
  Calendar,
  CloseCircle,
  Code,
  Global,
  TickCircle,
  User,
} from "iconsax-reactjs";
import { LiquidGlass } from "@creativoma/liquid-glass";

import PortfolioTags from "./PortfolioTags";
import ImageWithSkeleton from "../common/ImageWithSkeleton";

function PortfolioDrawer({ project, open, onClose }) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);
  if (!project) return null;

  const Icon = project.icon;

  return (
    <AnimatePresence>
      {open && (
        <div
          className='
            fixed inset-0 z-[999] overflow-hidden
          '>
          {/* Overlay */}

          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className='
              absolute inset-0
              bg-black/35
              backdrop-blur-md
            '
          />

          {/* Drawer */}

          <motion.aside
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 22,
            }}
            className='
              inset-0
              flex
              justify-end
              pointer-events-none
              absolute
              top-0
              right-0
              h-screen
              p-3
              sm:p-3
              md:p-5
              lg:p-6
              w-full
              sm:max-w-[480px]
              md:max-w-[560px]
              lg:max-w-[640px]
              xl:max-w-[700px]
              overflow-hidden
            '>
            <LiquidGlass
              displace={2}
              distortionScale={-180}
              redOffset={0}
              greenOffset={0}
              blueOffset={0}
              brightness={80}
              opacity={0}
              backdropBlur={2}
              className='
                overflow-hidden
                w-full h-full
                rounded-2xl
                pointer-events-auto
              '>
              <div
                className='
                  flex flex-col overflow-hidden
                  h-screen
                  bg-base-100/50 dark:bg-base-300/35
                  rounded-2xl border border-white/15
                  backdrop-blur-sm
                '>
                {/* Header */}

                <div
                  className='
                    sticky top-0 z-20 flex items-center justify-between
                    px-4 sm:px-5 md:px-6 py-3
                    backdrop-blur-sm
                  '>
                  <div
                    className='
                      flex items-center
                      gap-4
                    '>
                    <div
                      className='
                        p-2 sm:p-3
                        bg-primary/10
                        rounded-2xl
                      '>
                      <Icon
                        size={30}
                        variant='Bulk'
                        className='
                          text-primary
                        '
                      />
                    </div>

                    <div>
                      <h2
                        className='
                          text-lg sm:text-xl md:text-2xl font-black
                        '>
                        {project.title}
                      </h2>

                      <p
                        className='
                          text-xs text-base-content/60 sm:text-sm
                        '>
                        {project.domain}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className='
                      btn btn-circle btn-ghost
                    '>
                    <CloseCircle size={36} variant='Bulk' color='red' />
                  </button>
                </div>

                {/* Content */}

                <div
                  className='
                    flex-1 overflow-y-auto overscroll-contain
                    min-h-0
                    pb-14 md:pb-10
                  '
                  style={{
                    WebkitOverflowScrolling: "touch",
                  }}>
                  <ImageWithSkeleton
                    src={project.image}
                    alt={project.title}
                    className='
                      object-cover object-top
                      w-full max-h-[220px] sm:max-h-[260px] md:max-h-[340px]
                      p-2
                    '
                    imageClassName='
                      object-contain
                      object-top
                      rounded-2xl
                      w-full
                      max-h-[220px]
                      sm:max-h-[260px]
                      md:max-h-[340px]
                      object-cover
                      object-top p-2'
                  />

                  <div
                    className='
                      space-y-2 sm:space-y-6 md:space-y-8 p-4 sm:p-5 md:p-6
                    '>
                    <p
                      className='
                        text-sm text-base-content/75 sm:text-base
                        leading-7 sm:leading-8
                      '>
                      {project.description}
                    </p>

                    {/* Info */}

                    <div
                      className='
                        grid
                        p-3 sm:p-4
                        gap-3
                      '>
                      <InfoRow
                        icon={<User variant='Bulk' />}
                        title='کارفرما'
                        value={project.client}
                      />

                      <InfoRow
                        icon={<Calendar variant='Bulk' />}
                        title='مدت اجرا'
                        value={project.duration}
                      />

                      <InfoRow
                        icon={<Code variant='Bulk' />}
                        title='نقش من'
                        value={project.role}
                      />
                    </div>

                    <Section title='چالش پروژه' text={project.challenge} />

                    <Section title='راهکار اجرا شده' text={project.solution} />

                    {/* Features */}

                    <div>
                      <h3
                        className='
                          mb-2
                          text-lg font-bold
                        '>
                        امکانات پروژه
                      </h3>

                      <div
                        className='
                          space-y-1
                        '>
                        {project.features.map((feature) => (
                          <div
                            key={feature}
                            className='
                              flex items-center
                              gap-3
                            '>
                            <TickCircle
                              size={20}
                              variant='Bold'
                              className='
                                text-success
                              '
                            />

                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}

                    <PortfolioTags
                      className='
                        pb-4
                      '
                      technologies={project.technologies}
                    />

                    {/* Button */}
                    <div
                      className='
                        py-4 md:pb-0
                      '>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noreferrer'
                        className='
                          rounded-full
                          btn btn-primary btn-block
                        '>
                        <Global variant='Bulk' />
                        مشاهده وب‌سایت
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

function InfoRow({ icon, title, value }) {
  return (
    <div
      className='
        flex items-center
        p-4
        bg-base-200/70
        rounded-2xl
        gap-4
      '>
      <div
        className='
          text-primary
        '>
        {icon}
      </div>

      <div>
        <p
          className='
            text-xs text-base-content/50
          '>
          {title}
        </p>

        <p
          className='
            font-semibold
          '>
          {value}
        </p>
      </div>
    </div>
  );
}

function Section({ title, text }) {
  return (
    <section>
      <h3
        className='
          mb-3
          text-lg font-bold
        '>
        {title}
      </h3>

      <p
        className='
          leading-8 text-base-content/70
        '>
        {text}
      </p>
    </section>
  );
}

export default PortfolioDrawer;
