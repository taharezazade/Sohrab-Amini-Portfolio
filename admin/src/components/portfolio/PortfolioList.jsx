/** @format */

import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";

const PortfolioList = ({
  portfolios = [],
  onView,
  onEdit,
  onDelete,
  onToggleStatus,
  actionLoading = false,
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
  >
    {portfolios.map((portfolio, index) => (
      <PortfolioCard
        key={portfolio.id}
        portfolio={portfolio}
        index={index}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
        onToggleStatus={onToggleStatus}
        actionLoading={actionLoading}
      />
    ))}
  </motion.div>
);

export default PortfolioList;
