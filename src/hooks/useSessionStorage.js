import { useEffect, useState } from "react";

export const useSessionStorage = (key, defaultData) => {
  const [state, setState] = useState(() => {
    const localData = sessionStorage.getItem(key);
    return localData || defaultData;
  });
  useEffect(() => {
    sessionStorage.setItem(key, state);
  }, [key, state]);
  return [state, setState];
};