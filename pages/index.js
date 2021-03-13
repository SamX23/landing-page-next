import Head from "next/head";
import Header from "../component/Header";
import Main from "../component/Main";
import Footer from "../component/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header styles={styles} />
      <Main styles={styles} />
      <Footer styles={styles} />
    </>
  );
}
