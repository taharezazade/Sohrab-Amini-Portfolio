/** @format */

import Input from "../ui/Input";

const SettingsSocial = ({ values = {}, onChange }) => {
  return (
    <div
      className='
        grid
        gap-4
        md:grid-cols-2
      '>
      <Input
        label='اینستاگرام'
        name='instagram'
        value={values.instagram || ""}
        onChange={onChange}
        placeholder='https://instagram.com/username'
      />

      <Input
        label='لینکدین'
        name='linkedin'
        value={values.linkedin || ""}
        onChange={onChange}
        placeholder='https://linkedin.com/in/username'
      />

      <Input
        label='گیت‌هاب'
        name='github'
        value={values.github || ""}
        onChange={onChange}
        placeholder='https://github.com/username'
      />

      <Input
        label='تلگرام'
        name='telegram'
        value={values.telegram || ""}
        onChange={onChange}
        placeholder='https://t.me/username'
      />

      <Input
        label='توییتر / X'
        name='twitter'
        value={values.twitter || ""}
        onChange={onChange}
        placeholder='https://x.com/username'
      />

      <Input
        label='واتساپ'
        name='whatsapp'
        value={values.whatsapp || ""}
        onChange={onChange}
        placeholder='09120000000'
      />
    </div>
  );
};

export default SettingsSocial;
