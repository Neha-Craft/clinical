import React from 'react';

export default function Page() {
  return (
    <div>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2   style={{paddingBottom:"1rem"}}>The Village Medical Centre</h2>
            <p style={{fontSize:"18px", paddingTop:"1rem",paddingBottom:"1rem"

            }}>
The Village Medical Centre: Where Modern Medicine Meets Personalized Care
            </p>
          </div>

          <div className="container">
            <div className="row gy-4 align-items-center">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="position-relative h-100">
                  <img 
                    src="/village1.jfif" 
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
               
                <p>Established in xxxx, The Village Medical Centre is a modern, friendly, and dynamic practice situated in the picturesque village of Ballinhassig.</p>
                <p>We offer comprehensive general practice services to both public and private patients, serving the local and surrounding communities.</p>
                <p>Our philosophy is to deliver the highest standard of healthcare to all our patients in a holistic and empathetic manner, facilitated by an experienced and compassionate team.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

          <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2  style={{paddingTop:"1rem",paddingBottom:"1rem"
         

          }}
          >Contact</h2>
  
        </div>

    

    <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ paddingTop: "2rem" }}>
  <div className="row gy-4">
    <div className="col-lg-6">
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Address</p>
            <p >The Village Medical Centre, TulligMore, Ballinhassig, Cork, T12 D521</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="300">
           <a href="tel:+0214885706"><i className="bi bi-telephone"></i></a> 
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Call Us</p>
            <p>021-488 5706</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Email Us</p>
            <p>ballinhassig.clinic@tvmc.ie</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="mb-5 container" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "370px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.6928229595965!2d-8.53240192412344!3d51.8117731884234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48448ea25de539df%3A0x76f662c0a1c4bc8c!2sThe%20Village%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1748668787056!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</div>
      </section>
    </div>
  );
}




