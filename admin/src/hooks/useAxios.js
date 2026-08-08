/** @format */

import { useState } from "react";

export function useAxios() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = async (callback) => {
    try {
      setLoading(true);
      setError(null);

      const response = await callback();

      return response;
    } catch (err) {
      setError(err);

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    request,
    loading,
    error,
  };
}
