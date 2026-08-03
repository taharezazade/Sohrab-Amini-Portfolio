/** @format */

import { motion } from "framer-motion";
import PortfolioTable from "../tables/PortfolioTable";

const PortfolioList = ({
  portfolios = [],

  onView,
  onEdit,
  onDelete,

  onToggleStatus,
  onToggleFeatured,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}>
      <PortfolioTable
        portfolios={portfolios}

        onView={onView}

        onEdit={onEdit}

        onDelete={onDelete}

        onToggleStatus={onToggleStatus}

        onToggleFeatured={onToggleFeatured}
      />
    </motion.div>
  );
};

export default PortfolioList;
