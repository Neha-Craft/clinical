"use client"

import React from "react";
import { useRouter } from 'next/navigation';

function Services() {
    const router = useRouter();

    const servicesList = [
        { icon: "fas fa-stethoscope", head: "General Medicine", text: "Comprehensive diagnosis and treatment for a wide range of general health concerns and common illnesses." },


        { icon: "fas fa-snowflake", head: "Cryotherapy", text: "Effective freezing treatments for warts, skin lesions, and other dermatological conditions using liquid nitrogen." },
        { icon: "fas fa-vials", head: "Venesection", text: "Safe blood withdrawal procedures for patients needing treatment for conditions such as hemochromatosis or polycythemia." },
        { icon: "fas fa-syringe", head: "Vaccines", text: "Routine immunizations for adults and children, travel vaccines, and seasonal flu shots to protect your health." },
        { icon: "fas fa-male", head: "Men's Health", text: "Specialized services addressing male-specific health issues, including prostate checks and testosterone monitoring." },
        { icon: "fas fa-child", head: "Children's Health", text: "Comprehensive pediatric care, covering routine check-ups, immunizations, and developmental assessments." },
        { icon: "fas fa-female", head: "Women's Health", text: "Wide-ranging services for women, including reproductive health, contraception advice, and breast health checks." },
        { icon: "fas fa-hotjar", head: "Menopause", text: "Support and management for women navigating menopause, addressing symptoms and long-term health planning." },
        { icon: "fas fa-heartbeat", head: "Extended Health Check", text: "Comprehensive health assessments, including physical exams, ECGs, lung function, and blood tests, at an affordable cost." },
        { icon: "fas fa-baby", head: "Pregnancy Care", text: "Prenatal and postnatal care to ensure the well-being of both mother and baby throughout pregnancy and delivery." },
        { icon: "fas fa-notes-medical", head: "Chronic Disease Management", text: "Coordinated care plans for long-term conditions like diabetes, hypertension, and asthma, ensuring ongoing health support." },
        { icon: "fas fa-procedures", head: "Palliative Care", text: "Compassionate care for patients with serious illness, focusing on comfort, quality of life, and family support." },
        { icon: "fas fa-file-medical", head: "Medical Reports & Certificates", text: "Preparation of official medical documentation, including fitness certificates, sick notes, and insurance reports." },
    ];

    const handleMore = () => {
        router.push('/service');
    };

    return (
        <section id="services" className="services section" style={{
            paddingTop:"2rem",
            paddingBottom:"1rem"
            
        }}>
            <div className="container section-title" data-aos="fade-up">
                <h2   style={{paddingBottom:"1rem"}}>Our Services</h2>
                <p 
                 style={{paddingTop:"1rem",
          paddingBottom:"2rem"

          }}
                >We deliver expert, comprehensive care to meet our patients' diverse needs</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {servicesList.slice(0, 6).map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className={service.icon}></i>
                                </div>
                                <p className="services-head">{service.head}</p>
                                <hr style={{ width: "40px", border: "1px solid #3fbbc0", margin: "0 auto 15px auto" }} />
                                <p style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "auto",maxWidth:"323px" }}>
                                    {service.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    style={{ textAlign: "center", marginTop: "20px", color: "#65c9cd", cursor: "pointer" }}
                    onClick={handleMore}
                >
                    See More <i className="fas fa-chevron-down"></i>
                </p>
            </div>
        </section>
    );
}

export default Services;
