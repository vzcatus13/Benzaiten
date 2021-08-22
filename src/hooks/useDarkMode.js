import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (defaultValue) => {
  const getAutoValue = () => {
    if (typeof window === undefined) {
      return !!defaultValue;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setDarkMode] = useLocalStorage(
    "pref-dark-mode",
    getAutoValue()
  );

  useEffect(() => {
    const handler = () => setDarkMode(getAutoValue);

    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", handler);

    return () => matchMedia.removeEventListener("change", handler);
    // eslint-disable-next-line
  }, []);

  return {
    isDarkMode,
    setDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
  };
};

export default useDarkMode;
