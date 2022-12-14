import Image from "next/image";
import { FiClock, FiMail, FiMap, FiPhone } from "react-icons/fi";
import dronePlaceholder from "../../public/drone_placeholder.png";

const VisitUs = () => {
  return (
    <>
      <div className="container-fluid bg-white h-100">
        <div className="container py-5 my-5">
          <div className="row text-center">
            <div className="col-lg-8">
              <Image
                src={dronePlaceholder}
                alt="Drone footage"
                layout="responsive"
              />
            </div>
            <div className="col-lg-4">
              <div className="p-3 h-100 text-center visit-us-box">
                <h1>Visit Us</h1>
                <div className="d-flex align-items-center mt-4 text-start">
                  <div className="fs-3 pe-3">
                    <FiMap />
                  </div>
                  <div>123 Toyota Street, Long Island, NY, 11725</div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="fs-3 pe-3">
                    <FiPhone />
                  </div>
                  <div>(123) 123-4567</div>
                </div>
                <div className="d-flex align-items-start mt-3">
                  <div className="fs-3 pe-3">
                    <FiClock />
                  </div>
                  <div style={{ width: "300px", fontSize: "16px" }}>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Monday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Tuesday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Wednesday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Thursday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Friday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Saturday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Sunday</div>
                      <div>8:00AM - 5:00PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VisitUs;
