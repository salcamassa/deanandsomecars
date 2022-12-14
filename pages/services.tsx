import Link from "next/link";
import { BsCircleFill } from "react-icons/bs";
import Footer from "../components/layout/Footer";
import HeroImage from "../components/layout/HeroImage";
import Navbar from "../components/layout/Navbar";
import heroImg from "../public/showroom_bg.png";
import styles from "../styles/Services.module.scss";

const servicesData = [
  "Vehicle Purchase Consulting",
  "Vehicle Lease Consulting",
  "Wealth Management",
  "Item/Building/Business Appraisal",
  "Landscaping and Tree Trimming",
  "Junk Removal",
  "Pond Installation & Maintenance",
  "Auto Collision Repair",
  "Pool Service and Maintenance",
  "Website Design & Development",
];

const Services = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroImage imageSrc={heroImg} heroText={"Services"} />
      <div className="container py-5">
        <div className={styles.sectionContainer}>
          <div className={`border-bottom text-center p-3`}>
            <div className={styles.infoText}>
              These are some of the services I'm happy to help my customers
              with. Reach out on the <Link href={"/contact"}>Contact</Link> page
              for more information.
            </div>
          </div>

          {servicesData.map((data) => (
            <div className="border-bottom p-2 py-3">
              <div className={`d-flex ${styles.titleSection}`}>
                <div className={styles.dotIcon}>
                  <BsCircleFill />
                </div>
                <div className={styles.title}>{data}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
