export const removeUnderscoreStartCase = (str) => {
  return str
    .replace(/_/g, " ")
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};
