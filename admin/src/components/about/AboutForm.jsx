/** @format */

import { UserEdit, User, Briefcase } from "iconsax-reactjs";

import Input from "../ui/Input";

const AboutForm = () => {
  return (
    <div
      className='
        card
        bg-base-100
        border
        border-base-300
        shadow-sm
      '>
      <div className='card-body'>
        {/* Header */}
        <div
          className='
            flex
            items-center
            gap-3
            mb-5
          '>
          <div
            className='
              flex
              items-center
              justify-center
              w-10
              h-10
              rounded-xl
              bg-primary/10
              text-primary
            '>
            <UserEdit size={22} variant='Bulk' />
          </div>

          <div>
            <h2
              className='
                font-bold
                text-lg
              '>
              اطلاعات درباره من
            </h2>

            <p
              className='
                text-sm
                text-base-content/60
              '>
              اطلاعات اصلی بخش About را مدیریت کنید
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className='
            space-y-5
          '>
          {/* Name */}
          <Input
            label='نام و نام خانوادگی'
            placeholder='مثال: سهراب امینی'
            required
            startIcon={<User size={20} variant='Bulk' />}
            helperText='نامی که در بخش About نمایش داده می‌شود'
          />

          {/* Job Title */}
          <Input
            label='عنوان شغلی'
            placeholder='مثال: توسعه‌دهنده وردپرس'
            required
            startIcon={<Briefcase size={20} variant='Bulk' />}
            helperText='عنوان حرفه‌ای شما'
          />

          {/* Short Description */}
          <div
            className='
              w-full
            '>
            <label
              className='
                mb-2
                flex
                items-center
                gap-1
                text-sm
                font-semibold
                text-base-content
              '>
              توضیح کوتاه
              <span className='text-error'>*</span>
            </label>

            <textarea
              rows='3'
              placeholder='یک معرفی کوتاه درباره خودتان...'
              className='
                textarea
                textarea-bordered
                w-full
                rounded-2xl
                bg-base-100/70
                border-base-300
                text-sm
                transition-all
                duration-300
                placeholder:text-base-content/35
                hover:border-primary/40
                focus:border-primary
                focus:ring-4
                focus:ring-primary/15
                outline-none
                resize-none
              '
            />
          </div>

          {/* Full Description */}
          <div
            className='
              w-full
            '>
            <label
              className='
                mb-2
                flex
                items-center
                gap-1
                text-sm
                font-semibold
                text-base-content
              '>
              توضیحات کامل
            </label>

            <textarea
              rows='6'
              placeholder='توضیحات کامل درباره تجربه، مهارت‌ها و فعالیت‌ها...'
              className='
                textarea
                textarea-bordered
                w-full
                rounded-2xl
                bg-base-100/70
                border-base-300
                text-sm
                transition-all
                duration-300
                placeholder:text-base-content/35
                hover:border-primary/40
                focus:border-primary
                focus:ring-4
                focus:ring-primary/15
                outline-none
                resize-none
              '
            />
          </div>

          {/* Status */}
          <div className='w-full'>
            <label
              className='
                mb-2
                block
                text-sm
                font-semibold
                text-base-content
              '>
              وضعیت نمایش
            </label>

            <select
              className='
                select
                select-bordered
                w-full
                rounded-2xl
                bg-base-100
                border-base-300
                transition-all
                duration-300
                hover:border-primary/40
                focus:border-primary
                focus:ring-4
                focus:ring-primary/15
                outline-none
              '
              defaultValue='وضعیت را انتخاب کنید.'>
              <option disabled={true}>وضعیت را انتخاب کنید.</option>
              <option value='true' className="text-success">فعال</option>
              <option value='false' className="text-error">غیرفعال</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AboutForm;
