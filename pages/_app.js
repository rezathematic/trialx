// Style imports
import "@/styles/globals.css";

// Component imports
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
