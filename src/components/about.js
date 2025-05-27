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
          <h2>About Us</h2>
          <p>Dedicated experts offering attentive care and trusted health advice.</p>
        </div>

        <div className="container">
          <div
            className="row gy-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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
              <h3>Staff Members & Bios</h3>
              <ul>
                <li>
                  <strong>Dr Owen Power</strong>: Founder, UCC graduate, Cork GP Scheme, with multiple postgraduate
                  qualifications.
                </li>
                <li>
                  <strong>Dr Susan O Connor</strong>: GP Principal, specialist, postgraduate training.
                </li>
                <li>
                  <strong>Dr Rebecca O Sullivan</strong>: Bio pending.
                </li>
                <li>
                  <strong>Dr Gillian Murphy</strong>: Bio pending.
                </li>
                <li>
                  <strong>Nurse Niamh</strong>: Practice Nurse, handles bloods, screenings, vaccinations.
                </li>
                <li>
                  <strong>Practice Manager</strong>: Manages team with secretaries.
                </li>
                <li>
                  <strong>Registrar</strong>: Year-long Cork GP trainee.
                </li>
                <li>
                  <strong>Medical Students</strong>: UCC, RCSI, Trinity; let reception know if you prefer privacy.
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
