import prisma from "@/lib/prisma";
import {
  updatePatientAllergy,
  updatePatientBP,
  updatePatientTemperature,
  updatePatientAntibody,
} from "@/lib/api";

// PUT /api/patients/update
export default async function handle(req, res) {
  const { id } = req.body;
  if (req.body.allergy) {
    const updateAllergy = updatePatientAllergy(id, req.body.allergy);

    if (!updateAllergy) {
      return res
        .status(404)
        .json({ message: `Patient with ID ${id} not found` });
    }
    res.json(updateAllergy);
    return;
  } else if (req.body.bloodPressure) {
    const updateBP = updatePatientBP(id, req.body.bloodPressure);

    if (!updateBP) {
      return res
        .status(404)
        .json({ message: `Patient with ID ${id} not found` });
    }
    res.json(updateBP);
    return;
  } else if (req.body.temperature) {
    const updateTemperature = updatePatientTemperature(
      id,
      req.body.temperature
    );

    if (!updateTemperature) {
      return res
        .status(404)
        .json({ message: `Patient with ID ${id} not found` });
    }
    res.json(updateTemperature);
    return;
  } else if (req.body.antibody) {
    const updateAntibody = updatePatientAntibody(id, req.body.antibody);

    if (!updateAntibody) {
      return res
        .status(404)
        .json({ message: `Patient with ID ${id} not found` });
    }
    res.json(updateAntibody);
    return;
  } else {
    const updatePatient = await prisma.patient.update({
      where: {
        uid: Number(id),
      },
      data: {
        ...Object.keys(req.body).reduce((acc, key) => {
          if (key === "id") return acc;
          acc[key] = {
            update: {
              ...req.body[key],
            },
          };
          return acc;
        }, {}),
      },
    });

    if (!updatePatient) {
      return res
        .status(404)
        .json({ message: `Patient with ID ${id} not found` });
    }
    res.json(updatePatient);
  }
}
