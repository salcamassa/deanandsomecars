import { FiMail, FiPhone } from "react-icons/fi";
import styles from "./about-section.module.scss";
import Image from "next/image";
import deanBio from "../../public/deanBio.png";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const AboutSection = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.textContainer}>
          <div className="fs-3 fw-bold py-3">Hello!</div>
          <div>
            I'm Dean Routi of <i>Dean & Some Cars.</i>
          </div>
          <div className={`${styles.textWrapper} pt-3 pb-5`}>
            My goal is to offer the best possible service to my customers from
            the moment I meet them. This site allows me to be available to you
            24/7! If you have any ideas regarding how I can make your experience
            as a customer better I’m always looking for the next best thing - so
            send me a quick message on the Contact page and I’ll get back to you
            as quickly as I can.
          </div>
          <div className="d-flex align-items-center">
            <div className="fs-3 pe-2">
              <FiPhone />
            </div>
            <div className="fw-bold">(631) 379-5914</div>
          </div>
          <div className="d-flex align-items-center">
            <div className="fs-3 pe-2">
              <FiMail />
            </div>
            <div>deanandsomecars@gmail.com</div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={`${styles.imageWrapper}`}>
            <Image src={deanBio} alt="Dean & a Car" layout="responsive" />
            <div className={styles.socialIcons}>
              <div><FaFacebookSquare /></div>
              <div><FaLinkedin /></div>
              <div><FaInstagram /></div>
            </div>
          </div>
        </div>
        <div className={styles.grayBg}></div>
      </div>
    </>
  );
};
export default AboutSection;
