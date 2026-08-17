/** @format */

import { useCallback, useEffect, useState } from "react";

import portfolioService from "@/services/portfolio.service";
import { normalizePortfolio } from "@/utils/portfolio.mapper";

export default function usePortfolio() {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPortfolio = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await portfolioService.getPublishedPortfolio();

      const data =
        response?.data?.data ??
        response?.data?.portfolio ??
        response?.data ??
        [];

      const items = Array.isArray(data) ? data : [];

      setPortfolio(items.map(normalizePortfolio).filter(Boolean));
    } catch (err) {
      console.error("Failed to fetch published portfolio:", err);

      setError(err);
      setPortfolio([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  return {
    portfolio,
    loading,
    error,
    refresh: fetchPortfolio,
  };
}
