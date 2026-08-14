/** @format */

import { useCallback, useEffect, useState } from "react";

import servicesApi from "@/api/services.api";

export const useServices = () => {
  const [services, setServices] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await servicesApi.getAll();

      const data = response?.data?.data;

      setServices(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("FETCH SERVICES ERROR:", error);

      setError(error);
      setServices([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return {
    services,
    loading,
    error,
    refresh: fetchServices,
  };
};

export default useServices;
