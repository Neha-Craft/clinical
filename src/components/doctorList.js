import React from 'react';

const doctors = [
  {
    name: 'Dr. Owen Power',
    role: 'General Practitioner (Men\'s Health, Chronic Diseases)',
    img: '/doctors-1.jpg',
  },
  {
    name: 'Dr. Susan O\'Connor',
    role: 'Women\'s Health & Menopause Specialist',
    img: '/doctors-2.jpg',
  },
  {
    name: 'Dr. Aisling Walsh',
    role: 'Family Medicine & Cardiovascular Health',
    img: '/doctors-3.jpg',
  },
  {
    name: 'Dr. Sarah Fitzgerald',
    role: 'Pediatrics & Women\'s Health',
    img: '/doctors-4.jpg',
  },
];

export default function DoctorList() {
  return (
    <section id="doctors" className="doctors section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2   style={{paddingBottom:"1rem"}}>Our Medical Team</h2>
        <p 
           style={{paddingTop:"1rem",
          paddingBottom:"2rem"

          }}
          className='doctor-p'
        >Compassionate healthcare professionals dedicated to your wellbeing from beginning to end</p>
      </div>

      <div className="container">
        <div className="row gy-4 list-doctor">
          {doctors.map((doctor, index) => (
            <div
              className="col-lg-3 col-md-6 d-flex align-items-stretch"
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
              key={index}
            >
              <div className="team-member">
                <div className="member-img">
                  <img src={doctor.img} className="img-fluid" alt={doctor.name} />
                  <div className="social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{doctor.name}</h4>
                  <span>{doctor.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}