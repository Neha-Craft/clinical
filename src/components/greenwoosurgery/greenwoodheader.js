"use client";

import React from "react";

export default function GreenwoodSurgery() {
  const heroData = {
    src: "/hero-carousel-2.jpg",
    alt: "Greenwood Surgery",
    heading: "Greenwood Surgery",
    text: [
      "Greenwood Surgery is a modern practice located in Togher.",
      "We provide general practice services to public and private patients across the local area.",

    ],
    buttonHref: "#about",
    buttonText: "About Greenwood Surgery",
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
              <h3 style={{ fontSize: "50px", fontWeight: 700 }}>{heroData.heading}</h3>
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
