import { createNewPatient } from "@/lib/api";

export default async function handler(req, res) {
  // if method is POST, create new patient
  if (req.method === "POST") {
    const newPatient = createNewPatient(req.body);
    res.json(newPatient);
  }

  // if method is not allowed
  else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
