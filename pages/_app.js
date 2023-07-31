import "@/styles/globals.scss";
import Layout from "./components/Layout";
import Head from "next/head";
import { ApiDataProvider } from "./context/ApiData";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Store</title>
        <link rel="icon" href="/store-icon.ico" />
      </Head>
      <Layout>
        <ApiDataProvider>
        <Component {...pageProps} />
        </ApiDataProvider>
      </Layout>
    </>
  );
}
