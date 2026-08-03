/** @format */

import { useEffect, useState } from "react";

import Background from "../../components/contact/Background";

import ContactHeader from "../../components/contact/ContactHeader";
import ContactSettings from "../../components/contact/ContactSettings";
import ContactSkeleton from "../../components/contact/ContactSkeleton";

const initialState = {
  phone: "09123884766",
  whatsapp: "09123884766",
  image: null,
  preview: null,
};

const Contact = () => {
  const [contact, setContact] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadContact = async () => {
      try {
        setLoading(true);

        setContact(initialState);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);

        setInitialized(true);
      }
    };

    loadContact();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    if (!file) return;

    if (file.type !== "image/webp") return;

    const preview = URL.createObjectURL(file);

    setContact((prev) => ({
      ...prev,

      image: file,

      preview,
    }));
  };

  const handleRemoveImage = () => {
    if (contact.preview) {
      URL.revokeObjectURL(contact.preview);
    }

    setContact((prev) => ({
      ...prev,

      image: null,

      preview: null,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("phone", contact.phone);

      formData.append("whatsapp", contact.whatsapp);

      if (contact.image) {
        formData.append("image", contact.image);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setContact(initialState);
  };

  if (!initialized || loading) {
    return (
      <section
        className='
          relative
          h-screen
          overflow-hidden
          p-4
        '>
        {/* <Background /> */}

        <div className='relative z-10 h-full'>
          <ContactSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section
      className='
        relative
        h-screen
        overflow-hidden
        p-4
      '>
      {/* <Background /> */}

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

          saving={loading}

          onSave={handleSave}
        />

        <div
          className='
            flex-1
            overflow-hidden
          '>
          <ContactSettings
            values={contact}

            loading={loading}

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
