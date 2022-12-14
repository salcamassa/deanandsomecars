import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "/public/logo.svg";
import logoLight from "/public/logo-light.svg";
import styles from "./navbar.module.scss";

const navData = [
  { linkText: "Services", href: "/services" },
  { linkText: "FAQ", href: "/faq" },
];

const Navbar = ({ lightVersion }: { lightVersion?: boolean }) => {
  const router = useRouter();
  return (
    <nav
      className={`navbar navbar-expand-lg ${
        lightVersion ? "light-version" : ""
      }`}
    >
      <div className="container">
        <Link href="/">
          <a className={`navbar-brand ${styles.logoLink}`} href="/">
            <Image
              src={lightVersion ? logoLight : logo}
              alt="dsc Logo"
              height={100}
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscNavbar"
          aria-controls="dscNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="dscNavbar"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navData.map((data, index) => (
              <li
                className={`nav-item ${index == 3 ? "pe-2" : ""}`}
                key={index}
              >
                <Link href={data.href}>
                  <a
                    className={`${
                      router.pathname === data.href ? "active" : ""
                    } nav-link ${lightVersion ? "text-white" : "color-b1"}`}
                  >
                    {data.linkText}
                  </a>
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a href="/contact" rel="noreferrer">
                <button
                  className="btn btn-outline-warning btn-hover-white"
                  type="submit"
                >
                  Contact
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
