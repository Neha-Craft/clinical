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


// "use client";

// import React, { useState, useEffect } from "react";

// export default function Home() {
//   const slides = [
//     {
//       src: "/hero-carousel-1.jpg",
//       alt: "Tus Go Deireadh Medical Centre",
//       heading: "Welcome to Tus Go Deireadh",
//       text: "Compassionate healthcare for every stage of life, from infancy to senior years. Serving Ballinhassig, Carrigaline, and Togher with expert GP services.",
//       buttonHref: "#about",
//       buttonText: "About Our Clinics",
//     },
//     {
//       src: "/hero-carousel-2.jpg",
//       alt: "GP Services",
//       heading: "Comprehensive Medical Care",
//       text: "From chronic disease management to travel vaccines and minor procedures, we offer evidence-based care tailored to your needs.",
//       buttonHref: "#services",
//       buttonText: "View All Services",
//     },
//     {
//       src: "/hero-carousel-3.jpg",
//       alt: "Book an Appointment",
//       heading: "Easy Online Booking",
//       text: "Schedule appointments, request prescriptions, or access test results through our secure online portal.",
//       buttonHref: "#contact",
//       buttonText: "Book Now",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // 5 seconds

//     return () => clearTimeout(timer);
//   }, [currentSlide, slides.length]);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handlePreviousSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       <section>
//         <div
//           style={{
//             position: "relative",
//             maxWidth: "100%",
//           }}
//         >
//           <div
//             className="mainHometext"
//             style={{
//               position: "relative",
//               backgroundImage: `url('${slides[currentSlide].src}')`,
//               backgroundPosition: "center",
//               backgroundSize: "cover",
//               width: "100%",
//               height: "500px",
//             }}
//           >
//             {/* Dark overlay */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "rgba(0, 0, 0, 0.4)",
//                 zIndex: 1,
//               }}
//             ></div>

//             <div
//               className="container texthome"
//               style={{
//                 position: "relative",
//                 zIndex: 2,
//                 color: "#fff",
//                 padding: "20px",
//               }}
//             >
//               <p
//                 style={{
//                   fontSize: "50px",
//                   fontWeight: 700,
//                 }}
//                 className="p-hero"
//               >
//                 {slides[currentSlide].heading}
//               </p>
//               <p
//                 style={{
//                   fontSize: "20px",
//                   fontWeight: 500,
//                   marginBottom: "2rem",
//                   maxWidth: "523px",
//                 }}
//                  className="p-tag"
//               >
//                 {slides[currentSlide].text}
//               </p>
//               <a
//                 href={slides[currentSlide].buttonHref}
//                 className="btn-get-started"
//                 style={{
//                   display: "inline-block",
//                   marginTop: "10px",
//                   padding: "10px 20px",
//                   backgroundColor: "#007bff",
//                   color: "#fff",
//                   borderRadius: "5px",
//                   textDecoration: "none",
//                 }}
//               >
//                 {slides[currentSlide].buttonText}
//               </a>
//             </div>

//             {/* Indicators inside the image */}
//             <ol className="carousel-indicators">
//               {slides.map((_, index) => (
//                 <li
//                   key={index}
//                   className={index === currentSlide ? "active" : ""}
//                   onClick={() => setCurrentSlide(index)}
//                 ></li>
//               ))}
//             </ol>

//             {/* Previous control */}
//             <a
//               className="carousel-control-prev"
//               role="button"
//               onClick={handlePreviousSlide}
//               style={{
//                 cursor: "pointer",
//                 position: "absolute",
//                 top: "50%",
//                 left: "10px",
//                 transform: "translateY(-50%)",
//                 zIndex: 2,
//               }}
//             >
//               <span
//                 className="carousel-control-prev-icon bi bi-chevron-left"
//                 aria-hidden="true"
//               ></span>
//             </a>

//             {/* Next control */}
//             <a
//               className="carousel-control-next"
//               role="button"
//               onClick={handleNextSlide}
//               style={{
//                 cursor: "pointer",
//                 position: "absolute",
//                 top: "50%",
//                 right: "10px",
//                 transform: "translateY(-50%)",
//                 zIndex: 2,
//               }}
//             >
//               <span
//                 className="carousel-control-next-icon bi bi-chevron-right"
//                 aria-hidden="true"
//               ></span>
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

