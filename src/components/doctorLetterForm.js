"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function DoctorLetterForm({ clinicLocation = 'Village Medical Centre' }) {
  const [formValues, setFormValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare form data to match what the API expects
      const formDataToSend = {
        ...formValues,
        firstName: formValues.firstName || '',
        lastName: formValues.lastName || '',
        formType: 'Doctor\'s Letter Request',
        reason: formValues.letterDetails || '',
        clinicLocation: clinicLocation // Add clinic location
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message || 'Thank you for your request. We will contact you soon.');
        // Reset form
        setFormValues({});
      } else {
        const errorResult = await response.json();
        toast.error(errorResult.message || 'There was an error submitting your request. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error submitting your request. Please try again.');
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
            <form className="php-email-form" onSubmit={handleSubmit}>
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
                    value={formValues.firstName || ''}
                    onChange={handleInputChange}
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
                    value={formValues.lastName || ''}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label   style={{
                    fontSize:"16px",
                    paddingBottom:"10px"
                  }}>Date of Birth (dd/mm/yyyy)</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    placeholder="DD/MM/YYYY"
                    value={formValues.dob || ''}
                    onChange={handleInputChange}
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
                    value={formValues.phone || ''}
                    onChange={handleInputChange}
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
                    value={formValues.email || ''}
                    onChange={handleInputChange}
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
                    value={formValues.street || ''}
                    onChange={handleInputChange}
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
                    value={formValues.city || ''}
                    onChange={handleInputChange}
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
                    value={formValues.postcode || ''}
                    onChange={handleInputChange}
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
                    value={formValues.letterDetails || ''}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="consentCheckbox"
                      name="consent"
                      checked={!!formValues.consent}
                      onChange={handleInputChange}
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
                    ) : "Submit Request"}
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