import React from 'react';

export default function Page() {
  return (
    <div>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2   style={{paddingBottom:"1rem"}}>Greenwood Surgery</h2>
          <p 
          style={{fontSize:"18px",
            paddingTop:"1rem !important",
            paddingBottom:"1rem",
            marginBottom:"1rem"
          }}
          >
              A contemporary medical practice committed to your family's health journey.
            </p>
          </div>

          <div className="container" style={{
            paddingTop:"1rem"
          }}>
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
            <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2 style={{
            paddingTop:"2rem",
            paddingBottom:"1rem"
          }}
          >Contact</h2>
  
        </div>

    

    <div className="container" data-aos="fade-up" data-aos-delay="100" style={{ paddingTop: "1rem" }}>
  <div className="row gy-4">
    <div className="col-lg-6">
      <div className="row gy-4">
        <div className="col-lg-12">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Address</p>
            <p>Greenwood Surgery, Greenwood Estate, Togher, Cork</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Call Us</p>
            <p >021-432 1790</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Email Us</p>
            <p>
              greenwood.surgery@tvmc.ie
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="mb-5 container" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "370px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.240564739151!2d-8.49679052411901!3d51.87482118379685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48448fd032667dc5%3A0x72f0e45e5ec8085a!2sDr%20Robert%20Townsend%2C%20Greenwood%20Surgery!5e0!3m2!1sen!2sin!4v1748669261448!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2463.240564739151!2d-8.49679052411901!3d51.87482118379685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48448fd032667dc5%3A0x72f0e45e5ec8085a!2sDr%20Robert%20Townsend%2C%20Greenwood%20Surgery!5e0!3m2!1sen!2sin!4v1748669261448!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  </div>
</div>
      </section>
    </div>
  );
}


