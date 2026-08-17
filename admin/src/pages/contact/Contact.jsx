/** @format */

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import contactApi from "@/api/contact.api";

import ContactHeader from "../../components/contact/ContactHeader";
import ContactSettings from "../../components/contact/ContactSettings";
import ContactSkeleton from "../../components/contact/ContactSkeleton";

const INITIAL_STATE = {
  id: null,
  phone: "",
  whatsapp: "",
  image: null,
  preview: null,
};

const Contact = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  const normalizeContact = (data) => {
    const contactData = data?.data ?? data;

    return {
      id: contactData?.id ?? null,

      phone: contactData?.phone ?? "",

      whatsapp: contactData?.whatsapp ?? "",

      image: contactData?.image ?? null,

      preview: contactData?.image ?? null,
    };
  };

  const loadContact = async () => {
    try {
      setLoading(true);

      const response = await contactApi.get();

      const data = response?.data?.data ?? response?.data;

      if (!data) {
        setContact(INITIAL_STATE);
        return;
      }

      setContact(normalizeContact(data));
    } catch (error) {
      console.error("Contact load error:", error);

      toast.error(
        error?.response?.data?.message ||
          "دریافت اطلاعات تماس با خطا مواجه شد.",
      );

      setContact(INITIAL_STATE);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContact();

    return () => {
      setContact((prev) => {
        if (prev.preview?.startsWith("blob:")) {
          URL.revokeObjectURL(prev.preview);
        }

        return prev;
      });
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    if (!file) return;

    if (file.type !== "image/webp") {
      toast.error("فقط تصاویر WEBP مجاز هستند.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("حجم تصویر نباید بیشتر از ۵ مگابایت باشد.");
      return;
    }

    setContact((prev) => {
      if (prev.preview?.startsWith("blob:")) {
        URL.revokeObjectURL(prev.preview);
      }

      return {
        ...prev,
        image: file,
        preview: URL.createObjectURL(file),
      };
    });
  };

  const handleRemoveImage = async () => {
    try {
      if (!contact.id) {
        setContact((prev) => ({
          ...prev,
          image: null,
          preview: null,
        }));

        return;
      }

      setSaving(true);

      await contactApi.clearImage(contact.id);

      if (contact.preview?.startsWith("blob:")) {
        URL.revokeObjectURL(contact.preview);
      }

      setContact((prev) => ({
        ...prev,
        image: null,
        preview: null,
      }));

      toast.success("تصویر با موفقیت حذف شد.");
    } catch (error) {
      console.error("Contact image remove error:", error);

      toast.error(
        error?.response?.data?.message || "حذف تصویر با خطا مواجه شد.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleSave = async () => {
    console.log("🔥 HANDLE SAVE FIRED");
    console.log("📦 Contact:", contact);

    try {
      setLoading(true);

      const response = await contactApi.update({
        phone: contact.phone,
        whatsapp: contact.whatsapp,
      });

      console.log("✅ Contact saved:", response.data);

      const updatedContact = response.data?.data || response.data;

      setContact((prev) => ({
        ...prev,
        phone: updatedContact.phone,
        whatsapp: updatedContact.whatsapp,
      }));

      toast.success("اطلاعات تماس با موفقیت ذخیره شد.");
    } catch (error) {
      console.error("❌ Contact save error:", error);
      console.error("❌ Response:", error.response?.data);

      toast.error(
        error.response?.data?.message || "ذخیره اطلاعات تماس با خطا مواجه شد.",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    loadContact();
  };

  if (loading) {
    return <ContactSkeleton />;
  }

  return (
    <section
      className='
        relative
        h-screen
        overflow-hidden
        p-4
      '>
      <div
        className='
          relative
          z-10
          mx-auto
          flex
          h-full
          max-w-7xl
          flex-col
          gap-4
        '>
        <ContactHeader
          phone={contact.phone}
          whatsapp={contact.whatsapp}
          saving={saving}
          onSave={handleSave}
        />

        <div
          className='
            flex-1
            overflow-auto
          '>
          <ContactSettings
            values={contact}
            loading={saving}
            onChange={handleChange}
            onImageChange={handleImageChange}
            onRemoveImage={handleRemoveImage}
            onSubmit={handleSave}
            onReset={handleReset}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
