/** @format */

import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { toast } from "react-hot-toast";

import heroApi from "@/api/hero.api";

import HeroHeader from "../../components/hero/HeroHeader";
import HeroStats from "../../components/hero/HeroStats";
import HeroForm from "../../components/hero/HeroForm";
import HeroPreview from "../../components/hero/HeroPreview";
import HeroImageUploader from "../../components/hero/HeroImageUploader";
import HeroResumeUploader from "../../components/hero/HeroResumeUploader";
import HeroSeoCard from "../../components/hero/HeroSeoCard";
import HeroSettings from "../../components/hero/HeroSettings";
import HeroActions from "../../components/hero/HeroActions";

/* =========================================================
   Form Mapper
========================================================= */

const mapHeroToForm = (hero) => {
  return {
    title: hero?.title ?? "",
    subtitle: hero?.subtitle ?? "",
    description: hero?.description ?? "",

    image: hero?.image ?? "",

    resume: hero?.resume ?? "",

    primaryButtonText: hero?.primaryButtonText ?? "",

    primaryButtonLink: hero?.primaryButtonLink ?? "",

    secondaryButtonText: hero?.secondaryButtonText ?? "",

    secondaryButtonLink: hero?.secondaryButtonLink ?? "",

    seoTitle: hero?.seoTitle ?? "",

    seoDescription: hero?.seoDescription ?? "",

    isActive: hero?.isActive ?? true,
  };
};

/* =========================================================
   Component
========================================================= */

const Hero = () => {
  const [hero, setHero] = useState(null);

  const [loading, setLoading] = useState(true);

  const methods = useForm({
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      image: "",
      resume: "",
      primaryButtonText: "",
      primaryButtonLink: "",
      secondaryButtonText: "",
      secondaryButtonLink: "",
      seoTitle: "",
      seoDescription: "",
      isActive: true,
    },
  });

  const { reset } = methods;

  /* =======================================================
     Fetch Hero
  ======================================================= */

  useEffect(() => {
    const fetchHero = async () => {
      try {
        setLoading(true);

        const response = await heroApi.get();

        const data = response?.data?.data ?? response?.data ?? null;

        if (!data) {
          throw new Error("Hero data was not returned.");
        }

        setHero(data);

        /*
         * Very important:
         * Put API data into React Hook Form.
         */

        reset(mapHeroToForm(data));
      } catch (error) {
        console.error("FETCH HERO ERROR:", error);

        toast.error(
          error?.response?.data?.message || "دریافت اطلاعات Hero انجام نشد.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, [reset]);

  /* =======================================================
     Hero Change
  ======================================================= */

  const handleHeroChange = (updatedHero) => {
    if (!updatedHero) {
      return;
    }

    setHero(updatedHero);

    reset(mapHeroToForm(updatedHero));
  };

  /* =======================================================
     Loading
  ======================================================= */

  if (loading) {
    return (
      <div className='flex min-h-96 items-center justify-center'>
        <span className='loading loading-spinner loading-lg text-primary' />
      </div>
    );
  }

  /* =======================================================
     Render
  ======================================================= */

  return (
    <FormProvider {...methods}>
      <div className='space-y-6'>
        {/* Header */}

        <HeroHeader />

        {/* Stats */}

        <HeroStats />

        {/* Main */}

        <div className='grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]'>
          {/* Left */}

          <div className='space-y-6'>
            <HeroForm />

            <div className='grid gap-6 xl:grid-cols-2'>
              <HeroImageUploader />

              <HeroResumeUploader />
            </div>

            <HeroSettings hero={hero} onHeroChange={handleHeroChange} />

            <HeroActions hero={hero} onHeroChange={handleHeroChange} />
          </div>

          {/* Right */}

          <aside className='space-y-6'>
            <HeroPreview />

            <HeroSeoCard />
          </aside>
        </div>
      </div>
    </FormProvider>
  );
};

export default Hero;
