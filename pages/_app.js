import Layout from "@/components/Layout";
import Head from "next/head";
import "@/app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SundaCode</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
