import Head from "next/head";

// View imports
import Patients from "@/views/patients/Patients";

// dummy data
const patients = [
  {
    id: 1,
    name: "Sara Smith",
    image: "/assets/images/patient-1.jpg",
    status: "Healthy",
    sex: "Female",
    age: 25,
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "John Smith",
    image: "/assets/images/patient-2.jpg",
    status: "Healthy",
    sex: "Male",
    age: 27,
    phone: "123-456-7890",
  },
  {
    id: 3,
    name: "John Doe",
    image: null,
    status: "Healthy",
    sex: "Male",
    age: 24,
    phone: "123-456-7890",
  },
];

export default function PatientsPage() {
  return (
    <>
      <Head>
        <title>Trial/X - Patients List</title>
        <meta name="description" content="Trial/X, created by Reza Baharvand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full px-8">
        <Patients patients={patients} />
      </div>
    </>
  );
}
