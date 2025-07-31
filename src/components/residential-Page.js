"use client";

import React from "react";

export default function ResidentialPage() {
  const heroData = {
    src: "/Tusgo.jpg",
    alt: "Tus Go Deireadh Medical Centre",
    heading: "Tus go Deireadh",
    text: "Looking after your health, at every stage of life",
    buttonHref: "#about",
    buttonText: "About Our Clinics",
  };

  return (
    <div>
      <section>
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {/* Mission Statement */}
              <section className="mb-5">
                <p className="section-title h2" 
                style={{
                    fontSize:"32px",fontWeight:"bold"
                }}
                >Our Mission</p>
                <p style={{fontSize:"18px"}}>
                  At Tus go Deireadh, our mission is to provide equitable access to high quality medical care for
                  Nursing Home residents, providing management of acute issues, chronic disease and end of life.
                </p>
                <p>
                  Our service also recognises the statutory and HIQA requirements placed on nursing homes and aims to
                  work with the homes to ensure these requirements are exceeded.
                </p>
              </section>

              {/* Service Model */}
              <section className="mb-5">
                <p   style={{
                    fontSize:"32px",fontWeight:"bold",textAlign:"center"
                }}>Our Service Model</p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="bi bi-building text-primary me-2"></i>
                          Dedicated Structured Clinics
                        </h5>
                        <p className="card-text">Dedicated structured clinics at the nursing home</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="bi bi-chat-dots text-primary me-2"></i>
                          Structured Communication
                        </h5>
                        <p className="card-text">
                          Structured communication pathways with the home and dispensing pharmacy
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="bi bi-calendar-check text-primary me-2"></i>
                          Regular Reviews
                        </h5>
                        <p className="card-text">
                          Structured plan for conducting three monthly reviews and medication reviews
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title">
                          <i className="bi bi-people text-primary me-2"></i>
                          Family Meetings
                        </h5>
                        <p className="card-text">
                          Dedicated time to meet with residents and their families to discuss clinical issues and future
                          planning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact */}
              <section className="text-center">
                <div className="bg-light rounded p-4">
                  <h2 className="h4 mb-3">Get in Touch</h2>
                  <p className="mb-3">
                    If you would like to learn more or schedule a meeting, please do not hesitate to contact us.
                  </p>
                  <a
  href="mailto:residential@tvmc.ie"
  style={{
    color: "rgb(255, 255, 255)",
    background: "rgb(31, 181, 114)",
    borderWidth: "0px",
    padding: "10px 30px",
    transition: "0.4s",
    borderRadius: "4px",
    textDecoration: "none",
    display: "inline-block",
  }}
  className="btn btn-lg"
>
  <i className="bi bi-envelope me-2"></i>
  residential@tvmc.ie
</a>

              
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      </section>
    </div>
  );
}

