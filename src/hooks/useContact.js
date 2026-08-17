/** @format */

import { useCallback, useEffect, useState } from "react";
import contactApi from "@/api/contact.api";

const DEFAULT_PHONE = "09123884766";

const initialContact = {
  id: null,
  phone: DEFAULT_PHONE,
  whatsapp: DEFAULT_PHONE,
  image: null,
};

const extractContact = (response) => {
  const apiResponse = response?.data;

  if (!apiResponse) {
    return null;
  }

  return apiResponse.data ?? apiResponse.contact ?? null;
};

const normalizePhone = (value) => {
  if (!value) return "";

  return String(value)
    .replace(/[۰-۹]/g, (digit) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(digit)))
    .replace(/\D/g, "");
};

const normalizeContact = (data) => {
  if (!data) {
    return initialContact;
  }

  const phone = normalizePhone(data.phone);
  const whatsapp = normalizePhone(data.whatsapp);

  return {
    id: data.id ?? null,

    phone: phone || DEFAULT_PHONE,

    whatsapp: whatsapp || phone || DEFAULT_PHONE,

    image: data.image ?? null,
  };
};

const useContact = () => {
  const [contact, setContact] = useState(initialContact);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContact = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await contactApi.get();

      const data = extractContact(response);

      setContact(normalizeContact(data));
    } catch (error) {
      setError(error);
      setContact(initialContact);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContact();
  }, [loadContact]);

  return {
    contact,
    loading,
    error,
    reload: loadContact,
  };
};

export default useContact;
