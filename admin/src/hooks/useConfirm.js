/** @format */

import { useCallback } from "react";

export function useConfirm() {
  const confirm = useCallback((message = "آیا مطمئن هستید؟") => {
    return window.confirm(message);
  }, []);

  return confirm;
}
