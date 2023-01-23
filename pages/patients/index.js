import Head from "next/head";

// Lib Imports
import { getAllPatientsBasicInfo } from "@/lib/api";
import { serializeJSON } from "@/lib/utils";

// View imports
import Patients from "@/views/patients/Patients";

export default function PatientsPage({ patients }) {
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

export async function getStaticProps() {
  const patients = await getAllPatientsBasicInfo();

  return { props: { patients: serializeJSON(patients) }, revalidate: 1 };
}
