/** @format */

import { motion } from "framer-motion";
import { Global } from "iconsax-reactjs";

import PortfolioBrowser from "./PortfolioBrowser";
import PortfolioTags from "./PortfolioTags";

function PortfolioCard({ project, onOpen }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        flex flex-col overflow-hidden
        h-full
        bg-base-100
        rounded-[32px] border border-base-300
        shadow-xl transition-all duration-500
        group
      "
    >
      <PortfolioBrowser project={project} />

      <div
        className="
          flex flex-1 flex-col
          p-6
        "
      >
        <div>
          <span
            className="
              badge badge-outline
            "
          >
            {project.category || "عمومی"}
          </span>

          <h3
            className="
              mt-4
              text-2xl font-black
            "
          >
            {project.title}
          </h3>

          <p
            className="
              mt-4
              leading-8 text-base-content/70
            "
          >
            {project.description}
          </p>
        </div>

        <PortfolioTags technologies={project.technologies} />

        <div
          className="
            mt-auto pt-8
          "
        >
          <div
            className="
              flex items-center justify-between
              gap-3
            "
          >
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  rounded-full btn btn-primary
                  shadow-none
                "
              >
                <Global size={18} variant="Bulk" />
                مشاهده
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="
                  flex-1
                  rounded-full btn btn-primary
                  shadow-none
                  opacity-50
                "
              >
                <Global size={18} variant="Bulk" />
                مشاهده
              </button>
            )}

            <button
              type="button"
              onClick={() => onOpen(project)}
              className="
                btn
                btn-outline
                outline-none
                border-none
                rounded-full
                shadow-none
                flex-1
              "
            >
              جزئیات پروژه
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default PortfolioCard;
