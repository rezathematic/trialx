import prisma from "@/lib/prisma";
// Lib imports
import { excludeKeys } from "@/lib/utils";

/**
 * Get patient details for dynamic route
 */

export const getPatientDetails = async (id) => {
  const getPatient = await prisma.patient.findUnique({
    where: {
      uid: Number(id),
    },
    include: {
      basicInfo: true,
      adr: true,
      bloodPressure: true,
      temperature: true,
      antibody: true,
      allergy: true,
    },
  });

  return excludeKeys(getPatient, ["patientId", "id"]);
};

/**
 * Get all patients for static route
 */

export const getAllPatientsPaths = async () => {
  const patients = await prisma.patient.findMany({});
  return patients;
};

/**
 * Get all patients basic info for /patients page
 */

export const getAllPatientsBasicInfo = async () => {
  const patients = await prisma.patient.findMany({
    include: {
      basicInfo: true,
    },
  });

  return patients;
};

// update patient adr
export const updatePatientAdr = async (id, adr) => {
  const updateAdr = await prisma.patient.update({
    where: {
      uid: Number(id),
    },
    data: {
      adr: adr,
    },
  });

  return updateAdr;
};

export const updatePatientAllergy = async (id, allergy) => {
  const updateAllergy = await prisma.patient.update({
    where: {
      uid: Number(id),
    },
    data: {
      allergy: {
        deleteMany: {},
        create: allergy,
      },
    },
  });

  return updateAllergy;
};

export const updatePatientBP = async (id, bp) => {
  const updateBP = await prisma.patient.update({
    where: {
      uid: Number(id),
    },
    data: {
      bloodPressure: {
        create: bp,
      },
    },
  });

  return updateBP;
};

export const updatePatientTemperature = async (id, temperature) => {
  const updateTemperature = await prisma.patient.update({
    where: {
      uid: Number(id),
    },
    data: {
      temperature: {
        create: temperature,
      },
    },
  });

  return updateTemperature;
};

export const updatePatientAntibody = async (id, antibody) => {
  const updateAntibody = await prisma.patient.update({
    where: {
      uid: Number(id),
    },
    data: {
      antibody: {
        create: antibody,
      },
    },
  });

  return updateAntibody;
};

/*
 * Create a new patient
 */

export const createNewPatient = async (patient) => {
  const newPatient = await prisma.patient.create({
    data: {
      basicInfo: {
        create: {
          ...patient,
        },
      },
      adr: {
        create: {
          bronchitis: false,
          diarrhea: false,
          pharyngitis: false,
          pruritus: false,
          rash: false,
          rhinitis: false,
          urticaria: false,
        },
      },
    },
  });

  return newPatient;
};
