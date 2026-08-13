/** @format */

import { UserEdit, User, Location, Calendar, Briefcase } from "iconsax-reactjs";

import Input from "../ui/Input";

const AboutForm = ({ form, onChange, disabled = false }) => {
  const handleChange = (field, value) => {
    onChange?.(field, value);
  };

  return (
    <div className='card border border-base-300 bg-base-100 shadow-sm'>
      <div className='card-body'>
        {/* Header */}

        <div className='mb-5 flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary'>
            <UserEdit size={22} variant='Bulk' />
          </div>

          <div>
            <h2 className='text-lg font-bold'>اطلاعات درباره من</h2>

            <p className='text-sm text-base-content/60'>
              اطلاعات بخش About سایت را ویرایش کنید.
            </p>
          </div>
        </div>

        {/* Form */}

        <div className='space-y-5'>
          {/* Title */}

          <Input
            label='عنوان'
            placeholder='مثال: درباره من'
            required
            disabled={disabled}
            value={form?.title ?? ""}
            startIcon={<User size={20} variant='Bulk' />}
            helperText='عنوان اصلی بخش About'
            onChange={(event) => handleChange("title", event.target.value)}
          />

          {/* Description */}

          <div className='w-full'>
            <label className='mb-2 flex items-center gap-1 text-sm font-semibold'>
              توضیحات
              <span className='text-error'>*</span>
            </label>

            <textarea
              rows={7}
              disabled={disabled}
              value={form?.description ?? ""}
              onChange={(event) =>
                handleChange("description", event.target.value)
              }
              placeholder='توضیحات کامل درباره خودتان، تجربه، فعالیت‌ها و تخصص‌ها...'
              className='
                textarea
                textarea-bordered
                w-full
                resize-none
                rounded-2xl
                border-base-300
                bg-base-100/70
                text-sm
                outline-none
                transition-all
                duration-300
                placeholder:text-base-content/35
                hover:border-primary/40
                focus:border-primary
                focus:ring-4
                focus:ring-primary/15
                disabled:cursor-not-allowed
                disabled:opacity-60
              '
            />

            <p className='mt-2 text-xs text-base-content/50'>
              حداقل 20 و حداکثر 3000 کاراکتر
            </p>
          </div>

          {/* Personal Information */}

          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {/* Birth Year */}

            <Input
              label='سال تولد'
              type='number'
              placeholder='مثال: 1381'
              disabled={disabled}
              value={form?.birthYear ?? ""}
              startIcon={<Calendar size={20} variant='Bulk' />}
              helperText='سال تولد'
              onChange={(event) =>
                handleChange("birthYear", event.target.value)
              }
            />

            {/* Location */}

            <Input
              label='محل سکونت'
              placeholder='مثال: تهران'
              disabled={disabled}
              value={form?.location ?? ""}
              startIcon={<Location size={20} variant='Bulk' />}
              helperText='محل زندگی'
              onChange={(event) => handleChange("location", event.target.value)}
            />

            {/* Experience */}

            <Input
              label='سابقه کاری'
              type='number'
              min='0'
              max='60'
              placeholder='مثال: 5'
              disabled={disabled}
              value={form?.experience ?? ""}
              startIcon={<Briefcase size={20} variant='Bulk' />}
              helperText='تعداد سال سابقه'
              onChange={(event) =>
                handleChange("experience", event.target.value)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutForm;
