/** @format */

import { useCallback, useEffect, useState } from "react";

import aboutApi from "@/api/about.api";

const useAbout = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAbout = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await aboutApi.get();

      // console.log("PUBLIC ABOUT RESPONSE:", response);

      const data =
        response?.data?.data ?? response?.data?.about ?? response?.data ?? null;

      // console.log("PUBLIC ABOUT DATA:", data);

      setAbout(data);
    } catch (err) {
      // console.error("PUBLIC ABOUT ERROR:", err);

      setError(err);
      setAbout(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  return {
    about,
    loading,
    error,
    refetch: fetchAbout,
  };
};

export default useAbout;
