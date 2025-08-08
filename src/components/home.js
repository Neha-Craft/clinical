"use client";

import React from "react";

export default function Home() {
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
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
          }}
        >
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
            ></div>

            <div
              className="container texthome"
              style={{
                position: "relative",
                zIndex: 2,
                color: "#fff",
                padding: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: 700,
                }}
                className="p-hero"
              >
                {heroData.heading}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  marginBottom: "2rem",
                  maxWidth: "523px",
                }}
                className="p-tag"
              >
                {heroData.text}
              </p>
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


