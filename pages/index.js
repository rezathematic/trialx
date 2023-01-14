import Head from "next/head";

// View imports
import Overview from "@/views/overview/Overview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trial/X - Overview</title>
        <meta name="description" content="Trial/X, created by Reza Baharvand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full px-8">
        <Overview />
      </div>
    </>
  );
}
