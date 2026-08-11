/** @format */

import { useCallback, useEffect, useState } from "react";

import contactService from "@/services/contact.service";

export default function useContact() {
  const [contact, setContact] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const fetchContact = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await contactService.getContact();

      setContact(response.data?.data ?? null);
    } catch (err) {
      console.error("Failed to fetch contact:", err);

      setError(err);
      setContact(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  return {
    contact,
    loading,
    error,
    refresh: fetchContact,
  };
}
