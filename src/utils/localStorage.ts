export const getItemLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : undefined;
};

export const setItemLocalStorage = (key: string, data: object | []) => {
  localStorage.setItem(key, JSON.stringify(data));
};
