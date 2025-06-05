const doctors = [
  {
    name: "Dr. Owen Power",
    role: "General Practitioner (Men's Health, Chronic Diseases)",
    color: "primary",
    specialty: "General Medicine",
  },
  {
    name: "Dr. Susan O'Connor",
    role: "Women's Health & Menopause Specialist",
    color: "danger",
    specialty: "Women's Health",
  },
  {
    name: "Dr. Aisling Walsh",
    role: "Family Medicine & Cardiovascular Health",
    color: "success",
    specialty: "Cardiology",
  },
  {
    name: "Dr. Sarah Fitzgerald",
    role: "Pediatrics & Women's Health",
    color: "warning",
    specialty: "Pediatrics",
  },
];

export default function DoctorList() {
  const getInitials = (name) =>
    name.replace("Dr. ", "").split(" ").map((word) => word[0]).join("");

  return (
    <section className="py-5 bg-light" id="doctors">
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
        <div className="row g-4">
          {doctors.map((doctor, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card h-100 border-0 shadow rounded-4">
                <div className="card-body text-center">
                  <div>
                  <div
                    className={`bg-${doctor.color} text-white mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle services-head`}
                    style={{ width: "70px", height: "70px", fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    <p style={{margin:"auto"}}> {getInitials(doctor.name)}</p>
                   
                  </div>
                  </div>

                  <h5 className="card-title fw-semibold">{doctor.name}</h5>
                  <span className={`badge bg-${doctor.color} mb-2`}>
                    {doctor.specialty}
                  </span>
                  <p className="text-muted small">{doctor.role}</p>
                </div>

            
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

