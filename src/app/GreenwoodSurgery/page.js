import React from 'react';

export default function Page() {
  return (
    <div>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Greenwood Surgery</h2>
          <p style={{fontSize:"18px"}}>
              A contemporary medical practice committed to your family's health journey.
            </p>
          </div>

          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="position-relative h-100">
                  <img 
                    src="/village3.webp" 
                    className="img-fluid rounded" 
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      maxHeight: '400px'
                    }}
                    alt="About The Village Medical Centre"
                  />
                </div>
              </div>

              <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
         
                    <p>Greenwood Surgery was founded in xxxx and is a contemporary practice located in the village of Togher.</p>
                    <p>We offer general practice services to both public and private patients, serving the local and surrounding areas.</p>
                    <p>Our aim is to provide all our patients with a high standard of health care through holistic and empathetic methods by a qualified team.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


