/** @format */
import { useForm, FormProvider } from "react-hook-form";

import HeroHeader from "../../components/hero/HeroHeader";
import HeroStats from "../../components/hero/HeroStats";
import HeroForm from "../../components/hero/HeroForm";
import HeroPreview from "../../components/hero/HeroPreview";
import HeroImageUploader from "../../components/hero/HeroImageUploader";
import HeroResumeUploader from "../../components/hero/HeroResumeUploader";
import HeroSeoCard from "../../components/hero/HeroSeoCard";
import HeroSettings from "../../components/hero/HeroSettings";
import HeroActions from "../../components/hero/HeroActions";

const Hero = () => {
  const methods = useForm({
    defaultValues: {
      title: "",
      subtitle: "",
      description: "",
      primaryButtonText: "",
      primaryButtonLink: "",
      secondaryButtonText: "",
      secondaryButtonLink: "",
    },
  });
  return (
    <FormProvider {...methods}>
      <div className='space-y-6'>
        {/* =======================================================
          Header
      ======================================================= */}

        <HeroHeader />

        {/* =======================================================
          Stats
      ======================================================= */}

        <HeroStats />

        {/* =======================================================
          Main Content
      ======================================================= */}

        <div className='grid gap-6 2xl:grid-cols-[minmax(0,1fr)_380px]'>
          {/* =======================================================
            Left
        ======================================================= */}

          <div className='space-y-6'>
            <HeroForm />

            <div className='grid gap-6 xl:grid-cols-2'>
              <HeroImageUploader />

              <HeroResumeUploader />
            </div>

            <HeroSettings />

            <HeroActions />
          </div>

          {/* =======================================================
            Right
        ======================================================= */}

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
