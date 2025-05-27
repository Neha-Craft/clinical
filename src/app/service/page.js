"use client"

import React from "react";

function ServicePage() {
    const servicesList = [
        { icon: "fas fa-stethoscope", head: "General Medicine", text: "Comprehensive diagnosis and treatment for a wide range of general health concerns and common illnesses." },
        { icon: "fas fa-scalpel", head: "Minor Procedures", text: "In-office treatments for minor surgical needs, such as wound care, lesion removal, and skin tag treatments." },
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

    return (
        <section id="services" className="services section" style={{
            paddingTop:"5rem"
        }}>
            <div className="container section-title" data-aos="fade-up">
                <h2>All Services</h2>
                <p>Explore the full range of services we offer to meet your healthcare needs</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    {servicesList.map((service, index) => (
                        <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={`${100 * (index + 1)}`}>
                            <div className="service-item position-relative">
                                <div className="icon">
                                    <i className={service.icon}></i>
                                </div>
                                <p className="services-head">{service.head}</p>
                                <hr style={{ width: "40px", border: "1px solid #3fbbc0", margin: "0 auto 15px auto" }} />
                                <p style={{ display: "flex", textAlign: "center", justifyContent: "center", margin: "auto" }}>
                                    {service.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServicePage;
