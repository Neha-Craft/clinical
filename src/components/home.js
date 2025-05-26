import React from 'react';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="hero" className="hero section">
        <div
          id="hero-carousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          {/* Slide 1: Welcome */}
          <div className="carousel-item active">
            <Image
              src="/hero-carousel-1.jpg" // Replace with your clinic image
              alt="Tus Go Deireadh Medical Centre"
              width={1920}
              height={1080}
              className="img-fluid"
              priority
            />
            <div className="container">
              <h2>Welcome to Tus Go Deireadh</h2>
              <p>
                Compassionate healthcare for every stage of life, from infancy to senior years. 
                Serving Ballinhassig, Carrigaline, and Togher with expert GP services.
              </p>
              <a href="#about" className="btn-get-started">
                About Our Clinics
              </a>
            </div>
          </div>

       
          <div className="carousel-item">
            <Image
              src="/hero-carousel-2.jpg"
              alt="GP Services"
              width={1920}
              height={1080}
              className="img-fluid"
            />
            <div className="container">
              <h2>Comprehensive Medical Care</h2>
              <p>
                From chronic disease management to travel vaccines and minor procedures, 
                we offer evidence-based care tailored to your needs.
              </p>
              <a href="#services" className="btn-get-started">
                View All Services
              </a>
            </div>
          </div>

        
          <div className="carousel-item">
            <Image
              src="/hero-carousel-3.jpg"
              alt="Book an Appointment"
              width={1920}
              height={1080}
              className="img-fluid"
            />
            <div className="container">
              <h2>Easy Online Booking</h2>
              <p>
                Schedule appointments, request prescriptions, or access test results 
                through our secure online portal.
              </p>
              <a href="#contact" className="btn-get-started">
                Book Now
              </a>
            </div>
          </div>

       
          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>
          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>

          <ol className="carousel-indicators"></ol>
        </div>
      </section>

  
    </div>
  );
}