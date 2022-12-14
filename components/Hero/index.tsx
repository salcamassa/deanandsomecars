// import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaCar, FaCheck, FaMedal, FaRegSmile } from "react-icons/fa";
import heroBg from "../../public/toyota-bg.jpeg";
import Navbar from "../layout/Navbar";
import styles from "./hero.module.scss";

const Hero = () => {

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    vehicleType: "",
  });

  const handleChange = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const sendToContactPage = (event: any) => {
    event.preventDefault();
    console.log("contactInfo", contactInfo);
    setContactInfo({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      vehicleType: "",
    });
  };

  const vehicleOptions = [
    "Any Vehicle Type",
    "Not Sure What Vehicle Type",
    "Electric",
    "Plug-in Hybrid ",
    "Sedan",
    "Small SUV",
    "Midsize SUV",
    "Large SUV",
    "4x4 Vehicle",
    "Truck",
    "Minivan",
    "Hatchback",
    "Coupe",
  ];

  return (
    <>
      <div className={`${styles.heroContainer} container-fluid px-0`}>
        <div className={styles.heroGradient}>
          <Navbar lightVersion={true} />
          <div
            className={`${styles.heroHeight} container d-flex flex-wrap justify-content-between align-items-center`}
          >
            <div
              className={`${styles.heroTextContainer} text-start text-white col-12 col-md-6 m-x-3`}
            >
              <h1>Find Your Dream Car</h1>
              <p className="py-2">
                I'd love to help you find your dream car today! Book an
                appointment with me to find out more.
              </p>
              <a
                target="_blank"
                href="https://calendly.com/deanandsomecars/vehicle-consultation"
                rel="noreferrer"
              >
                <button className={`${styles.aptBtn} btn btn-outline-warning`}>
                  Schedule an Appointment
                </button>
              </a>
            </div>
            <div
              className={`${styles.heroForm} col-12 col-md-6 text-start p-4`}
            >
              <h3 className="fw-bold mb-2">Get Started</h3>
              <form className="contact-form" onSubmit={sendToContactPage}>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="contactFirstName">First Name</label>
                    <input
                      id="contactFirstName"
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="First name"
                      required={true}
                      value={contactInfo.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="contactLasttName">Last Name</label>
                    <input
                      id="contactLastName"
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="Last name"
                      required={true}
                      value={contactInfo.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label htmlFor="contactPhone">Phone</label>
                    <input
                      id="contactPhone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={contactInfo.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="xip">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={contactInfo.email}
                      onChange={handleChange}
                    />
                    {/* <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    /> */}
                  </div>
                </div>
                <div className="form-group pt-3">
                  <label htmlFor="LookingFor">I'm looking for...</label>
                  <select
                    className="form-select"
                    id="lookingFor"
                    name="vehicleType"
                    value={contactInfo.vehicleType}
                    onChange={handleChange}
                  >
                    {vehicleOptions.map((o, i) => (
                      <option key={i}>{o}</option>
                    ))}
                  </select>
                </div>
                <div
                  className={`${"justify-content-end"} d-flex align-items-center pt-3`}
                >
                  {/* {state.succeeded && (
                    <div
                      className="alert alert-success d-flex align-items-center my-2 me-2"
                      role="alert"
                    >
                      <div className="d-flex align-items-center">
                        <FaCheck />
                      </div>
                      <div className="px-3">
                        Thank you for your message! We'll get back to you
                        shortly.
                      </div>
                    </div>
                  )} */}

                  <div>
                    <Link
                      href={{
                        pathname: "/contact",
                        query: contactInfo,
                      }}
                    >
                      <button
                        className={`${styles.submitBtn} btn btn-outline-success`}
                        type="submit"
                        // disabled={state.submitting}
                      >
                        Submit
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div>
          <Image
            className={"hero_image"}
            src={heroBg}
            alt="hero"
            layout="fill"
          />
        </div>
      </div>
      <div className={`${styles.heroStats} container-fluid`}>
        <div className="container d-flex flex-wrap justify-content-around py-3">
          <div className="fs-2">
            <FaMedal />
            <span className="ps-3 fs-5">
              <b>7+</b> years of service
            </span>
          </div>
          <div className="fs-2">
            <FaCar />
            <span className="ps-3 fs-5">
              <b>500+</b> cars sold
            </span>
          </div>
          <div className="fs-2">
            <FaRegSmile />
            <span className="ps-3 fs-5">
              <b>Countless</b> Happy Customers
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
