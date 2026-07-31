/** @format */

import { motion } from "framer-motion";

import AboutHeader from "../../components/about/AboutHeader";
import AboutForm from "../../components/about/AboutForm";
import AboutImageUploader from "../../components/about/AboutImageUploader";
import AboutPreview from "../../components/about/AboutPreview";
import AboutStatusCard from "../../components/about/AboutStatusCard";
import AboutStats from "../../components/about/AboutStats";
import AboutActions from "../../components/about/AboutActions";
import AboutSkeleton from "../../components/about/AboutSkeleton";

const About = () => {
  const isLoading = false;

  if (isLoading) {
    return (
      <div className='container mx-auto px-4 py-8'>
        <AboutSkeleton />
      </div>
    );
  }

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

        {/* Main Grid */}
        <div
          className='
            grid
            grid-cols-1
            xl:grid-cols-3
            gap-6
          '>
          {/* Form Section */}
          <motion.div
            className='
              xl:col-span-2
              space-y-6
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
            <AboutForm />

            <AboutImageUploader />

            <AboutActions />
          </motion.div>

          {/* Preview Sidebar */}
          <motion.div
            className='
              space-y-6
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
              delay: 0.2,
            }}>
            <AboutPreview />

            <AboutStatusCard />
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
          <AboutStats />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
