/** @format */

import { useEffect, useState } from "react";

import Background from "../../components/contact/Background";

import SettingsHeader from "../../components/settings/SettingsHeader";
import SettingsLayout from "../../components/settings/SettingsLayout";
import SettingsForm from "../../components/settings/SettingsForm";
import SettingsPreview from "../../components/settings/SettingsPreview";
import SettingsSkeleton from "../../components/settings/SettingsSkeleton";

const initialState = {
  siteName: "",
  siteTitle: "",
  description: "",

  phone: "",
  email: "",

  logo: null,
  logoPreview: null,

  favicon: null,
  faviconPreview: null,

  metaTitle: "",
  metaDescription: "",
  keywords: "",
  canonicalUrl: "",

  instagram: "",
  linkedin: "",
  github: "",
  telegram: "",
  twitter: "",
  whatsapp: "",

  maintenanceMode: false,
  twoFactor: false,
  allowRegistration: false,
};

const Settings = () => {
  const [settings, setSettings] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        setLoading(true);

        // TODO:
        // const response = await settingsService.get();
        // setSettings(response.data);

        setSettings(initialState);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    loadSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogoChange = (file) => {
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setSettings((prev) => ({
      ...prev,
      logo: file,
      logoPreview: preview,
    }));
  };

  const handleRemoveLogo = () => {
    if (settings.logoPreview) {
      URL.revokeObjectURL(settings.logoPreview);
    }

    setSettings((prev) => ({
      ...prev,
      logo: null,
      logoPreview: null,
    }));
  };

  const handleFaviconChange = (file) => {
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setSettings((prev) => ({
      ...prev,
      favicon: file,
      faviconPreview: preview,
    }));
  };

  const handleRemoveFavicon = () => {
    if (settings.faviconPreview) {
      URL.revokeObjectURL(settings.faviconPreview);
    }

    setSettings((prev) => ({
      ...prev,
      favicon: null,
      faviconPreview: null,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(settings).forEach(([key, value]) => {
        if (
          key !== "logoPreview" &&
          key !== "faviconPreview" &&
          value !== null
        ) {
          formData.append(key, value);
        }
      });

      // TODO:
      // await settingsService.update(formData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSettings(initialState);
  };

  if (!initialized || loading) {
    return (
      <section className='relative min-h-screen overflow-hidden'>
        <Background />

        <div className='relative z-10'>
          <SettingsSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className='relative min-h-screen overflow-hidden'>
      <Background />

      <div className='relative z-10 space-y-4'>
        <SettingsHeader loading={loading} saved onSave={handleSave} />

        <SettingsLayout preview={<SettingsPreview data={settings} />}>
          <SettingsForm
            values={settings}
            loading={loading}
            onChange={handleChange}
            onSubmit={handleSave}
            onReset={handleReset}
            onLogoChange={handleLogoChange}
            onRemoveLogo={handleRemoveLogo}
            onFaviconChange={handleFaviconChange}
            onRemoveFavicon={handleRemoveFavicon}
          />
        </SettingsLayout>
      </div>
    </section>
  );
};

export default Settings;
