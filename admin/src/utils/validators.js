/** @format */

export const validators = {
  required(value) {
    return value?.trim() ? true : "این فیلد الزامی است.";
  },

  email(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(value) ? true : "ایمیل معتبر نیست.";
  },

  phone(value) {
    const regex = /^09\d{9}$/;

    return regex.test(value) ? true : "شماره موبایل معتبر نیست.";
  },

  minLength(value, length) {
    return value.length >= length ? true : `حداقل ${length} کاراکتر وارد کنید.`;
  },
};
