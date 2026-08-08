/** @format */

import toast from "react-hot-toast";

export const showToast = {
  success(message) {
    toast.success(message);
  },

  error(message) {
    toast.error(message);
  },

  loading(message) {
    return toast.loading(message);
  },

  dismiss(id) {
    toast.dismiss(id);
  },

  promise(promise, messages) {
    return toast.promise(promise, messages);
  },
};
