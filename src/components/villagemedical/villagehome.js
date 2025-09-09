"use client";

import React from "react";

export default function VillageHome() {
  const heroData = {
    src: "/pract.jpg",
    alt: "Village Medical Centre",
    heading: "Welcome to The Village Medical Center",
    text: [
      "The Village Medical Center is a friendly, modern practice in the heart of Ballinhassig.",

    ],
    buttonHref: "#about",
    buttonText: "About Our Clinics",
  };

  return (
    <div>
      <section>
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
              <p
                style={{ fontSize: "50px", fontWeight: 700 }}
                className="p-hero"
              >
                {heroData.heading}
              </p>

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

           
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
