import React from 'react'

export default function TestResultsForm() {
  return (
    <div>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{
          paddingTop: "2rem",
          paddingBottom: "1rem"
        }}>Test Results Follow-up</h2>
        <p style={{
          paddingTop: "1rem",
          paddingBottom: "2rem"
        }}>
          Follow-up on your test results
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
                  <p style={{ marginBottom: '20px' }}>
                    Follow-up on test results is important. We will contact you by text or call within 2 weeks.
                    Opt-in to receive texts from the surgery by completing the consent form here.
                    <br /><br />
                    If you have not heard from us after 2 weeks, please use this form to follow up.
                    If your doctor advised a return appointment, call to check if results are in before attending.
                    <br /><br />
                    <strong>Note:</strong> Test results ordered by consultants do not come back to the surgery; contact your consultant directly.
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
                  }}>Date of Test</label>
                  <input
                    type="date"
                    className="form-control"
                    name="testDate"
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

                <div className="col-12 col-md-6">
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
                  }}>Test Results Required</label>
                  <textarea
                    className="form-control"
                    name="testDetails"
                    rows="4"
                    placeholder="Please describe which test results you're following up on"
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="confirmationCheckbox"
                      required
                    />
                    <label className="form-check-label" htmlFor="confirmationCheckbox">
                      I confirm my test was completed at least 2 weeks ago.
                    </label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consentCheckbox"
                      required
                    />
                    <label className="form-check-label" htmlFor="consentCheckbox">
                      I consent to this message being sent electronically to the practice. I have checked the email address and phone number supplied and consent to receiving medical information via email or text.
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
                    Submit Request
                  </button>
                </div>

                <div className="col-12">
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '20px' }}>
                    By using this form, you send personal/sensitive information over the Internet. Read our privacy policy to learn how we manage your data. We strive to keep your information secure but cannot guarantee absolute privacy. If this concerns you, use another method to contact the practice.
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