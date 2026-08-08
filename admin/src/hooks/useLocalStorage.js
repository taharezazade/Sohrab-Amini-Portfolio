/** @format */

import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  const updateValue = (newValue) => {
    setValue(newValue);

    localStorage.setItem(key, JSON.stringify(newValue));
  };

  const removeValue = () => {
    setValue(initialValue);

    localStorage.removeItem(key);
  };

  return [value, updateValue, removeValue];
}
