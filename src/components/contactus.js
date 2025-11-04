"use client"
import React,{useState} from "react";
import { toast } from 'react-toastify';

export default function Contactus({ clinicLocation = 'Village Medical Centre' }) {
  const [formValues,setFormValues]=useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare form data to match what the API expects
    const formDataToSend = {
      ...formValues,
      firstName: formValues.name || '',
      lastName: '',
      formType: 'Contact Form',
      clinicLocation: clinicLocation // Add clinic location
    };
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      console.log("response",response)
       
      if (response.ok === true) {
        const result = await response.json();
        toast.success(result.message || 'Thank you for your message. We will contact you soon.');
        setFormValues({
          name: '',
          email: '',
          phone: '',
          contactMethod: '',
          appointmentType: '',
          preferredDate: '',
          preferredTime: '',
          message: ''
        }); 
      } else {
        const errorResult = await response.json();
        toast.error(errorResult.message || 'There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  console.log("form",formValues)
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
          className="contact-ptag"
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
           className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.6928229595965!2d-8.53240192412344!3d51.8117731884234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48448ea25de539df%3A0x76f662c0a1c4bc8c!2sThe%20Village%20Medical%20Centre!5e0!3m2!1sen!2sin!4v1748668787056!5m2!1sen!2sin"   allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" ></iframe>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4 contact-content">
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
  <a href="tel:+0214885706" className="callus-contact">
    Medical Centre: 021-488 5706
  </a>
</p>
          <p style={{ textAlign: "center" }}>
  <a href="tel:+0214371974" className="callus-contact">
      Kilmoney Clinic: 021-437 1974
  </a>
</p>
  <p style={{ textAlign: "center" }}>
  <a href="tel:+0214321790" className="callus-contact">
      Greenwood Surgery: (021) 432 1790
  </a>
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
               <p>
  <a href="mailto:ballinhassig.clinic@tvmc.ie" className="callus-contact">
    ballinhassig.clinic@tvmc.ie
  </a>
</p>
      <p>
  <a href="mailto:kilmoney.clinic@tvmc.ie" className="callus-contact">
   kilmoney.clinic@tvmc.ie
  </a>
</p>
  <p>
  <a href="mailto:greenwood.surgery@tvmc.ie" className="callus-contact">
  greenwood.surgery@tvmc.ie
  </a>
</p>


                  
                    
                
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="php-email-form" onSubmit={handleFormSubmit}>
                <div className="row gy-4">
                  <div className="col-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      value={formValues.name || ''}
                     onChange= {(e)=>setFormValues({...formValues, name:e.target.value})}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Your Email"
                        value={formValues.email || ''}
                     onChange= {(e)=>setFormValues({...formValues, email:e.target.value})}
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
                              value={formValues.phone || ''}
                     onChange= {(e)=>setFormValues({...formValues, phone:e.target.value})}
                    />
                  </div>

                  <div className="col-12">
                    <select
                      className="form-control"
                      name="contactMethod"
                      required
                         value={formValues.contactMethod || ''}
                     onChange= {(e)=>setFormValues({...formValues, contactMethod:e.target.value})}
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
                          value={formValues.appointmentType || ''}
                     onChange= {(e)=>setFormValues({...formValues, appointmentType:e.target.value})}
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
                         value={formValues.preferredDate || ''}
                     onChange= {(e)=>setFormValues({...formValues, preferredDate:e.target.value})}
                    />
                  </div>

                  <div className="col-6">
                    <input
                      type="time"
                      className="form-control"
                      name="preferredTime"
                      required
                        value={formValues.preferredTime || ''}
                     onChange= {(e)=>setFormValues({...formValues, preferredTime:e.target.value})}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      placeholder="Additional Message"
                      required
                          value={formValues.message || ''}
                     onChange= {(e)=>setFormValues({...formValues, message:e.target.value})}
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        color: "#fff",
                        background: isSubmitting ? "#ccc" : "#1fb572",
                        borderWidth: "0px",
                        padding: "10px 30px",
                        transition: "0.4s",
                        borderRadius: "4px",
                        cursor: isSubmitting ? "not-allowed" : "pointer"
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                          &nbsp;Sending...
                        </>
                      ) : "Send Message"}
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