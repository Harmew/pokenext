import Navbar from "./Navbar";
import Footer from "./Footer";

import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>PokeNext</title>
      </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
