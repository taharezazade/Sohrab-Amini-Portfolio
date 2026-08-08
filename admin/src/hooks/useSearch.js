/** @format */

import { useMemo } from "react";

export function useSearch(data = [], searchTerm = "", keys = []) {
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const value = searchTerm.toLowerCase();

    return data.filter((item) => {
      return keys.some((key) => {
        const field = item[key]?.toString().toLowerCase();

        return field?.includes(value);
      });
    });
  }, [data, searchTerm, keys]);

  return filteredData;
}
