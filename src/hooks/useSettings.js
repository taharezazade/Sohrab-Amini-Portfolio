/** @format */

import { useCallback, useEffect, useState } from "react";

import settingsService from "@/services/settings.service";

export default function useSettings() {
  const [settings, setSettings] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchSettings = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await settingsService.getSettings();

      setSettings(response.data?.data ?? null);
    } catch (err) {
      console.error("Failed to fetch settings:", err);

      setError(err);
      setSettings(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return {
    settings,
    loading,
    error,
    refresh: fetchSettings,
  };
}
