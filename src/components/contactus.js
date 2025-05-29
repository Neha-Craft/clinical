import React from "react";

export default function Contactus() {
  return (
    <div>
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2 style={{
            paddingTop:"2rem",
            paddingBottom:"1rem"
          }}>Contact</h2>
          <p 
        style={{paddingTop:"1rem",
          paddingBottom:"2rem"

          }}
          >
            We are here to assist you across our three clinic locations in Cork.
            Whether you need an appointment, have a medical query, or simply
            want to reach out, please use the contact details below or send us a
            message through the form. Our team will get back to you as soon as
            possible.
          </p>
        </div>

        <div className="mb-5 container" data-aos="fade-up" data-aos-delay="200">
          <iframe
            style={{ border: 0, width: "100%", height: "370px" }}
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div
                    className="info-item d-flex flex-column align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <i className="bi bi-geo-alt"></i>
                    <p  style={{
                        paddingTop: "10px",
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >Address</p>
                    <div style={{ textAlign: "left" }}>
                      <p>Village Medical Centre, Ballinhassig, Cork</p>
                      <p style={{ textAlign: "center" }}>
                        Kilmoney Clinic, Carrigaline, Cork
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Greenwood Surgery, Togher, Cork
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="info-item d-flex flex-column align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <i className="bi bi-telephone"></i>
                    <p  style={{
                        paddingTop: "10px",
                        fontSize: "20px",
                        fontWeight: 700,
                      }}>Call Us</p>
                    <div style={{ textAlign: "left" }}>
                      <p style={{ textAlign: "center" }}>
                        {" "}
                        Medical Centre: 021-488 5706
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Kilmoney Clinic: 021-437 1974
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Greenwood Surgery: (021) 432 1790
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="info-item d-flex flex-column align-items-center"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <i className="bi bi-envelope"></i>
                    <p
                      style={{
                        paddingTop: "10px",
                        fontSize: "20px",
                        fontWeight: 700,
                      }}
                    >
                      Email Us
                    </p>
                    <div style={{ textAlign: "left" }}>
                      <p style={{ textAlign: "center" }}>
                        Ballinhassig.clinic@tvmc.ie
                      </p>
                      <p style={{ textAlign: "center" }}>
                        kilmoney.clinic@tvmc.ie
                      </p>
                      <p style={{ textAlign: "center" }}>
                        greenwood.surgery@tvmc.ie
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="php-email-form">
                <div className="row gy-4">
                  <div className="col-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <select
                      className="form-control"
                      name="contactMethod"
                      required
                    >
                      <option value="">Preferred Contact Method</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <select
                      className="form-control"
                      name="appointmentType"
                      required
                    >
                      <option value="">Appointment Type</option>
                      <option value="general">General Consultation</option>
                      <option value="followup">Follow-up</option>
                      <option value="prescription">Prescription Refill</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="col-6">
                    <input
                      type="date"
                      className="form-control"
                      name="preferredDate"
                      required
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="time"
                      className="form-control"
                      name="preferredTime"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Additional Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      style={{
                        color: "#fff",
                        background: "#3fbbc0",
                        borderWidth: "0px",
                        padding: "10px 30px",
                        transition: "0.4s",
                        borderRadius: "4px",
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
