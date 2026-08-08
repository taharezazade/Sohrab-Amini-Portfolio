/** @format */

import { useState } from "react";

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial);

  const toggle = () => setValue((prev) => !prev);

  const enable = () => setValue(true);

  const disable = () => setValue(false);

  return {
    value,
    toggle,
    enable,
    disable,
    setValue,
  };
}
