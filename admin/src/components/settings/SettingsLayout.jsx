/** @format */
import { motion } from "framer-motion";

const SettingsLayout = ({ children, preview }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.3,
      }}

      className='
        grid

        gap-4

        xl:grid-cols-5
      '>
      {/* Main Settings */}

      <div
        className='
          rounded-3xl

          border
          border-base-300

          p-5

          xl:col-span-3
        '>
        {children}
      </div>

      {/* Preview */}

      <div
        className='
          rounded-3xl

          border
          border-base-300

          p-5

          xl:col-span-2
        '>
        {preview}
      </div>
    </motion.div>
  );
};

export default SettingsLayout;
