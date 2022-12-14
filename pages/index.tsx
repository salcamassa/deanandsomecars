import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/AboutSection";
import Hero from "../components/Hero";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Offerings from "../components/Offerings";
import VisitUs from "../components/VisitUs";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dean & Some Cars</title>
        <meta name="description" content="Dean & Some Cars" />
      </Head>
      <Hero />
      <Offerings />
      <AboutSection/>
      <VisitUs />
      <Footer />
    </div>
  );
};

export default Home;
