/** @format */

import { useCallback, useEffect, useState } from "react";

import aboutService from "@/services/about.service";

import {
  aboutContent,
  personalInfo,
  skills,
  stats,
  quote,
} from "@/components/About/about.data";

const defaultAbout = {
  content: aboutContent,
  personalInfo,
  skills,
  stats,
  quote,
};

export default function useAbout() {
  const [about, setAbout] = useState(defaultAbout);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchAbout = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await aboutService.getAbout();

      const data = response.data?.data;

      if (!data) {
        setAbout(defaultAbout);
        return;
      }

      setAbout({
        content: {
          ...aboutContent,

          title: data.title ?? aboutContent.title,

          description: data.description ?? aboutContent.description,
        },

        personalInfo: data.personalInfo ?? personalInfo,

        skills: data.skills ?? skills,

        stats: data.stats ?? stats,

        quote: data.quote ?? quote,
      });
    } catch (err) {
      console.error("Failed to fetch about:", err);

      setError(err);
      setAbout(defaultAbout);
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
    refresh: fetchAbout,
  };
}
