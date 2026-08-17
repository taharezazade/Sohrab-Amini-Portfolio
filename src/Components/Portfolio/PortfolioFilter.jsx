/** @format */

import { motion } from "framer-motion";

function PortfolioFilter({
  categories,
  selectedCategory,
  onChangeCategory,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        flex flex-wrap items-center justify-center
        mb-4
        gap-3
      "
    >
      {categories.map((category) => {
        const active = selectedCategory === category;

        return (
          <button
            type="button"
            key={category}
            onClick={() => onChangeCategory(category)}
            className={`
              btn
              rounded-full
              transition-all
              duration-300

              ${
                active
                  ? "btn-primary shadow-lg shadow-primary/20"
                  : "btn-outline hover:btn-primary"
              }
            `}
          >
            {category}
          </button>
        );
      })}
    </motion.div>
  );
}

export default PortfolioFilter;
