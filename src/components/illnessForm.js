import React from 'react'

export default function IllnessForm() {
  return (
    <div>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{
          paddingTop:"2rem",
          paddingBottom:"1rem"
        }}>Illness Certificate Form</h2>
        {/* <p 
          style={{
            paddingTop:"1rem",
            paddingBottom:"2rem"
          }}
        >
          Form
        </p> */}
      </div>
      <div className='container'>
        <div className="col-lg-12 form-illeness">
          <div 
          style={{
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
            padding: '30px',
            marginBottom: '30px',
            marginTop:"2rem"
          }}
          >
            <form className="php-email-form">
              <div className="row gy-4">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label 
                  style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}
                  >First Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label
                       style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}
                  >Last Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label      style={{
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

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label      style={{
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
                     <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label      style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Date of Birth </label>
                  <input
                    type="date"
                    className="form-control"
                    name="preferredDate"
                    required
                  />
                </div>
                 

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label      style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Certificate Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="preferredDate"
                    required
                  />
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label      style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Certificate End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="preferredDate"
                    required
                  />
                </div>
                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                  <label      style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}
                  >Street Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="street"
                    placeholder="Street address"
                    required
                  />
                </div>


                <div className="col-12">
                  <label      style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Reason for Certificate</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Additional Message"
                    required
                  ></textarea>
                </div>
                 <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="extensionConfirmation"
                      required
                    />
                    <label className="form-check-label" htmlFor="extensionConfirmation" style={{
                        fontSize:"16px"
                    }}>
                      I confirm that I am requesting an extension of an existing certificate. (Make an appointment with a GP for new medical issues.)
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="electronicConsent"
                      required
                    />
                    <label className="form-check-label" htmlFor="electronicConsent" style={{
                        fontSize:"16px"
                    }}>
                      I consent to this message being sent electronically to the practice.
                    </label>
                  </div>
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
                    Submit Form
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


