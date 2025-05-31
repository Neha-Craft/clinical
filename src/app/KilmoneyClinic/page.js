import React from 'react';

export default function Page() {
  return (
    <div>
      <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
        <section id="about" className="about section">
          <div className="container section-title" data-aos="fade-up">
            <h2   style={{paddingBottom:"1rem"}}>Kilmoney Clinic</h2>
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
            <p>Kilmoney Clinic, Lower Kilmoney, Carrigaline, Cork, P43 VY30</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Call Us</p>
            <p>021-437 1974</p>
          </div>
        </div>

        <div className="col-md-6">
          <div className="info-item d-flex flex-column align-items-center" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope"></i>
            <p style={{ paddingTop: "10px", fontSize: "20px", fontWeight: 700 }}>Email Us</p>
            <p>kilmoney.clinic@tvmc.ie</p>
          </div>
        </div>
      </div>
    </div>

    <div className="col-lg-6">
      <div className="mb-5 container" data-aos="fade-up" data-aos-delay="200">
        <iframe
          style={{ border: 0, width: "100%", height: "370px" }}
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.70482367416!2d-8.40019191870765!3d51.811553926310104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x484485505ca573bd%3A0x7b0ee42ab71f6dd1!2sKilmoney%20Clinic!5e0!3m2!1sen!2sin!4v1748669070689!5m2!1sen!2sin" 
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


