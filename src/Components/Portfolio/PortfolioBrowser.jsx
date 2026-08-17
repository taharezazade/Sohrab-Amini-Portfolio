/** @format */

import { Global, Lock1 } from "iconsax-reactjs";
import { motion } from "framer-motion";

function PortfolioBrowser({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.1,
      }}
      className="
        group
        mockup-browser
        border
        border-base-300
        bg-base-100
        overflow-hidden
        rounded-t-3xl
        rounded-b-none
      "
    >
      {/* Browser Header */}
      <div className="mockup-browser-toolbar px-4">
        <div className="flex items-center gap-3 w-full">
          {/* Address Bar */}
          <div
            className="
              flex flex-1 items-center
              gap-2
              rounded-full
              bg-base-200
              px-4 py-2
              text-sm
              text-base-content/70
            "
          >
            <Lock1 size={15} variant="Bulk" />
            <Global size={15} variant="Bulk" />

            <span className="truncate">
              {project.domain || project.slug || "portfolio"}
            </span>
          </div>
        </div>
      </div>

      {/* Screenshot */}
      <div
        className="
          relative
          h-[12.5rem] md:h-[16rem]
          overflow-hidden
          bg-base-200
        "
      >
        <motion.img
          src={project.image}
          alt={project.title}
          draggable={false}
          initial={{
            y: 0,
          }}
          whileHover={{
            y: "-65%",
          }}
          transition={{
            duration: 4,
            ease: "linear",
          }}
          className="
            w-full
            select-none
            block
          "
        />

        {/* Gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-24
            pointer-events-none
            bg-gradient-to-t
            from-base-200
            to-transparent
          "
        />
      </div>
    </motion.div>
  );
}

export default PortfolioBrowser;
