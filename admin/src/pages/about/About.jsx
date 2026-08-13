/** @format */

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

import AboutHeader from "../../components/about/AboutHeader";
import AboutForm from "../../components/about/AboutForm";
import AboutPreview from "../../components/about/AboutPreview";
import AboutStatusCard from "../../components/about/AboutStatusCard";
import AboutStats from "../../components/about/AboutStats";
import AboutActions from "../../components/about/AboutActions";
import AboutSkeleton from "../../components/about/AboutSkeleton";

import aboutApi from "@/api/about.api";

/* =========================================================
   EMPTY FORM
========================================================= */

const EMPTY_FORM = {
  title: "",
  description: "",
  birthYear: "",
  location: "",
  experience: "",
};

/* =========================================================
   NORMALIZE DATA
========================================================= */

const normalizeAbout = (data) => {
  if (!data) {
    return {
      ...EMPTY_FORM,
    };
  }

  return {
    title: data.title ?? "",

    description: data.description ?? "",

    birthYear:
      data.birthYear === null || data.birthYear === undefined ?
        ""
      : String(data.birthYear),

    location: data.location ?? "",

    experience:
      data.experience === null || data.experience === undefined ?
        ""
      : String(data.experience),
  };
};

/* =========================================================
   GET RESPONSE DATA
========================================================= */

const getResponseData = (response) => {
  return response?.data?.data ?? response?.data ?? null;
};

/* =========================================================
   BUILD PAYLOAD
========================================================= */

const buildPayload = (form) => {
  return {
    title: String(form.title ?? "").trim(),

    description: String(form.description ?? "").trim(),

    birthYear: Number(form.birthYear),

    location: String(form.location ?? "").trim(),

    experience: Number(form.experience),
  };
};

/* =========================================================
   COMPONENT
========================================================= */

const About = () => {
  const [about, setAbout] = useState(null);

  const [form, setForm] = useState({
    ...EMPTY_FORM,
  });

  const [isLoading, setIsLoading] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [hasChanges, setHasChanges] = useState(false);

  /* =========================================================
     FETCH
  ========================================================= */

  const fetchAbout = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await aboutApi.get();

      const data = getResponseData(response);

      if (!data) {
        throw new Error("About data was not returned by API.");
      }

      const normalized = normalizeAbout(data);

      setAbout(data);

      setForm(normalized);

      setHasChanges(false);
    } catch (error) {
      console.error("GET ABOUT ERROR:", error);

      toast.error(
        error?.response?.data?.message || "دریافت اطلاعات درباره من انجام نشد.",
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  /* =========================================================
     INITIAL LOAD
  ========================================================= */

  useEffect(() => {
    fetchAbout();
  }, [fetchAbout]);

  /* =========================================================
     CHANGE
  ========================================================= */

  const handleFormChange = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));

    setHasChanges(true);
  };

  /* =========================================================
     UPDATE
  ========================================================= */

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = buildPayload(form);

      console.log("ABOUT UPDATE PAYLOAD:", payload);

      /*
       * Client validation
       */

      if (!payload.title) {
        toast.error("عنوان الزامی است.");
        return;
      }

      if (payload.description.length < 20) {
        toast.error("توضیحات باید حداقل 20 کاراکتر باشد.");
        return;
      }

      if (!Number.isInteger(payload.birthYear)) {
        toast.error("سال تولد باید عدد صحیح باشد.");
        return;
      }

      if (payload.birthYear < 1300 || payload.birthYear > 1500) {
        toast.error("سال تولد معتبر نیست.");
        return;
      }

      if (!payload.location) {
        toast.error("محل سکونت الزامی است.");
        return;
      }

      if (!Number.isInteger(payload.experience)) {
        toast.error("سابقه کاری باید عدد صحیح باشد.");
        return;
      }

      if (payload.experience < 0 || payload.experience > 60) {
        toast.error("سابقه کاری معتبر نیست.");
        return;
      }

      /*
       * فقط UPDATE
       */

      const response = await aboutApi.update(payload);

      console.log("ABOUT UPDATE RESPONSE:", response?.data);

      const updated = getResponseData(response);

      if (updated) {
        setAbout(updated);

        setForm(normalizeAbout(updated));
      }

      setHasChanges(false);

      toast.success("اطلاعات درباره من با موفقیت بروزرسانی شد.");
    } catch (error) {
      console.error("================================");

      console.error("ABOUT UPDATE ERROR");

      console.error("STATUS:", error?.response?.status);

      console.error("DATA:", error?.response?.data);

      console.error("ERRORS:", error?.response?.data?.errors);

      console.error("================================");

      const errors = error?.response?.data?.errors;

      if (Array.isArray(errors)) {
        errors.forEach((item) => {
          console.error("VALIDATION:", item);
        });
      }

      toast.error(
        error?.response?.data?.message || "بروزرسانی اطلاعات انجام نشد.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /* =========================================================
     RESET
  ========================================================= */

  const handleReset = () => {
    if (!about) {
      return;
    }

    setForm(normalizeAbout(about));

    setHasChanges(false);

    toast.success("تغییرات بازنشانی شد.");
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <AboutSkeleton />
      </div>
    );
  }

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <section
      className='
        min-h-screen
        bg-base-200
        p-4
        md:p-6
      '>
      <div
        className='
          container
          mx-auto
          space-y-6
        '>
        {/* Header */}

        <motion.div
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
          }}>
          <AboutHeader />
        </motion.div>

        {/* Main */}

        <div
          className='
            grid
            grid-cols-1
            gap-6
            xl:grid-cols-3
          '>
          {/* Form */}

          <motion.div
            className='
              space-y-6
              xl:col-span-2
            '
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
              delay: 0.1,
            }}>
            <AboutForm
              form={form}
              onChange={handleFormChange}
              disabled={isSubmitting}
            />

            <AboutActions
              hasAbout={Boolean(about)}
              isSubmitting={isSubmitting}
              hasChanges={hasChanges}
              onSubmit={handleSubmit}
              onReset={handleReset}
            />
          </motion.div>

          {/* Preview */}

          <motion.div
            className='space-y-6'
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
              delay: 0.2,
            }}>
            <AboutPreview about={form} />

            <AboutStatusCard about={about} />
          </motion.div>
        </div>

        {/* Stats */}

        <motion.div
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
            delay: 0.3,
          }}>
          <AboutStats about={form} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
