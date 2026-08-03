/** @format */

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const SettingsGeneral = ({ values = {}, onChange }) => {
  return (
    <div
      className='
        grid
        gap-4
        md:grid-cols-2
      '>
      <Input
        label='نام سایت'
        name='siteName'
        value={values.siteName || ""}
        onChange={onChange}
        placeholder='مثلاً سهراب امینی'
      />

      <Input
        label='عنوان سایت'
        name='siteTitle'
        value={values.siteTitle || ""}
        onChange={onChange}
        placeholder='عنوان اصلی سایت'
      />

      <div
        className='
          md:col-span-2
        '>
        <Textarea
          label='توضیحات سایت'
          name='description'
          value={values.description || ""}
          onChange={onChange}
          placeholder='توضیحات کوتاه درباره سایت...'
          rows={4}
        />
      </div>

      <Input
        label='شماره تماس'
        name='phone'
        value={values.phone || ""}
        onChange={onChange}
        placeholder='09120000000'
      />

      <Input
        label='ایمیل'
        name='email'
        type='email'
        value={values.email || ""}
        onChange={onChange}
        placeholder='example@email.com'
      />
    </div>
  );
};

export default SettingsGeneral;
