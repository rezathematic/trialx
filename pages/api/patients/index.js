import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  // if method is POST, create new patient
  if (req.method === "POST") {
    const newPatient = await prisma.patient.create({
      data: {
        basicInfo: {
          create: {
            ...req.body,
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
    res.json(newPatient);
  }
  // if method is not allowed
  else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
