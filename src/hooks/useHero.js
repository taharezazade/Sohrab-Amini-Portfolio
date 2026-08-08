/** @format */

import { useCallback, useEffect, useState } from "react";

import heroService from "@/services/hero.service";

import {
  heroData,
  heroBadges,
  heroDetails,
  heroServices,
  heroTechnologies,
} from "@/components/Hero/hero.data";

export default function useHero() {
  const [hero, setHero] = useState(heroData);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchHero = useCallback(async () => {
    try {
      setLoading(true);

      const response = await heroService.getHero();

      if (response.data.success) {
        const apiHero = response.data.data;

        setHero({
          ...heroData,

          title: apiHero.title ?? heroData.title,

          subtitle: apiHero.subtitle ?? heroData.subtitle,

          description: apiHero.description ?? heroData.description,

          image: apiHero.image ?? heroData.image,

          resume: apiHero.resume ?? heroData.resume,

          buttons: {
            primary: {
              text: apiHero.primaryButtonText ?? heroData.buttons.primary.text,

              link: apiHero.primaryButtonLink ?? heroData.buttons.primary.link,
            },

            secondary: {
              text:
                apiHero.secondaryButtonText ?? heroData.buttons.secondary.text,

              link:
                apiHero.secondaryButtonLink ?? heroData.buttons.secondary.link,
            },
          },
        });

        setError(null);
      }
    } catch (err) {
      setHero(heroData);

      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHero();
  }, [fetchHero]);

  return {
    hero,
    badges: heroBadges,
    services: heroServices,
    technologies: heroTechnologies,
    details: heroDetails,
    loading,
    error,
    refresh: fetchHero,
  };
}
