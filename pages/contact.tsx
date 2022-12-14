import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import {
    FaCheck
} from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  const [state, handleSubmit] = useForm("FIXTHIS********************");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [county, setCounty] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container-fluid px-0">
        <div className={styles.sectionContainer}>
          <div id="contactForm" className="container my-5">
            <div className="row border rounded shadow-sm">
              <div className="col-lg-4 p-5 contact-info">
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
                <div className="py-3">
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

                {/* <div className={`${styles.socialIcons} py-3`}>
                  <div>
                    <FaFacebookSquare />
                  </div>
                  <div>
                    <FaLinkedin />
                  </div>
                  <div>
                    <FaInstagram />
                  </div>
                </div> */}
                <a
                  target="_blank"
                  href="https://calendly.com/deanandsomecars/used-vehicle-purchase"
                  rel="noreferrer"
                >
                  <button
                    className={`${styles.aptBtn} btn btn-outline-warning mt-4`}
                  >
                    Schedule an Appointment
                  </button>
                </a>
              </div>
              <div className="col-lg-8 p-5 bg-white">
                <div className="fs-3 fw-bold pb-3 color-dg">Send Me a Message</div>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="contactFirstName">First Name</label>
                      <input
                        id="contactFirstName"
                        type="text"
                        name="First Name"
                        className="form-control"
                        placeholder="First name"
                        required={true}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="contactLasttName">Last Name</label>
                      <input
                        id="contactLastName"
                        type="text"
                        name="Last Name"
                        className="form-control"
                        placeholder="Last name"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="contactPhone">Phone</label>
                      <input
                        id="contactPhone"
                        type="text"
                        name="Phone Number"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        name="Email"
                        className="form-control"
                        placeholder="Email"
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
                    <label htmlFor="contactMessage">Message</label>
                    <textarea
                      className="form-control"
                      id="contactMessage"
                      name="Message"
                      rows={7}
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

export default Contact;
