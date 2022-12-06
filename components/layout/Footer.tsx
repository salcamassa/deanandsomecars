import Link from "next/link";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <nav className="navbar dsc-footer">
      <div className="container-fluid flex align-items-center justify-content-between">
        <div>
          <Link className="" href="/">
            © 2022 Dean and Some Cars. All rights reserved.
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="fs-3 pe-2">
              <FiMail />
            </div>
            <div>deanandsomecars@gmail.com</div>
          </div>
          <div>
            <div className='footer-social-icons'>
              <div>
                <FaFacebookSquare />
              </div>
              <div>
                <FaLinkedin />
              </div>
              <div>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Footer;
