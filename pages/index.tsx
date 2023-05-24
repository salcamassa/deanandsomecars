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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-H74Q2EK4N4`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H74Q2EK4N4', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
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
