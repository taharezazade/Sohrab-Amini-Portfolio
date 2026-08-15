/** @format */

import { useCallback, useEffect, useRef, useState } from "react";

import searchService from "@/services/search.service";

const SEARCH_DELAY = 350;

const useGlobalSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestIdRef = useRef(0);

  const executeSearch = useCallback(async (value) => {
    const normalizedValue = value?.trim() || "";

    if (!normalizedValue) {
      setResults([]);
      setLoading(false);
      setError(null);

      return;
    }

    const requestId = ++requestIdRef.current;

    setLoading(true);
    setError(null);

    try {
      const response = await searchService.search(normalizedValue);

      if (requestId !== requestIdRef.current) {
        return;
      }

      const data = response?.data?.data;

      setResults(Array.isArray(data) ? data : []);
    } catch (error) {
      if (requestId !== requestIdRef.current) {
        return;
      }

      console.error("GLOBAL SEARCH ERROR:", error);

      setResults([]);
      setError(error);
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const normalizedQuery = query.trim();

    if (!normalizedQuery) {
      setResults([]);
      setLoading(false);
      setError(null);

      return;
    }

    const timer = setTimeout(() => {
      executeSearch(normalizedQuery);
    }, SEARCH_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, [query, executeSearch]);

  const clearSearch = useCallback(() => {
    requestIdRef.current += 1;

    setQuery("");
    setResults([]);
    setLoading(false);
    setError(null);
  }, []);

  return {
    query,
    setQuery,
    results,
    loading,
    error,
    clearSearch,
  };
};

export default useGlobalSearch;
