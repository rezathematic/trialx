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

/**
 * Patient's Antibody Average Functions
 */

export const antibodyAverage = (obj) => {
  // filter the data and get the antibody value, skip the empty array
  const filteredAntibody = obj
    .map((patient) => {
      return patient.antibody.map((antibody) => {
        return {
          igg: antibody.igg,
          igm: antibody.igm,
          date: dayjs(antibody.date).format("MMM, DD YYYY"),
        };
      });
    })
    .filter((antibody) => antibody.length > 0);

  // flatten the array
  const flattenAntibody = filteredAntibody.flat();

  // find the average igg and igm values with the same date
  const averageAntibody = flattenAntibody.reduce((acc, antibody) => {
    const key = antibody.date;
    if (!acc[key]) {
      acc[key] = {
        igg: 0,
        igm: 0,
        count: 0,
      };
    }
    acc[key].igg += antibody.igg;
    acc[key].igm += antibody.igm;
    acc[key].count++;
    return acc;
  }, {});

  // return the average igg and igm values for each day
  return Object.keys(averageAntibody).map((key) => {
    return {
      date: key,
      IgG: averageAntibody[key].igg / averageAntibody[key].count,
      IgM: averageAntibody[key].igm / averageAntibody[key].count,
    };
  });
};

/**
 * Patient's Adr Count Functions
 */

export const adrCount = (obj) => {
  // filter the adr object in every array item
  const filteredAdr = obj.map((patient) => {
    return patient.adr;
  });

  // reduce the adr object to count
  return filteredAdr.reduce((acc, patient) => {
    for (let key in patient) {
      if (acc[key]) {
        if (patient[key]) acc[key]++;
      } else {
        if (patient[key]) {
          acc[key] = 1;
        } else {
          acc[key] = 0;
        }
      }
    }
    return acc;
  }, {});
};
