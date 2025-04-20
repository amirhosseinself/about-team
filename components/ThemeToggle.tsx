"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // تعیین تم فعلی؛ در صورت "system" از resolvedTheme استفاده می‌شود
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const isDark = currentTheme === "dark";

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div
      className={clsx(
        "inline-block border rounded-full transition-colors duration-300 ease-in-out",
        isDark ? "bg-gray-800" : "bg-gray-300"
      )}
    >
      <input
        type="checkbox"
        id="theme-toggle"
        className="hidden"
        checked={isDark}
        onChange={handleToggle}
      />
      <label
        htmlFor="theme-toggle"
        className="cursor-pointer relative w-12 h-7 p-0.5 rounded-full flex items-center transition-transform"
      >
        <span
          data-state={isDark}
          className={clsx(
            "absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center",
            "transition-transform duration-300 ease-in-out",
            "data-[state=true]:translate-x-5 data-[state=false]:translate-x-0"
          )}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-gray-900" />
          ) : (
            <Sun className="h-4 w-4 text-yellow-500" />
          )}
        </span>
      </label>
    </div>
  );
};

export default ThemeToggle;
