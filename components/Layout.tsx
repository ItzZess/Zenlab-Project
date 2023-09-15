import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + " | ZenLab" : "ZenLab"}</title>
        <meta
          name="description"
          content="Technology solution for your business & community"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
