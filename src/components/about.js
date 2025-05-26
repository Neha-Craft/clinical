import React from 'react';

function About() {
  return (
    <div>
      <section id="about" className="about section">
        <div className="container section-title" data-aos="fade-up">
          <h2>About Us</h2>
          <p>
            Dedicated experts offering attentive care and trusted health advice.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
             <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="position-relative">
                <video
                  src="/videos/video1.mp4"
                  controls
                  className="w-100 h-auto rounded shadow"
                  poster="/placeholder.svg?height=400&width=600"
                  preload="metadata"
                  playsInline
                  controlsList="nodownload"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
     

            <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
              <h3>Staff Members & Bios</h3>
              <ul>
                <li><strong>Dr Owen Power</strong>: Founder, UCC graduate, Cork GP Scheme, with multiple postgraduate qualifications.</li>
                <li><strong>Dr Susan O Connor</strong>: GP Principal, specialist, postgraduate training.</li>
                <li><strong>Dr Rebecca O Sullivan</strong>: Bio pending.</li>
                <li><strong>Dr Gillian Murphy</strong>: Bio pending.</li>
                <li><strong>Nurse Niamh</strong>: Practice Nurse, handles bloods, screenings, vaccinations.</li>
                <li><strong>Practice Manager</strong>: Manages team with secretaries.</li>
                <li><strong>Registrar</strong>: Year-long Cork GP trainee.</li>
                <li><strong>Medical Students</strong>: UCC, RCSI, Trinity; let reception know if you prefer privacy.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
