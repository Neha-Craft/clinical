"use client"

export default function Servicesection() {
  return (
    <div>
      <section
        id="featured-services"
        className="featured-services section py-5"
        style={{ background:"#f8f9fa" }}
      >
        <div className="container">
      

             <div className="container section-title" data-aos="fade-up">
          <h2 
          style={{paddingBottom:"1rem"}}
          >Our Services</h2>
          <p 
          style={{paddingTop:"1rem",
          paddingBottom:"2rem"

          }}
          >Comprehensive healthcare solutions tailored to your needs</p>
        </div>

          <div className="row gy-4 justify-content-center" >
            {/* Online Services */}
            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
              <div
                className="service-item position-relative h-100 w-100"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div className="text-center mb-4">
                  <div
                    className="icon d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      borderRadius: "50%",
                      marginBottom: "1rem",
                    }}
                  >
                    <i className="fas fa-laptop-medical" style={{ fontSize: "2rem", color: "white" }}></i>
                  </div>
                  <h4 className="fw-bold text-primary mb-3">
                    <a href="#online-services" className="stretched-link text-decoration-none">
                      Online Services
                    </a>
                  </h4>
                </div>
                <ul className="service-list list-unstyled" style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Schedule appointments
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Request repeat prescriptions
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Access test results
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Obtain illness certificates
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Receive doctors' letters
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Cancel appointments
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Update your details
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Submit applications & forms
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Other services
                  </li>
                </ul>
              </div>
            </div>

            {/* Specialist Services */}
            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
              <div
                className="service-item position-relative h-100 w-100"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div className="text-center mb-4">
                  <div
                    className="icon d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                      borderRadius: "50%",
                      marginBottom: "1rem",
                    }}
                  >
                    <i className="fas fa-user-md" style={{ fontSize: "2rem", color: "white" }}></i>
                  </div>
                  <h4 className="fw-bold text-primary mb-3" style={{ whiteSpace:"nowrap"}}>
                    <a href="#specialist-services" className="stretched-link text-decoration-none">
                      Specialist Services
                    </a>
                  </h4>
                </div>
                <ul className="service-list list-unstyled" style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Health check-ups
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Travel vaccines
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Joint muscle injections
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Chronic disease management
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Menopause health
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Venesection
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Cryotherapy
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Cervical smears
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Blood work
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>ABPM & ECG
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Dressings & suture removal
                  </li>
                </ul>
              </div>
            </div>

            {/* Patient Resources */}
            <div className="col-xl-3 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
              <div
                className="service-item position-relative h-100 w-100"
                style={{
                  background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)"
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)"
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)"
                }}
              >
                <div className="text-center mb-4">
                  <div
                    className="icon d-inline-flex align-items-center justify-content-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                      borderRadius: "50%",
                      marginBottom: "1rem",
                    }}
                  >
                    <i className="fas fa-book-medical" style={{ fontSize: "2rem", color: "white" }}></i>
                  </div>
                  <h4 className="fw-bold text-primary mb-3">
                    <a href="#patient-resources" className="stretched-link text-decoration-none">
                      Patient Resources
                    </a>
                  </h4>
                </div>
                <ul className="service-list list-unstyled" style={{ fontSize: "0.9rem", lineHeight: "1.8" }}>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Healthier living
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Asthma management
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Cancer support
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Cardiovascular disease
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>COPD care
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Diabetes support
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Menopause guidance
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Online health information
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>Application forms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
