"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function IllnessForm({ clinicLocation = 'Village Medical Centre' }) {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    certificateStartDate: '',
    certificateEndDate: '',
    streetAddress: '',
    reason: '',
    extensionConfirmation: false,
    electronicConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formValues,
          formType: 'Illness Certificate Request',
          clinicLocation: clinicLocation // Add clinic location
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || 'Thank you for your request. We will process your illness certificate request soon.');
        setFormValues({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          dateOfBirth: '',
          certificateStartDate: '',
          certificateEndDate: '',
          streetAddress: '',
          reason: '',
          extensionConfirmation: false,
          electronicConsent: false
        });
      } else {
        const errorResult = await response.json();
        toast.error(errorResult.message || 'There was an error sending your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{
          paddingTop:"2rem",
          paddingBottom:"1rem"
        }}>Illness Certificate Form</h2>
      
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
            <form className="php-email-form" onSubmit={handleSubmit}>
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
                    name="firstName"
                    className="form-control"
                    placeholder="Your First Name"
                    required
                    value={formValues.firstName}
                    onChange={handleInputChange}
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
                    name="lastName"
                    className="form-control"
                    placeholder="Your Last Name"
                    required
                    value={formValues.lastName}
                    onChange={handleInputChange}
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
                    value={formValues.email}
                    onChange={handleInputChange}
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
                    value={formValues.phone}
                    onChange={handleInputChange}
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
                    name="dateOfBirth"
                    required
                    value={formValues.dateOfBirth}
                    onChange={handleInputChange}
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
                    name="certificateStartDate"
                    required
                    value={formValues.certificateStartDate}
                    onChange={handleInputChange}
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
                    name="certificateEndDate"
                    required
                    value={formValues.certificateEndDate}
                    onChange={handleInputChange}
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
                    name="streetAddress"
                    placeholder="Street address"
                    required
                    value={formValues.streetAddress}
                    onChange={handleInputChange}
                  />
                </div>


                <div className="col-12">
                  <label      style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Reason for Certificate</label>
                  <textarea
                    className="form-control"
                    name="reason"
                    rows="6"
                    placeholder="Please provide details about your illness"
                    required
                    value={formValues.reason}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                 <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="extensionConfirmation"
                      name="extensionConfirmation"
                      required
                      checked={formValues.extensionConfirmation}
                      onChange={handleInputChange}
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
                      name="electronicConsent"
                      required
                      checked={formValues.electronicConsent}
                      onChange={handleInputChange}
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
                        &nbsp;Submitting...
                      </>
                    ) : "Submit Form"}
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


