/** @format */

import { motion } from "framer-motion";

import ContactForm from "./ContactForm";
import ContactPreview from "./ContactPreview";

const ContactSettings = ({
  values,
  loading = false,

  onChange,
  onImageChange,
  onSubmit,
}) => {
  return (
    <motion.section
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
        gap-6
        xl:grid-cols-5
      '>
      {/* Form */}

      <div className='xl:col-span-3'>
        <ContactForm
          values={values}
          loading={loading}
          onChange={onChange}
          onImageChange={onImageChange}
          onSubmit={onSubmit}
        />
      </div>

      {/* Preview */}

      <div className='xl:col-span-2'>
        <ContactPreview values={values} />
      </div>
    </motion.section>
  );
};

export default ContactSettings;
