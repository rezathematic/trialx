import Head from "next/head";

// Lib imports
import { getPatientDetails } from "@/lib/api";
import { serializeJSON } from "@/lib/utils";

// View imports
import Details from "@/views/details/Details";

export default function PatientDetails({ patient }) {
  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Trial/X - Patient Details</title>
        <meta name="description" content="Trial/X, created by Reza Baharvand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full px-8">
        <Details patient={patient} />
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const patient = await getPatientDetails(params.id);

  return { props: { patient: serializeJSON(patient) } };
}
