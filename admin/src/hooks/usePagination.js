/** @format */

import { useMemo, useState } from "react";

export function usePagination(totalItems, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [totalItems, itemsPerPage]);

  const paginate = (items) => {
    const start = (currentPage - 1) * itemsPerPage;

    return items.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const previousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (page) => {
    setCurrentPage(Math.min(Math.max(page, 1), totalPages));
  };

  return {
    currentPage,
    totalPages,

    paginate,

    nextPage,
    previousPage,
    goToPage,

    setCurrentPage,
  };
}
