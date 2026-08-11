/** @format */

import { useCallback, useEffect, useState } from "react";

import portfolioService from "@/services/portfolio.service";

export default function usePortfolio() {
  const [portfolio, setPortfolio] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchPortfolio = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await portfolioService.getPortfolio();

      const data = response.data?.data;

      setPortfolio(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch portfolio:", err);

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
