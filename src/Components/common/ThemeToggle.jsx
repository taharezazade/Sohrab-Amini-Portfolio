import { Moon, Sun1 } from "iconsax-reactjs";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light",
    );
  }, [dark]);

  return (
    <label className="p-2 swap swap-rotate">
      <input
        type="checkbox"
        checked={dark}
        onChange={(e) => setDark(e.target.checked)}
      />

      <Moon className="swap-on h-6 w-6 text-primary" size="32" />
      <Sun1 className="swap-off h-6 w-6 text-primary" size="32" />
    </label>
  );
}

export default ThemeToggle;
