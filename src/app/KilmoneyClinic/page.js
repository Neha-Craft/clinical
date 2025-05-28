import React from 'react';

export default function Page() {
  return (
    <div>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Kilmoney Clinic</h2>
            <p 
          style={{fontSize:"18px",
            paddingTop:"1rem !important",
            paddingBottom:"1rem",
        
          }}
            >
               A patient-focused practice delivering comprehensive care with a personal touch
            </p>
          </div>

          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="position-relative h-100">
                  <img 
                    src="/village2.jpg" 
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
             <h3>Kilmoney Clinic</h3>
                    <p>Founded in xxxx, Kilmoney Clinic is a modern and friendly practice in Carrigaline.</p>
                    <p>We offer a full range of general practice services to public and private patients in the local and surrounding communities.</p>
                    <p>Our mission is to deliver high-quality health care holistically and empathetically through our experienced team.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}


