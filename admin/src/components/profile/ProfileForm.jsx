/** @format */

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import ProfileImageUploader from "./ProfileImageUploader";

const ProfileForm = ({
  values,
  loading = false,
  onChange,
  onImageChange,
  onRemoveImage,
}) => {
  return (
    <div className='space-y-5'>
      <div className='grid gap-5 xl:grid-cols-3'>
        <div className='xl:col-span-1'>
          <ProfileImageUploader
            value={values.image}
            preview={values.preview}
            onChange={onImageChange}
            onRemove={onRemoveImage}
          />
        </div>

        <div className='space-y-4 xl:col-span-2'>
          <div className='grid gap-4 md:grid-cols-2'>
            <Input
              label='نام'
              name='firstName'
              placeholder='نام'
              value={values.firstName}
              onChange={onChange}
              disabled={loading}
              required
            />

            <Input
              label='نام خانوادگی'
              name='lastName'
              placeholder='نام خانوادگی'
              value={values.lastName}
              onChange={onChange}
              disabled={loading}
              required
            />
          </div>

          <Input
            label='نام نمایشی'
            name='displayName'
            placeholder='مثلاً سهراب امینی'
            value={values.displayName}
            onChange={onChange}
            disabled={loading}
            required
          />

          <div className='grid gap-4 md:grid-cols-2'>
            <Input
              label='ایمیل'
              name='email'
              type='email'
              placeholder='example@email.com'
              value={values.email}
              onChange={onChange}
              disabled={loading}
              required
            />

            <Input
              label='شماره موبایل'
              name='phone'
              type='tel'
              placeholder='0912xxxxxxx'
              value={values.phone}
              onChange={onChange}
              disabled={loading}
            />
          </div>

          <Input
            label='نام کاربری'
            name='username'
            placeholder='username'
            value={values.username}
            onChange={onChange}
            disabled={loading}
            required
          />

          <Textarea
            label='درباره مدیر'
            name='bio'
            placeholder='توضیح کوتاهی درباره خودتان...'
            rows={5}
            value={values.bio}
            onChange={onChange}
            disabled={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
