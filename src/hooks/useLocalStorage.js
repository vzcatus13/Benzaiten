import { useState } from "react";

const useLocalStorage = (key, value) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : value;
    } catch (err) {
      console.error(err);
      return value;
    }
  });

  const setValue = (val) => {
    try {
      const valToStore = val instanceof Function ? val(storedValue) : val;
      setStoredValue(valToStore);
      window.localStorage.setItem(key, JSON.stringify(valToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;