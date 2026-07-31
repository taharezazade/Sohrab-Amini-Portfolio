/** @format */

import { Save2, Refresh2, Trash } from "iconsax-reactjs";

const AboutActions = () => {
  const isSubmitting = false;

  const handleSubmit = () => {
    // TODO: connect API
  };

  const handleReset = () => {
    // TODO: reset form
  };

  const handleDelete = () => {
    // TODO: delete about data
  };

  return (
    <div
      className='
        card
        bg-base-100
        border
        border-base-300
        shadow-sm
      '>
      <div
        className='
          card-body
        '>
        <div
          className='
            flex
            flex-col
            sm:flex-row
            justify-between
            gap-3
          '>
          {/* Left Actions */}
          <div
            className='
              flex
              flex-col
              sm:flex-row
              gap-3
            '>
            {/* Save */}
            <button
              type='button'
              onClick={handleSubmit}
              disabled={isSubmitting}
              className='
                btn
                btn-primary
                gap-2
              '>
              {isSubmitting ?
                <span
                  className='
                      loading
                      loading-spinner
                    '
                />
              : <Save2 size={18} variant='Bulk' />}

              {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
            </button>

            {/* Reset */}
            <button
              type='button'
              onClick={handleReset}
              className='
                btn
                btn-outline
                gap-2
              '>
              <Refresh2 size={18} />
              بازنشانی
            </button>
          </div>

          {/* Delete */}
          <button
            type='button'
            onClick={handleDelete}
            className='
              btn
              btn-error
              btn-outline
              gap-2
            '>
            <Trash size={18} />
            حذف اطلاعات
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutActions;
