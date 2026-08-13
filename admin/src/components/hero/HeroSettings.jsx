/** @format */

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Eye,
  EyeSlash,
  DocumentUpload,
  Refresh2,
  TickCircle,
  CloseCircle,
  ArrowRight2,
} from "iconsax-reactjs";
import { toast } from "react-hot-toast";

import heroApi from "@/api/hero.api";
import uploadApi from "@/api/upload.api";

/* =========================================================
   Constants
========================================================= */

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

const ALLOWED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

/* =========================================================
   Component
========================================================= */

const HeroSettings = ({ hero, onHeroChange }) => {
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isUploadingResume, setIsUploadingResume] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentHero = hero || null;

  /* =======================================================
     Hero Status
  ======================================================= */

  const isActive = Boolean(currentHero?.isActive);

  const statusText = useMemo(() => {
    if (!currentHero) {
      return "اطلاعات Hero دریافت نشده است.";
    }

    return isActive ?
        "بخش Hero در صفحه اصلی فعال است."
      : "بخش Hero در صفحه اصلی غیرفعال است.";
  }, [currentHero, isActive]);

  /* =======================================================
     Fetch Hero
  ======================================================= */

  const fetchHero = async () => {
    try {
      setIsLoading(true);

      const response = await heroApi.get();

      const data = response?.data?.data ?? response?.data;

      if (data && onHeroChange) {
        onHeroChange(data);
      }
    } catch (error) {
      console.error("FETCH HERO SETTINGS ERROR:", error);
    } finally {
      setIsLoading(false);
    }
  };

  /* =======================================================
     Initial Load
  ======================================================= */

  useEffect(() => {
    if (!hero) {
      fetchHero();
    }
  }, []);

  /* =======================================================
     Toggle Hero Status
  ======================================================= */

  const handleToggleStatus = async () => {
    if (!currentHero) {
      toast.error("اطلاعات Hero در دسترس نیست.");
      return;
    }

    try {
      setIsUpdatingStatus(true);

      const nextStatus = !currentHero.isActive;

      const response = await heroApi.toggleStatus(nextStatus);

      const updatedHero = response?.data?.data ?? response?.data ?? null;

      if (updatedHero && onHeroChange) {
        onHeroChange(updatedHero);
      } else if (onHeroChange) {
        onHeroChange({
          ...currentHero,
          isActive: nextStatus,
        });
      }

      toast.success(nextStatus ? "بخش Hero فعال شد." : "بخش Hero غیرفعال شد.");
    } catch (error) {
      console.error("TOGGLE HERO STATUS ERROR:", error);

      const message =
        error?.response?.data?.message || "تغییر وضعیت Hero انجام نشد.";

      toast.error(message);
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  /* =======================================================
     Resume Upload
  ======================================================= */

  const handleResumeUpload = async (event) => {
    const file = event.target.files?.[0];

    event.target.value = "";

    if (!file) {
      return;
    }

    if (!ALLOWED_RESUME_TYPES.includes(file.type)) {
      toast.error("فرمت رزومه باید PDF، DOC یا DOCX باشد.");

      return;
    }

    if (file.size > MAX_RESUME_SIZE) {
      toast.error("حجم فایل رزومه نباید بیشتر از 5MB باشد.");

      return;
    }

    try {
      setIsUploadingResume(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("folder", "hero");

      const response = await uploadApi.single(formData);

      const uploadedFile = response?.data?.data ?? response?.data ?? null;

      const resumeUrl =
        uploadedFile?.url || uploadedFile?.path || uploadedFile?.fileUrl;

      if (!resumeUrl) {
        throw new Error("Uploaded resume URL was not returned.");
      }

      const updateResponse = await heroApi.update({
        title: currentHero.title,
        subtitle: currentHero.subtitle,
        description: currentHero.description,
        image: currentHero.image,
        resume: resumeUrl,

        primaryButtonText: currentHero.primaryButtonText ?? null,

        primaryButtonLink: currentHero.primaryButtonLink ?? null,

        secondaryButtonText: currentHero.secondaryButtonText ?? null,

        secondaryButtonLink: currentHero.secondaryButtonLink ?? null,

        seoTitle: currentHero.seoTitle ?? null,

        seoDescription: currentHero.seoDescription ?? null,

        isActive: currentHero.isActive,
      });

      const updatedHero =
        updateResponse?.data?.data ?? updateResponse?.data ?? null;

      if (updatedHero && onHeroChange) {
        onHeroChange(updatedHero);
      } else if (onHeroChange) {
        onHeroChange({
          ...currentHero,
          resume: resumeUrl,
        });
      }

      toast.success("رزومه با موفقیت بروزرسانی شد.");
    } catch (error) {
      console.error("UPLOAD HERO RESUME ERROR:", error);

      const message =
        error?.response?.data?.message || "آپلود رزومه انجام نشد.";

      toast.error(message);
    } finally {
      setIsUploadingResume(false);
    }
  };

  /* =======================================================
     Refresh Hero
  ======================================================= */

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);

      await fetchHero();

      toast.success("اطلاعات Hero بروزرسانی شد.");
    } catch (error) {
      console.error("REFRESH HERO ERROR:", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  /* =======================================================
     Resume
  ======================================================= */

  const hasResume = Boolean(currentHero?.resume);

  /* =======================================================
     Loading
  ======================================================= */

  if (isLoading && !currentHero) {
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
        className='rounded-3xl border border-base-300 bg-base-100'>
        <div className='flex min-h-48 items-center justify-center'>
          <span className='loading loading-spinner loading-md text-primary' />
        </div>
      </motion.section>
    );
  }

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
        duration: 0.4,
      }}
      className='rounded-3xl border border-base-300 bg-base-100'>
      {/* =====================================================
          Header
      ===================================================== */}

      <div className='border-b border-base-300 p-6'>
        <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <div>
            <h2 className='text-xl font-bold'>تنظیمات بخش هیرو</h2>

            <p className='mt-1 text-sm text-base-content/60'>
              مدیریت وضعیت نمایش و فایل‌های مرتبط با Hero
            </p>
          </div>

          <div
            className={`badge rounded-xl ${
              isActive ? "badge-success" : "badge-error"
            }`}>
            {isActive ? "فعال" : "غیرفعال"}
          </div>
        </div>
      </div>

      {/* =====================================================
          Content
      ===================================================== */}

      <div className='grid gap-6 p-6 lg:grid-cols-2'>
        {/* ===================================================
            Visibility
        =================================================== */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                isActive ?
                  "bg-success/10 text-success"
                : "bg-error/10 text-error"
              }`}>
              {isActive ?
                <Eye size={26} variant='Bulk' />
              : <EyeSlash size={26} variant='Bulk' />}
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>نمایش بخش هیرو</h3>

              <p className='mt-1 text-sm text-base-content/60'>{statusText}</p>
            </div>

            <input
              type='checkbox'
              className='toggle toggle-primary'
              checked={isActive}
              disabled={isUpdatingStatus || !currentHero}
              onChange={handleToggleStatus}
            />
          </div>
        </div>

        {/* ===================================================
            Resume
        =================================================== */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <DocumentUpload size={26} variant='Bulk' />
            </div>

            <div className='flex-1 min-w-0'>
              <h3 className='font-bold'>رزومه</h3>

              <p className='mt-1 truncate text-sm text-base-content/60'>
                {hasResume ?
                  "فایل رزومه ثبت شده است."
                : "هنوز فایل رزومه‌ای ثبت نشده است."}
              </p>
            </div>

            <label
              className={`btn btn-primary btn-sm rounded-xl ${
                isUploadingResume ? "pointer-events-none" : ""
              }`}>
              {isUploadingResume ?
                <>
                  <span className='loading loading-spinner loading-xs' />
                  در حال آپلود
                </>
              : <>
                  <DocumentUpload size={16} />
                  تغییر
                </>
              }

              <input
                type='file'
                className='hidden'
                accept='.pdf,.doc,.docx'
                disabled={isUploadingResume}
                onChange={handleResumeUpload}
              />
            </label>
          </div>

          {hasResume && (
            <div className='mt-4 flex items-center justify-between rounded-xl border border-base-300 bg-base-100 px-4 py-3'>
              <span className='max-w-[70%] truncate text-xs text-base-content/60'>
                {currentHero.resume}
              </span>

              <a
                href={currentHero.resume}
                target='_blank'
                rel='noreferrer'
                className='btn btn-ghost btn-xs rounded-lg'>
                مشاهده
                <ArrowRight2 size={14} />
              </a>
            </div>
          )}
        </div>

        {/* ===================================================
            Refresh
        =================================================== */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary'>
              <Refresh2 size={26} variant='Bulk' />
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>بروزرسانی اطلاعات</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                دریافت آخرین اطلاعات Hero از سرور
              </p>
            </div>

            <button
              type='button'
              className='btn btn-outline btn-primary btn-sm rounded-xl'
              disabled={isRefreshing}
              onClick={handleRefresh}>
              {isRefreshing ?
                <>
                  <span className='loading loading-spinner loading-xs' />
                  دریافت
                </>
              : <>
                  <Refresh2 size={16} />
                  بروزرسانی
                </>
              }
            </button>
          </div>
        </div>

        {/* ===================================================
            Status
        =================================================== */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5'>
          <div className='flex items-center gap-4'>
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                currentHero ?
                  "bg-success/10 text-success"
                : "bg-error/10 text-error"
              }`}>
              {currentHero ?
                <TickCircle size={26} variant='Bulk' />
              : <CloseCircle size={26} variant='Bulk' />}
            </div>

            <div className='flex-1'>
              <h3 className='font-bold'>وضعیت اطلاعات</h3>

              <p className='mt-1 text-sm text-base-content/60'>
                {currentHero ?
                  "اطلاعات Hero با موفقیت از API دریافت شده است."
                : "اطلاعات Hero در دسترس نیست."}
              </p>
            </div>

            <div
              className={`badge badge-outline rounded-xl ${
                currentHero ? "badge-success" : "badge-error"
              }`}>
              {currentHero ? "آماده" : "خطا"}
            </div>
          </div>
        </div>

        {/* ===================================================
            Preview
        =================================================== */}

        <div className='rounded-2xl border border-base-300 bg-base-200 p-5 lg:col-span-2'>
          <div className='flex flex-col gap-5 md:flex-row md:items-center md:justify-between'>
            <div>
              <h3 className='font-bold'>پیش‌نمایش صفحه اصلی</h3>

              <p className='mt-2 text-sm leading-7 text-base-content/60'>
                وضعیت فعلی Hero را در صفحه اصلی بررسی کنید.
              </p>
            </div>

            <div className='flex flex-wrap gap-3'>
              <button
                type='button'
                className='btn btn-primary rounded-2xl'
                onClick={() => {
                  window.open("/#hero", "_blank", "noopener,noreferrer");
                }}>
                <Eye size={18} />
                مشاهده
              </button>

              <button
                type='button'
                className={`btn rounded-2xl ${
                  isActive ? "btn-outline btn-error" : "btn-outline btn-success"
                }`}
                disabled={isUpdatingStatus || !currentHero}
                onClick={handleToggleStatus}>
                {isActive ?
                  <>
                    <EyeSlash size={18} />
                    غیرفعال کردن
                  </>
                : <>
                    <Eye size={18} />
                    فعال کردن
                  </>
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSettings;
