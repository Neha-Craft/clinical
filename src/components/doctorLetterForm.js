import React from 'react'

export default function DoctorLetterForm() {
  return (
    <div>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{
          paddingTop:"2rem",
          paddingBottom:"1rem"
        }}>Doctor's Letter Request</h2>
        <p 
          style={{
            paddingTop:"1rem",
            paddingBottom:"2rem"
          }}
        >
          To request a doctor's letter for travel, employment, visa applications, housing, etc.
        </p>
      </div>
      <div className='container'>
        <div className="col-lg-12">
          <div style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            padding: '30px',
            marginBottom: '30px'
          }}>
            <form className="php-email-form">
              <div className="row gy-4">
                <div className="col-12">
                  <p style={{ marginBottom: '20px', margin:"auto",maxWidth:"700px",textAlign:"center",fontWeight:600, color:"#00000",  textDecoration: 'underline',textDecorationColor: '#65c9cd' }}>
                    A medical examination may be required, or the letter may be completed by referring to your medical notes.
                    Please provide as much information as possible. You might receive a payment link or further advice via text message.
                    Allow 7 working days for the letter to be ready for collection.
                  </p>
                </div>

                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="Your First Name"
                    required
                  />
                </div>
                
                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Your Last Name"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Date of Birth (dd/mm/yyyy)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="dob"
                    placeholder="DD/MM/YYYY"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>

                <div className="col-12">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                <div className="col-12">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="street"
                    placeholder="Street address"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>City</label>
                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    placeholder="City"
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Postal Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="postcode"
                    placeholder="Postal Code"
                    required
                  />
                </div>

                <div className="col-12">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Details About the Required Letter</label>
                  <textarea
                    className="form-control"
                    name="letterDetails"
                    rows="6"
                    placeholder="Please provide as much detail as possible about the letter you need, including purpose, any specific requirements, and deadline if applicable"
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consentCheckbox"
                      required
                    />
                    <label className="form-check-label" htmlFor="consentCheckbox"
                    >
                      I consent to this message being sent electronically to the practice. I have checked that the email address and phone number provided are correct and consent to receiving medical information via email or text.
                    </label>
                  </div>
                </div>

                <div className="col-12 text-center">
                  <button
                    type="submit"
                    style={{
                      color: "#fff",
                      background: "#1fb572",
                      borderWidth: "0px",
                      padding: "10px 30px",
                      transition: "0.4s",
                      borderRadius: "4px",
                    }}
                  >
                    Submit Request
                  </button>
                </div>

                <div className="col-12">
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '20px', textAlign:"center" }}>
                    By using this form, you will send personal/sensitive information over the Internet. 
                    Please read our privacy policy to understand how we protect and manage your data. 
                    While we strive to keep your information secure, we cannot guarantee absolute privacy. 
                    If you have concerns, please use another method to contact the practice.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}