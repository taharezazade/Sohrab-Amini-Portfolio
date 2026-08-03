/** @format */

import { Refresh2, Save2 } from "iconsax-reactjs";

import Button from "../ui/Button";

const ContactActions = ({ loading = false, onSave, onReset }) => {
  return (
    <div
      className='
        flex
        flex-col
        justify-end
        gap-3

        sm:flex-row
      '>
      {/* Reset */}

      <Button
        type='button'
        variant='ghost'
        onClick={onReset}
        disabled={loading}
        icon={<Refresh2 size={18} />}>
        بازنشانی
      </Button>

      {/* Save */}

      <Button
        type='button'
        variant='primary'
        loading={loading}
        onClick={onSave}
        icon={<Save2 size={18} />}>
        ذخیره تغییرات
      </Button>
    </div>
  );
};

export default ContactActions;
