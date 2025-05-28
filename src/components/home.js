
"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const slides = [
    {
      src: "/hero-carousel-1.jpg",
      alt: "Tus Go Deireadh Medical Centre",
      heading: "Welcome to Tus Go Deireadh",
      text: "Compassionate healthcare for every stage of life, from infancy to senior years. Serving Ballinhassig, Carrigaline, and Togher with expert GP services.",
      buttonHref: "#about",
      buttonText: "About Our Clinics",
    },
    {
      src: "/hero-carousel-2.jpg",
      alt: "GP Services",
      heading: "Comprehensive Medical Care",
      text: "From chronic disease management to travel vaccines and minor procedures, we offer evidence-based care tailored to your needs.",
      buttonHref: "#services",
      buttonText: "View All Services",
    },
    {
      src: "/hero-carousel-3.jpg",
      alt: "Book an Appointment",
      heading: "Easy Online Booking",
      text: "Schedule appointments, request prescriptions, or access test results through our secure online portal.",
      buttonHref: "#contact",
      buttonText: "Book Now",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <section>
        <div>
          <div
            className="mainHometext"
            style={{
              position: "relative",
              backgroundImage: `url('${slides[currentSlide].src}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              maxWidth: "100%",
              height: "500px",
              top: 0,
              left: 0,
              zIndex: 1,
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
                backgroundColor: "rgba(0, 0, 0, 0.4)", // Adjust darkness here
                zIndex: 2,
              }}
            ></div>

            <div
              className="container texthome"
              style={{
                position: "relative",
                zIndex: 3,
                color: "#fff",
                padding: "20px",
              }}
            >
              <p
                style={{
                  fontSize: "50px",
                  fontWeight: 700,
                }}
              >
                {slides[currentSlide].heading}
              </p>
              <p
                style={{
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom:"2rem",
                  maxWidth:"523px"
                }}
              >
                {slides[currentSlide].text}
              </p>
              <a
                href={slides[currentSlide].buttonHref}
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
                {slides[currentSlide].buttonText}
              </a>
            </div>
          </div>

          {/* Previous control */}
          <a
            className="carousel-control-prev"
            role="button"
            onClick={handlePreviousSlide}
            style={{ cursor: "pointer", marginRight: "10px" }}
          >
            <span
              className="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          {/* Next control */}
          <a
            className="carousel-control-next"
            role="button"
            onClick={handleNextSlide}
            style={{ cursor: "pointer", marginLeft: "10px" }}
          >
            <span
              className="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>

          {/* Indicators */}
          <ol className="carousel-indicators" style={{ marginTop: "10px" }}>
            {slides.map((_, index) => (
              <li
                key={index}
                className={index === currentSlide ? "active" : ""}
                onClick={() => setCurrentSlide(index)}
                style={{
                  cursor: "pointer",
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  margin: "0 5px",
                  backgroundColor: index === currentSlide ? "#007bff" : "#ccc",
                  borderRadius: "50%",
                }}
              ></li>
            ))}
          </ol>
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

//   // Added setTimeout to auto-change slide every 3 seconds
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000); // 3 seconds

//     return () => clearTimeout(timer); // cleanup timer
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
//         <div>
//           <div className="">
//             {/* Only render the currentSlide */}
//             <div
//               className="mainHometext"
//               style={{
//                 backgroundImage: `url('${slides[currentSlide].src}')`,
//                 backgroundPosition: "center",
//                 backgroundSize: "cover",
//                 maxWidth: "100%",
//                 height: "500px",
//                 filter: "blur(-80px)",
//                 top: 0,
//                 left: 0,
//                 zIndex: 1,
//               }}
//             >
//               <div className="container texthome">
//                 <p
//                   style={{
//                     fontSize: "50px",
//                     fontWeight: 700,
//                   color: "#000", 
//                   }}
//                 >
//                   {slides[currentSlide].heading}
//                 </p>
//                 <p
//                   style={{
//                     fontSize: "20px",
//                     fontWeight: 500,
//                     color: "#fffff",
//                   }}
//                 >
//                   {slides[currentSlide].text}
//                 </p>
//                 <a
//                   href={slides[currentSlide].buttonHref}
//                   className="btn-get-started"
//                 >
//                   {slides[currentSlide].buttonText}
//                 </a>
//               </div>
//             </div>

//             {/* Previous control */}
//             <a
//               className="carousel-control-prev"
//               role="button"
//               onClick={handlePreviousSlide}
//               style={{ cursor: "pointer" }}
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
//               style={{ cursor: "pointer" }}
//             >
//               <span
//                 className="carousel-control-next-icon bi bi-chevron-right"
//                 aria-hidden="true"
//               ></span>
//             </a>

//             {/* Indicators */}
//             <ol className="carousel-indicators">
//               {slides.map((_, index) => (
//                 <li
//                   key={index}
//                   className={index === currentSlide ? "active" : ""}
//                   onClick={() => setCurrentSlide(index)}
//                   style={{ cursor: "pointer" }}
//                 ></li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



// "use client"

// import React, { useState } from 'react';
// import Image from 'next/image';

// export default function Home() {
//   const slides = [
//     {
//       src: '/hero-carousel-1.jpg',
//       alt: 'Tus Go Deireadh Medical Centre',
//       heading: 'Welcome to Tus Go Deireadh',
//       text: 'Compassionate healthcare for every stage of life, from infancy to senior years. Serving Ballinhassig, Carrigaline, and Togher with expert GP services.',
//       buttonHref: '#about',
//       buttonText: 'About Our Clinics',
//     },
//     {
//       src: '/hero-carousel-2.jpg',
//       alt: 'GP Services',
//       heading: 'Comprehensive Medical Care',
//       text: 'From chronic disease management to travel vaccines and minor procedures, we offer evidence-based care tailored to your needs.',
//       buttonHref: '#services',
//       buttonText: 'View All Services',
//     },
//     {
//       src: '/hero-carousel-3.jpg',
//       alt: 'Book an Appointment',
//       heading: 'Easy Online Booking',
//       text: 'Schedule appointments, request prescriptions, or access test results through our secure online portal.',
//       buttonHref: '#contact',
//       buttonText: 'Book Now',
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleNextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const handlePreviousSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div>
//       <section id="hero" className="hero section">
//         <div
//           id="hero-carousel"
//           className="carousel slide carousel-fade"
//         >
//           <div className="carousel-inner">
//             {slides.map((slide, index) => (
//               <div
//                 key={index}
//                  className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
//               >
//                  <Image
//                   src={slide.src}
//                   alt={slide.alt}
//                   width={1920}
//                   height={1080}
//                    className="img-fluid"
//                   priority={index === 0}
//                 />
//                 <div className="container">
//                   <h2>{slide.heading}</h2>
//                   <p>{slide.text}</p>
//                   <a href={slide.buttonHref} className="btn-get-started">
//                     {slide.buttonText}
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>

//            <a
//             className="carousel-control-prev"
//             role="button"
//             onClick={handlePreviousSlide}
//             style={{ cursor: 'pointer' }}
//           >
//             <span
//               className="carousel-control-prev-icon bi bi-chevron-left"
//               aria-hidden="true"
//             ></span>
//           </a>
//           <a
//             className="carousel-control-next"
//             role="button"
//             onClick={handleNextSlide}
//             style={{ cursor: 'pointer' }}
//           >
//             <span
//               className="carousel-control-next-icon bi bi-chevron-right"
//               aria-hidden="true"
//             ></span>
//           </a>

//           <ol className="carousel-indicators">
//             {slides.map((_, index) => (
//               <li
//                 key={index}
//                 className={index === currentSlide ? 'active' : ''}
//                 onClick={() => setCurrentSlide(index)}
//                 style={{ cursor: 'pointer' }}
//               ></li>
//             ))}
//           </ol>
//         </div>
//       </section>
//     </div>
//   );
// }
