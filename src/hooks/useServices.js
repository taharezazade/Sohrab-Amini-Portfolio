/** @format */

import { useCallback, useEffect, useState } from "react";

import servicesService from "@/services/services.service";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchServices = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await servicesService.getServices();

      if (response.data?.success) {
        setServices(response.data.data ?? []);
      } else {
        setServices([]);
      }
    } catch (error) {
      console.error("Failed to fetch services:", error);

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
}

export default useServices;
