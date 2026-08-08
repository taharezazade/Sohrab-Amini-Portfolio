/** @format */

import { useState } from "react";

export function useModal(initial = false) {
  const [isOpen, setIsOpen] = useState(initial);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}
