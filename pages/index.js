import Head from "next/head";

// Lib imports
import prisma from "@/lib/prisma";
import { serializeJSON } from "@/lib/utils";

// View imports
import Overview from "@/views/overview/Overview";

export default function Home({ trial }) {
  return (
    <>
      <Head>
        <title>Trial/X - Overview</title>
        <meta name="description" content="Trial/X, created by Reza Baharvand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full px-8">
        <Overview trial={trial} />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const patients = await prisma.patient.findMany({
    include: {
      basicInfo: true,
    },
  });

  return {
    props: {
      trial: serializeJSON(patients),
    },
  };
}
