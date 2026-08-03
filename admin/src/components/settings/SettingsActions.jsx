/** @format */

import { Refresh2, Save2 } from "iconsax-reactjs";
import Button from "../ui/Button";

const SettingsActions = ({ loading = false, onSave, onReset }) => {
  return (
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
        onClick={onSave}
        icon={<Save2 size={17} />}>
        ذخیره تغییرات
      </Button>
    </div>
  );
};

export default SettingsActions;
