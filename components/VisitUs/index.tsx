import { FiClock, FiMap, FiPhone } from "react-icons/fi";

const VisitUs = () => {
  return (
    <>
      <div className="container-fluid bg-white h-100">
        <div className="container py-5 my-5">
          <div className="row text-center">
            <div className="col-lg-8">
              <video autoPlay muted loop className="dsc-video">
                <source src="/srt_drone.mov" type="video/mp4" />
              </video>
            </div>
            <div className="col-lg-4">
              <div className="p-3 h-100 text-center visit-us-box">
                <h1>Visit Us</h1>
                <div className="d-flex align-items-center mt-4 text-start">
                  <div className="fs-3 pe-3">
                    <FiMap />
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Sunrise+Toyota+North/@40.8836604,-72.9381865,15z/data=!4m5!3m4!1s0x0:0x6471ea115f7a6ea3!8m2!3d40.8836604!4d-72.9381865"
                      rel="noreferrer"
                    >
                      910 Middle Country Road,
                      <br /> Middle Island, NY 11953
                    </a>
                  </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                  <div className="fs-3 pe-3">
                    <FiPhone />
                  </div>
                  <div>(631) 924-8100</div>
                </div>
                <div className="d-flex align-items-start mt-3">
                  <div className="fs-3 pe-3">
                    <FiClock />
                  </div>
                  <div style={{ width: "300px", fontSize: "16px" }}>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Monday</div>
                      <div>9:00AM - 7:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Tuesday</div>
                      <div>9:00AM - 9:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Wednesday</div>
                      <div>9:00AM - 7:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Thursday</div>
                      <div>9:00AM - 7:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Friday</div>
                      <div>9:00AM - 7:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Saturday</div>
                      <div>9:00AM - 6:00PM</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="pe-3">Sunday</div>
                      <div>11:00AM - 5:00PM</div>
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
