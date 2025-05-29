"use client"

import { useState } from "react"
import Videomodel from "./model/videomodel"

function About() {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
    <div style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2   style={{paddingBottom:"1rem"}} >About Us</h2>
          <p
             style={{paddingTop:"1rem",
          paddingBottom:"2rem"

          }}
          >Dedicated experts offering attentive care and trusted health advice.</p>
        </div>

        <div className="container">
          <div
            className="row gy-4"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="position-relative">
                <img
                  src="/village5.jpg"
                  alt="About us"
                  style={{
                    maxWidth: "100%",
                    borderRadius: "8px",
                  }}
                />

                <div className="position-absolute top-50 start-50 translate-middle" style={{ zIndex: 10 }}>
                  <a
                    href="#"
                    className="pulsating-play-btn d-flex align-items-center justify-content-center"
                    onClick={(e) => {
                      e.preventDefault();
                      handlePlayClick();
                    }}
                  ></a>
                </div>
                <Videomodel show={showModal} onClose={handleCloseModal} />
              </div>
            </div>

            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
              <p style={{
                fontSize: "30px",
                fontWeight: "bold"
              }}>
                Staff Members & Bios
              </p>
              <ul>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Dr Owen Power</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}Founder, UCC graduate, Cork GP Scheme, with multiple postgraduate qualifications.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Dr Susan O Connor</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}GP Principal, specialist, postgraduate training.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Dr Rebecca O Sullivan</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}Bio pending.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Dr Gillian Murphy</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}Bio pending.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Nurse Niamh</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}Practice Nurse, handles bloods, screenings, vaccinations.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Practice Manager</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}Manages team with secretaries.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Registrar</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}Year-long Cork GP trainee.
                  </span>
                </li>
                <li style={{ paddingBottom: "5px" }}>
                  <strong>Medical Students</strong>:
                  <span style={{ fontSize: "14px" }}>
                    {" "}UCC, RCSI, Trinity; let reception know if you prefer privacy.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
