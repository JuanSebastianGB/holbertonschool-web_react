export const getFullYear = () => {
  const date = new Date();
  return date.getFullYear();
};

export const getFooterCopy = (isIndex = true) => {
  if (isIndex) return 'Holberton School';
  return 'Holberton School main dashboard';
};
