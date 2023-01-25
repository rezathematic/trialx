import dayjs from "dayjs";

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

/**
 * Gender Date Count Functions
 */

// Gender count based on added date function
export const genderDateCount = (obj) => {
  // filter data
  const filteredData = obj.map((patient) => {
    const { sex, createdAt } = patient.basicInfo;
    const formattedCreatedAt = dayjs(createdAt).format("MMM, DD YYYY");
    return {
      createdAt: formattedCreatedAt,
      sex: sex,
    };
  });

  // reduce data object to count
  const reduceGenderDateData = filteredData.reduce((acc, patient) => {
    const createdAt = patient.createdAt;
    if (!acc[createdAt]) {
      acc[createdAt] = {};
    }
    const sex = patient.sex;
    if (!acc[createdAt][sex]) {
      acc[createdAt][sex] = 0;
    }
    acc[createdAt][sex]++;
    return acc;
  }, {});

  // return data array
  return Object.keys(reduceGenderDateData).map((key) => {
    return {
      date: key,
      ...reduceGenderDateData[key],
    };
  });
};

/**
 * Sample's Gender Count Functions
 */

export const genderCount = (obj) => {
  // filter data
  const filteredGender = obj.map((patient) => {
    return {
      sex: patient.basicInfo.sex,
    };
  });

  // reduce data object to count
  return filteredGender.reduce((acc, patient) => {
    const key = patient.sex;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key]++;
    return acc;
  }, {});
};
