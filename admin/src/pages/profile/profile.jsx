/** @format */

import { useEffect, useState } from "react";

import Background from "../../components/contact/Background";

import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileForm from "../../components/profile/ProfileForm";
import ProfilePreview from "../../components/profile/ProfilePreview";
import ProfileSecurity from "../../components/profile/ProfileSecurity";
import ProfileActions from "../../components/profile/ProfileActions";
import ProfileSkeleton from "../../components/profile/ProfileSkeleton";

const initialState = {
  firstName: "",
  lastName: "",
  displayName: "",
  username: "",
  email: "",
  phone: "",
  bio: "",

  image: null,
  preview: null,

  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const Profile = () => {
  const [profile, setProfile] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const [initialized, setInitialized] = useState(false);

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);

        /*
          TODO:
          Get Profile API
        */

        setProfile(initialState);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
        setInitialized(true);
      }
    };

    loadProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  const handleImageChange = (file) => {
    if (!file) return;

    const preview = URL.createObjectURL(file);

    setProfile((prev) => ({
      ...prev,
      image: file,
      preview,
    }));

    setSaved(false);
  };

  const handleRemoveImage = () => {
    if (profile.preview) {
      URL.revokeObjectURL(profile.preview);
    }

    setProfile((prev) => ({
      ...prev,
      image: null,
      preview: null,
    }));

    setSaved(false);
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const formData = new FormData();

      Object.entries(profile).forEach(([key, value]) => {
        if (key !== "preview" && value !== null) {
          formData.append(key, value);
        }
      });

      /*
        TODO:
        await profileService.update(formData);
      */

      setSaved(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setProfile(initialState);
    setSaved(false);
  };

  const handleLogout = () => {
    /*
      TODO:
      clear auth
      remove token
      navigate login
    */
  };

  const handleChangePassword = async () => {
    try {
      setLoading(true);

      /*
        TODO:
        change password API
      */
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!initialized || loading) {
    return (
      <section className='relative min-h-screen overflow-hidden'>
        <Background />

        <div className='relative z-10'>
          <ProfileSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className='relative min-h-screen overflow-hidden'>
      <Background />

      <div className='relative z-10 space-y-4'>
        <ProfileHeader saved={saved} />

        <div
          className='
            grid
            gap-4
            xl:grid-cols-5
          '>
          <div
            className='
              space-y-4
              xl:col-span-3
            '>
            <div
              className='
                rounded-2xl
                border
                border-base-300
                bg-base-100/40
                p-4
                backdrop-blur-xl
              '>
              <ProfileForm
                values={profile}
                loading={loading}
                onChange={handleChange}
                onImageChange={handleImageChange}
                onRemoveImage={handleRemoveImage}
              />
            </div>

            <ProfileSecurity
              values={profile}
              loading={loading}
              onChange={handleChange}
              onSubmit={handleChangePassword}
            />

            <ProfileActions
              loading={loading}
              onSave={handleSave}
              onReset={handleReset}
              onLogout={handleLogout}
            />
          </div>

          <div
            className='
              xl:col-span-2
            '>
            <ProfilePreview data={profile} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
