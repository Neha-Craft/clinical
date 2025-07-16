"use client";

import React from "react";

export default function KilomoneyHome() {
  const heroData = {
    src: "/practice.avif",
    alt: "Kilmoney Clinic",
    heading: "Welcome to Kilmoney Clinic",
    text: [
     "Kilmoney Clinic is a modern, friendly practice in located in the heart of Carrigaline, Cork"
    
    ],
    buttonHref: "#about",
    buttonText: "About Our Clinics",
  };

  return (
    <div>
      <section style={{marginBottom:"4rem"}}>
        <div style={{ position: "relative", maxWidth: "100%" }}>
          <div
            className="mainHometext"
            style={{
              position: "relative",
              backgroundImage: `url('${heroData.src}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "100%",
              height: "500px",
            }}
          >
            {/* Dark overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                zIndex: 1,
              }}
            />

            <div
              className="container texthome"
              style={{
                position: "relative",
                zIndex: 2,
                color: "#fff",
                padding: "20px",
              }}
            >
              <h3 style={{ fontSize: "50px", fontWeight: 700 }} className="p-hero">
                {heroData.heading}
              </h3>

              {heroData.text.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    marginBottom: "1rem",
                    maxWidth: "600px",
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {/* <a
                href={heroData.buttonHref}
                className="btn-get-started"
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 20px",
                  backgroundColor: "#007bff",
                  color: "#fff",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                {heroData.buttonText}
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
