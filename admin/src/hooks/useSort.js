/** @format */

import { useMemo, useState } from "react";

export function useSort(
  data = [],
  initialKey = null,
  initialDirection = "asc",
) {
  const [sortConfig, setSortConfig] = useState({
    key: initialKey,
    direction: initialDirection,
  });

  const sortedData = useMemo(() => {
    if (!sortConfig.key) {
      return data;
    }

    return [...data].sort((a, b) => {
      const first = a[sortConfig.key];

      const second = b[sortConfig.key];

      if (first < second) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }

      if (first > second) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }

      return 0;
    });
  }, [data, sortConfig]);

  const sortBy = (key) => {
    setSortConfig((prev) => ({
      key,

      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return {
    sortedData,
    sortConfig,
    sortBy,
  };
}
