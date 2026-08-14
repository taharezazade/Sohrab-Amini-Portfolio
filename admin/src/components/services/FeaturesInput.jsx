/** @format */

import { Add, CloseCircle, TickCircle } from "iconsax-reactjs";

const FeaturesInput = ({ value = [], onChange }) => {
  const addFeature = () => {
    onChange?.([...value, ""]);
  };

  const updateFeature = (index, text) => {
    const next = [...value];

    next[index] = text;

    onChange?.(next);
  };

  const removeFeature = (index) => {
    onChange?.(value.filter((_, itemIndex) => itemIndex !== index));
  };

  return (
    <div>
      <div className='mb-3 flex items-center justify-between'>
        <label className='text-sm font-bold'>امکانات این سرویس</label>

        <button
          type='button'
          onClick={addFeature}
          className='btn btn-sm btn-ghost gap-2'>
          <Add size={18} />
          افزودن امکان
        </button>
      </div>

      <div className='space-y-3'>
        {value.length === 0 && (
          <div
            className='
              rounded-2xl
              border
              border-dashed
              border-base-300
              p-5
              text-center
              text-sm
              text-base-content/50
            '>
            هنوز امکانی اضافه نشده است.
          </div>
        )}

        {value.map((feature, index) => (
          <div
            key={index}
            className='
                flex
                items-center
                gap-3
                rounded-2xl
                border
                border-base-300
                bg-base-100
                p-3
              '>
            <TickCircle
              size={22}
              variant='Bold'
              className='shrink-0 text-success'
            />

            <input
              type='text'
              value={feature}
              onChange={(event) => updateFeature(index, event.target.value)}
              placeholder='مثلاً طراحی کاملاً اختصاصی'
              className='
                  flex-1
                  bg-transparent
                  outline-none
                '
            />

            <button
              type='button'
              onClick={() => removeFeature(index)}
              className='text-base-content/40 transition hover:text-error'>
              <CloseCircle size={22} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesInput;
