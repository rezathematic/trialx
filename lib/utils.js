export const removeUnderscoreStartCase = (str) => {
  return str
    .replace(/_/g, " ")
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
};

// Exclude keys (e.g. id, patientId) from an object
export const excludeKeys = (obj, arr) => {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      excludeKeys(obj[key], arr);
    }
    if (arr.indexOf(key) !== -1) {
      delete obj[key];
    }
  }
  return obj;
};

export const serializeJSON = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};
