import Link from "next/link";
import { FaInstagram, FaLinkedin, FaSnapchatSquare } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <nav className="navbar dsc-footer">
      <div className="container-fluid flex align-items-center justify-content-between">
        <div>
          <Link className="" href="/">
            © 2022 Dean and Some Cars. All rights reserved.
          </Link>
          <span className="ps-4">
            <Link className="" href="/privacy-policy">
              Privacy Policy
            </Link>
          </span>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="fs-3 pe-2">
              <FiMail />
            </div>
            <div>deanandsomecars@gmail.com</div>
          </div>
          <div>
            <div className="footer-social-icons">
              <div>
                <FaSnapchatSquare />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.instagram.com/deanandsomecars/?hl=en"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dean-and-some-cars/"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
