import Router from "next/router";
import NProgress from "nprogress";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

// Style imports
import "@/styles/globals.css";
import "nprogress/nprogress.css";

// Component imports
import Layout from "@/components/layout/Layout";
import Spinner from "@/components/utils/Spinner";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false);

  NProgress.configure({ showSpinner: false });
  //Binding events.
  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    setLoading(false);
    NProgress.done();
  });
  Router.events.on("routeChangeError", () => {
    setLoading(false);
    NProgress.done();
  });
  return (
    <SessionProvider session={session}>
      <Layout>
        {loading && (
          <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-80">
            <Spinner />
          </div>
        )}
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
