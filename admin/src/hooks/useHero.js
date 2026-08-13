/** @format */

import { useCallback, useState } from "react";

import heroApi from "@/api/hero.api";

/* =========================================================
   Helpers
========================================================= */

const extractData = (response) => {
  return response?.data?.data ?? response?.data ?? null;
};

const extractMessage = (error, fallback) => {
  return (
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    fallback
  );
};

/* =========================================================
   useHero
========================================================= */

const useHero = () => {
  const [hero, setHero] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [isCreating, setIsCreating] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  const [isDeleting, setIsDeleting] = useState(false);

  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  /* =======================================================
     Clear Error
  ======================================================= */

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  /* =======================================================
     Fetch Hero
  ======================================================= */

  const getHero = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await heroApi.get();

      const data = extractData(response);

      setHero(data);

      return data;
    } catch (err) {
      const message = extractMessage(err, "دریافت اطلاعات Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /* =======================================================
     Get Hero By ID
  ======================================================= */

  const getHeroById = useCallback(async (id) => {
    try {
      setLoading(true);
      setError(null);

      const response = await heroApi.getById(id);

      const data = extractData(response);

      setHero(data);

      return data;
    } catch (err) {
      const message = extractMessage(err, "دریافت اطلاعات Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  /* =======================================================
     Create Hero
  ======================================================= */

  const createHero = useCallback(async (payload) => {
    try {
      setIsCreating(true);
      setError(null);

      const response = await heroApi.create(payload);

      const data = extractData(response);

      setHero(data);

      return data;
    } catch (err) {
      const message = extractMessage(err, "ایجاد بخش Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setIsCreating(false);
    }
  }, []);

  /* =======================================================
     Update Hero
  ======================================================= */

  const updateHero = useCallback(async (payload) => {
    try {
      setIsUpdating(true);
      setError(null);

      const response = await heroApi.update(payload);

      const data = extractData(response);

      setHero(data);

      return data;
    } catch (err) {
      const message = extractMessage(err, "بروزرسانی بخش Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, []);

  /* =======================================================
     Upsert Hero
  ======================================================= */

  const upsertHero = useCallback(async (payload) => {
    try {
      setIsUpdating(true);
      setError(null);

      const response = await heroApi.upsert(payload);

      const data = extractData(response);

      setHero(data);

      return data;
    } catch (err) {
      const message = extractMessage(err, "ذخیره اطلاعات Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, []);

  /* =======================================================
     Toggle Hero Status
  ======================================================= */

  const toggleHeroStatus = useCallback(async (isActive) => {
    try {
      setIsUpdatingStatus(true);
      setError(null);

      const response = await heroApi.toggleStatus(isActive);

      const data = extractData(response);

      /*
       * Backend normally returns the updated Hero.
       */

      if (data) {
        setHero(data);
      } else {
        /*
         * Fallback in case backend only returns
         * a success response.
         */

        setHero((currentHero) => {
          if (!currentHero) {
            return currentHero;
          }

          return {
            ...currentHero,
            isActive,
          };
        });
      }

      return data;
    } catch (err) {
      const message = extractMessage(err, "تغییر وضعیت Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setIsUpdatingStatus(false);
    }
  }, []);

  /* =======================================================
     Delete Hero
  ======================================================= */

  const deleteHero = useCallback(async () => {
    try {
      setIsDeleting(true);
      setError(null);

      const response = await heroApi.remove();

      setHero(null);

      return extractData(response);
    } catch (err) {
      const message = extractMessage(err, "حذف بخش Hero انجام نشد.");

      setError(message);

      throw err;
    } finally {
      setIsDeleting(false);
    }
  }, []);

  /* =======================================================
     Refresh
  ======================================================= */

  const refreshHero = useCallback(async () => {
    return await getHero();
  }, [getHero]);

  /* =======================================================
     Update Local Hero
  ======================================================= */

  const updateLocalHero = useCallback((updates) => {
    setHero((currentHero) => {
      if (!currentHero) {
        return currentHero;
      }

      return {
        ...currentHero,
        ...updates,
      };
    });
  }, []);

  /* =======================================================
     Reset
  ======================================================= */

  const resetHero = useCallback(() => {
    setHero(null);
    setError(null);
  }, []);

  /* =======================================================
     Return
  ======================================================= */

  return {
    /* Hero */
    hero,

    /* State */
    loading,
    error,

    isCreating,
    isUpdating,
    isDeleting,
    isUpdatingStatus,

    /* Requests */
    getHero,
    getHeroById,

    createHero,
    updateHero,
    upsertHero,

    toggleHeroStatus,

    deleteHero,

    /* Utilities */
    refreshHero,
    updateLocalHero,
    clearError,
    resetHero,
  };
};

export default useHero;
