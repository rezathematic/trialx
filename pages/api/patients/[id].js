import { getPatientDetails } from "@/lib/api";

export default async function handler(req, res) {
  const { id } = req.query;
  const patient = await getPatientDetails(id);

  if (!patient) {
    return res.status(404).json({ message: `Patient with ID ${id} not found` });
  }

  res.status(200).json(patient);
}
