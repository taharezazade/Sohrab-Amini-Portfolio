/** @format */

import { useEffect, useState } from "react";
import api from "@/api/axios";

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await api.get("/services");

        setServices(res.data.data);
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return {
    services,
    loading,
  };
}
