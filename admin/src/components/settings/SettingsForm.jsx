/** @format */

import { motion } from "framer-motion";
import Button from "../ui/Button";

import SettingsGeneral from "./SettingsGeneral";
import SettingsSEO from "./SettingsSEO";
import SettingsSocial from "./SettingsSocial";
import SettingsSecurity from "./SettingsSecurity";

import { Save2, Refresh2 } from "iconsax-reactjs";

const SettingsForm = ({
  values,
  loading = false,
  onChange,
  onSubmit,
  onReset,
}) => {
  return (
    <motion.form
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

      onSubmit={(e) => {
        e.preventDefault();

        onSubmit?.();
      }}

      className='
        space-y-4
      '>
      {/* General */}

      <section
        className='
          rounded-2xl

          border
          border-base-300

          bg-base-100/40

          backdrop-blur-xl

          p-4
        '>
        <h2
          className='
            mb-3

            text-sm
            font-black
          '>
          اطلاعات عمومی
        </h2>

        <SettingsGeneral
          values={values}

          onChange={onChange}
        />
      </section>

      {/* SEO */}

      <section
        className='
          rounded-2xl

          border
          border-base-300

          bg-base-100/40

          backdrop-blur-xl

          p-4
        '>
        <h2
          className='
            mb-3

            text-sm
            font-black
          '>
          تنظیمات SEO
        </h2>

        <SettingsSEO
          values={values}

          onChange={onChange}
        />
      </section>

      {/* Social */}

      <section
        className='
          rounded-2xl

          border
          border-base-300

          bg-base-100/40

          backdrop-blur-xl

          p-4
        '>
        <h2
          className='
            mb-3

            text-sm
            font-black
          '>
          شبکه‌های اجتماعی
        </h2>

        <SettingsSocial
          values={values}

          onChange={onChange}
        />
      </section>

      {/* Security */}

      <section
        className='
          rounded-2xl

          border
          border-base-300

          bg-base-100/40

          backdrop-blur-xl

          p-4
        '>
        <h2
          className='
            mb-3

            text-sm
            font-black
          '>
          امنیت
        </h2>

        <SettingsSecurity
          values={values}

          onChange={onChange}
        />
      </section>

      {/* Actions */}

      <div
        className='
          flex

          justify-end

          gap-3

          border-t
          border-base-300

          pt-4

        '>
        <Button
          type='button'

          variant='ghost'

          disabled={loading}

          onClick={onReset}

          icon={<Refresh2 size={17} />}>
          بازنشانی
        </Button>

        <Button
          type='submit'

          variant='primary'

          loading={loading}

          icon={<Save2 size={17} />}>
          ذخیره تغییرات
        </Button>
      </div>
    </motion.form>
  );
};

export default SettingsForm;
