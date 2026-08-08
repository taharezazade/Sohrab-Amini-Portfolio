/** @format */

import { useEffect, useState } from "react";

import aboutService from "@/services/about.service";

import {
  aboutContent,
  personalInfo,
  skills,
  stats,
  quote,
} from "@/components/About/about.data";

export default function useAbout() {
  const [loading, setLoading] = useState(true);

  const [about, setAbout] = useState({
    content: aboutContent,
    personalInfo,
    skills,
    stats,
    quote,
  });

  useEffect(() => {
    let mounted = true;

    async function loadAbout() {
      try {
        const response = await aboutService.getAbout();

        if (!mounted) return;

        if (response.data.success) {
          const api = response.data.data;

          if (!api) {
            setAbout({
              content: aboutContent,
              personalInfo,
              skills,
              stats,
              quote,
            });

            return;
          }

          setAbout({
            content: {
              title: api.title ?? aboutContent.title,

              heading: api.heading ?? aboutContent.heading,

              description: api.description ?? aboutContent.description,
            },

            personalInfo: api.personalInfo ?? personalInfo,

            skills: api.skills ?? skills,

            stats: api.stats ?? stats,

            quote: api.quote ?? quote,
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadAbout();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    about,
    loading,
  };
}
