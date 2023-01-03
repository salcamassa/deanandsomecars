import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import {
  FaCheck,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaSnapchatSquare
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/Contact.module.scss";

const Contact = (query: any) => {

  const [contactInfo, setContactInfo] = useState({
    firstName: query.query.firstName || "",
    lastName: query.query.lastName || "",
    phone: query.query.phone || "",
    email: query.query.email || "",
    vehicleType: query.query.vehicleType || "",
  });=

  const handleChange = (event: any) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };
  const [state, handleSubmit] = useForm("mlekrkao");

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
    <div className="bg-white">
      <Navbar />
      <div className="container-fluid px-0">
        <div className={styles.sectionContainer}>
          <div id="contactForm" className="container my-5">
            <div className="row  gy-5">
              <div className="col-lg-4 p-5 contact-info border rounded shadow-sm">
                <div className="fs-3 fw-bold pb-3">Hello!</div>
                <div>
                  I'm Dean Routi of <i>Dean & Some Cars.</i>
                </div>
                <div className={`fs-6 py-4`}>
                  My goal is to offer the best possible service to my customers
                  from the moment I meet them. This site allows me to be
                  available to you 24/7! If you have any ideas regarding how I
                  can make your experience as a customer better I’m always
                  looking for the next best thing - so send me a quick message
                  and I’ll get back to you as quickly as I can.
                </div>
                <div className="py-2">
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
                  {/* <div className="d-flex justify-content-between flex-wrap">
                    <div className="d-flex align-items-baseline pe-2">
                      <div className="fs-3 pe-2">
                        <FaSnapchatSquare />
                      </div>
                      <div>Snapchat</div>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/deanandsomecars/?hl=en"
                        rel="noreferrer"
                      >
                        <div className="d-flex align-items-baseline pe-2">
                          <div className="fs-3 pe-2">
                            <FaInstagram />
                          </div>
                          <div>Instagram</div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/dean-and-some-cars/"
                        rel="noreferrer"
                      >
                        <div className="d-flex align-items-baseline">
                          <div className="fs-3 pe-2">
                            <FaLinkedin />
                          </div>
                          <div>LinkedIn</div>
                        </div>
                      </a>
                    </div>
                  </div> 
                  
                  
                  */}

                  <div className={styles.socialIcons}>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/deanandsomecars?mibextid=LQQJ4d"
                        rel="noreferrer"
                      >
                        <FaFacebookSquare />
                      </a>
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
                    <div>
                      <a
                        target="_blank"
                        href="https://t.snapchat.com/W76X7U6u"
                        rel="noreferrer"
                      >
                        <FaSnapchatSquare />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 p-5 bg-white border rounded shadow-sm">
                <div className="d-flex justify-content-between align-items-center pb-3">
                  <div className="fs-3 fw-bold color-dg">Send Me a Message</div>
                  <a
                    target="_blank"
                    href="https://calendly.com/deanandsomecars/vehicle-consultation"
                    rel="noreferrer"
                  >
                    <button
                      className={`${styles.aptBtn} btn btn-outline-primary`}
                    >
                      Schedule an Appointment
                    </button>
                  </a>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
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
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={contactInfo.email}
                        onChange={handleChange}
                        required={true}
                      />
                      <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="form-group pt-3">
                    <label htmlFor="vehicleType">I'm looking for...</label>
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
                  <div className="form-group pt-3">
                    <label htmlFor="subject">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="Subject"
                      className="form-control"
                      placeholder="Auto Loan, Services Offered, etc."
                    />
                  </div>
                  <div className="form-group pt-3">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                      className="form-control"
                      id="contactMessage"
                      name="Message"
                      rows={5}
                    ></textarea>
                  </div>
                  <div
                    className={`${
                      state.succeeded
                        ? "justify-content-between"
                        : "justify-content-end"
                    } d-flex  align-items-center pt-3`}
                  >
                    {state.succeeded && (
                      <div
                        className="alert alert-success d-flex align-items-center my-2 me-2"
                        role="alert"
                      >
                        <div className="d-flex align-items-center">
                          <FaCheck />
                        </div>
                        <div className="px-3">
                          Thank you for your message! I'll get back to you
                          shortly.
                        </div>
                      </div>
                    )}

                    <div>
                      <button
                        className={`${styles.submitBtn} btn btn-outline-success px-4 py-2 m-1"`}
                        type="submit"
                        disabled={state.submitting}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Contact.getInitialProps = ({ query }: { query: any }) => {
  return { query };
};

export default Contact;
