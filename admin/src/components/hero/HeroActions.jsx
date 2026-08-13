/** @format */

import { motion } from "framer-motion";
import { Save2, Refresh2, Eye, ArrowRotateLeft } from "iconsax-reactjs";
import { useFormContext } from "react-hook-form";
import { toast } from "react-hot-toast";

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
   Component
========================================================= */

const HeroActions = ({ hero, onHeroChange }) => {
  const {
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useFormContext();

  /* =======================================================
     Save Hero
  ======================================================= */

  const handleSave = async (formData) => {
    try {
      /*
       * Important:
       * The backend Hero validation requires these fields.
       */

      const payload = {
        title: formData.title?.trim() || "",
        subtitle: formData.subtitle?.trim() || "",
        description: formData.description?.trim() || "",

        image: formData.image || hero?.image || "",

        resume: formData.resume ?? hero?.resume ?? null,

        primaryButtonText:
          formData.primaryButtonText?.trim() || hero?.primaryButtonText || null,

        primaryButtonLink:
          formData.primaryButtonLink?.trim() || hero?.primaryButtonLink || null,

        secondaryButtonText:
          formData.secondaryButtonText?.trim() ||
          hero?.secondaryButtonText ||
          null,

        secondaryButtonLink:
          formData.secondaryButtonLink?.trim() ||
          hero?.secondaryButtonLink ||
          null,

        seoTitle: formData.seoTitle?.trim() || hero?.seoTitle || null,

        seoDescription:
          formData.seoDescription?.trim() || hero?.seoDescription || null,

        isActive: formData.isActive ?? hero?.isActive ?? true,
      };

      /*
       * Backend request
       */

      const response = await heroApi.update(payload);

      const updatedHero = extractData(response);

      if (!updatedHero) {
        throw new Error("Updated Hero data was not returned.");
      }

      /*
       * Update parent Hero state.
       */

      if (onHeroChange) {
        onHeroChange(updatedHero);
      }

      /*
       * Reset React Hook Form with the new
       * values so isDirty becomes false.
       */

      reset({
        title: updatedHero.title ?? "",
        subtitle: updatedHero.subtitle ?? "",
        description: updatedHero.description ?? "",

        image: updatedHero.image ?? "",

        resume: updatedHero.resume ?? "",

        primaryButtonText: updatedHero.primaryButtonText ?? "",

        primaryButtonLink: updatedHero.primaryButtonLink ?? "",

        secondaryButtonText: updatedHero.secondaryButtonText ?? "",

        secondaryButtonLink: updatedHero.secondaryButtonLink ?? "",

        seoTitle: updatedHero.seoTitle ?? "",

        seoDescription: updatedHero.seoDescription ?? "",

        isActive: updatedHero.isActive ?? true,
      });

      toast.success("تغییرات Hero با موفقیت ذخیره شد.");
    } catch (error) {
      console.error("SAVE HERO ERROR:", error);

      const message = extractMessage(error, "ذخیره تغییرات Hero انجام نشد.");

      toast.error(message);
    }
  };

  /* =======================================================
     Reset Form
  ======================================================= */

  const handleReset = () => {
    if (!hero) {
      toast.error("اطلاعات Hero در دسترس نیست.");
      return;
    }

    reset({
      title: hero.title ?? "",
      subtitle: hero.subtitle ?? "",
      description: hero.description ?? "",

      image: hero.image ?? "",

      resume: hero.resume ?? "",

      primaryButtonText: hero.primaryButtonText ?? "",

      primaryButtonLink: hero.primaryButtonLink ?? "",

      secondaryButtonText: hero.secondaryButtonText ?? "",

      secondaryButtonLink: hero.secondaryButtonLink ?? "",

      seoTitle: hero.seoTitle ?? "",

      seoDescription: hero.seoDescription ?? "",

      isActive: hero.isActive ?? true,
    });

    toast.success("فرم به آخرین اطلاعات ذخیره‌شده بازنشانی شد.");
  };

  /* =======================================================
     Refresh
  ======================================================= */

  const handleRefresh = async () => {
    try {
      const response = await heroApi.get();

      const latestHero = extractData(response);

      if (!latestHero) {
        throw new Error("Hero data was not returned.");
      }

      reset({
        title: latestHero.title ?? "",
        subtitle: latestHero.subtitle ?? "",
        description: latestHero.description ?? "",

        image: latestHero.image ?? "",

        resume: latestHero.resume ?? "",

        primaryButtonText: latestHero.primaryButtonText ?? "",

        primaryButtonLink: latestHero.primaryButtonLink ?? "",

        secondaryButtonText: latestHero.secondaryButtonText ?? "",

        secondaryButtonLink: latestHero.secondaryButtonLink ?? "",

        seoTitle: latestHero.seoTitle ?? "",

        seoDescription: latestHero.seoDescription ?? "",

        isActive: latestHero.isActive ?? true,
      });

      if (onHeroChange) {
        onHeroChange(latestHero);
      }

      toast.success("اطلاعات Hero بروزرسانی شد.");
    } catch (error) {
      console.error("REFRESH HERO ERROR:", error);

      const message = extractMessage(
        error,
        "بروزرسانی اطلاعات Hero انجام نشد.",
      );

      toast.error(message);
    }
  };

  /* =======================================================
     Preview
  ======================================================= */

  const handlePreview = () => {
    window.open("/#hero", "_blank", "noopener,noreferrer");
  };

  /* =======================================================
     Render
  ======================================================= */

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
      }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* =====================================================
          Header
      ===================================================== */}

      <div className='border-b border-base-300 p-6'>
        <h2 className='text-xl font-bold'>عملیات</h2>

        <p className='mt-1 text-sm text-base-content/60'>
          تغییرات را ذخیره، بازنشانی یا پیش‌نمایش کنید.
        </p>
      </div>

      {/* =====================================================
          Buttons
      ===================================================== */}

      <div className='grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4'>
        {/* Save */}

        <button
          type='button'
          onClick={handleSubmit(handleSave)}
          disabled={!isDirty}
          className='btn btn-primary h-10 rounded-2xl'>
          <Save2 size={22} variant='Bulk' />
          ذخیره تغییرات
        </button>

        {/* Preview */}

        <button
          type='button'
          onClick={handlePreview}
          className='btn btn-outline btn-primary h-10 rounded-2xl'>
          <Eye size={22} variant='Bulk' />
          پیش‌نمایش
        </button>

        {/* Refresh */}

        <button
          type='button'
          onClick={handleRefresh}
          className='btn btn-outline btn-primary h-10 rounded-2xl'>
          <Refresh2 size={22} variant='Bulk' />
          بروزرسانی
        </button>

        {/* Reset */}

        <button
          type='button'
          onClick={handleReset}
          disabled={!isDirty}
          className='btn btn-outline h-10 rounded-2xl'>
          <ArrowRotateLeft size={22} variant='Bulk' />
          بازنشانی فرم
        </button>
      </div>

      {/* =====================================================
          Footer
      ===================================================== */}

      <div className='border-t border-base-300 px-6 py-4'>
        <p className='text-center text-sm leading-6 text-base-content/55'>
          {isDirty ?
            "تغییرات ذخیره‌نشده دارید."
          : "تمام تغییرات ذخیره شده‌اند."}
        </p>
      </div>
    </motion.section>
  );
};

export default HeroActions;
