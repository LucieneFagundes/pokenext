import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: ReactNode
}

export default function Layout({children} : Props) {

  return (
    <>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <title>PokeNext</title>
    </Head>
    <Navbar />
    <main className="main-container">
      {children}
    </main>
    <Footer />
    </>
  );
}