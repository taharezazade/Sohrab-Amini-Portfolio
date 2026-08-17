/** @format */

import { Refresh2, Save2 } from "iconsax-reactjs";

import Button from "../ui/Button";

const ContactActions = ({ loading = false, onSave, onReset }) => {
  return (
    <div className='flex flex-col justify-end gap-3 sm:flex-row'>
      <Button
        type='button'
        variant='ghost'
        onClick={onReset}
        disabled={loading}
        startIcon={<Refresh2 size={18} />}>
        بازنشانی
      </Button>

      <Button
        type='button'
        variant='primary'
        loading={loading}
        onClick={onSave}
        startIcon={<Save2 size={18} />}>
        ذخیره تغییرات
      </Button>
    </div>
  );
};

export default ContactActions;
