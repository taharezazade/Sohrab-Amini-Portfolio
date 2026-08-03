/** @format */

import Input from "../ui/Input";
import Textarea from "../ui/Textarea";

const SettingsSEO = ({ values = {}, onChange }) => {
  return (
    <div
      className='
        grid
        gap-4
        md:grid-cols-2
      '>
      <Input
        label='عنوان متا'
        name='metaTitle'
        value={values.metaTitle || ""}
        onChange={onChange}
        placeholder='عنوانی که در گوگل نمایش داده می‌شود'
      />

      <Input
        label='آدرس Canonical'
        name='canonicalUrl'
        value={values.canonicalUrl || ""}
        onChange={onChange}
        placeholder='https://example.com'
      />

      <div
        className='
          md:col-span-2
        '>
        <Textarea
          label='توضیحات متا'
          name='metaDescription'
          value={values.metaDescription || ""}
          onChange={onChange}
          placeholder='توضیحات کوتاه برای موتورهای جستجو...'
          rows={3}
        />
      </div>

      <div
        className='
          md:col-span-2
        '>
        <Input
          label='کلمات کلیدی'
          name='keywords'
          value={values.keywords || ""}
          onChange={onChange}
          placeholder='React, Web Development, Portfolio'
        />
      </div>
    </div>
  );
};

export default SettingsSEO;
