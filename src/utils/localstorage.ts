/* eslint-disable  @typescript-eslint/no-explicit-any */

export const handleLocalStorage = (key: string, data: any) => {
  window.localStorage.removeItem(key);
  window.localStorage.setItem(key, data);
};
