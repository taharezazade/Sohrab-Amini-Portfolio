/** @format */

import { showToast } from "@/utils/toast";

export function useToast() {
  return {
    success: showToast.success,

    error: showToast.error,

    loading: showToast.loading,

    dismiss: showToast.dismiss,

    promise: showToast.promise,
  };
}
