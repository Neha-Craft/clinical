const doctors = [
  {
    name: "Dr. Frank Fiorini",
    role: "General Practitioner - Universidad Nacional Experimental De Los Llanos Centrales Romulo Gallegos Escuel Graduate 2010, Joined 2024",
    color: "primary",
    specialty: "General Practice",
    description:
      "Dr. Frank Fiorini is on the Specialist Register for General Practice. His special interests include men's health and complex chronic disease management. He also specialises in providing joint injections.",
  },
  {
    name: "Jessica Moran",
    role: "Healthcare Professional",
    color: "success",
    specialty: "Healthcare",
    description: "Dedicated healthcare professional committed to providing quality patient care.",
  },
  {
    name: "Milena Stegnjaja",
    role: "Healthcare Professional",
    color: "warning",
    specialty: "Healthcare",
    description: "Experienced healthcare professional focused on patient wellbeing and care.",
  },
]

export default function Ourteam() {
  const getInitials = (name) =>
    name
      .replace("Dr. ", "")
      .split(" ")
      .map((word) => word[0])
      .join("")

  return (
    <section className="py-5 bg-light" id="doctors">
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ paddingBottom: "1rem" }}>Our Medical Team</h2>
        <p style={{ paddingTop: "1rem", paddingBottom: "2rem" }} className="doctor-p">
          Compassionate healthcare professionals dedicated to your wellbeing from beginning to end
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-center" style={{ justifyContent: "center" }}>
          {doctors.map((doctor, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 border-0 shadow rounded-4">
                <div className="card-body text-center">
                  <div>
                    <div
                      className={`bg-${doctor.color} text-white mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle services-head`}
                      style={{ width: "70px", height: "70px", fontSize: "1.5rem", fontWeight: "bold" }}
                    >
                      <p style={{ margin: "auto" }}> {getInitials(doctor.name)}</p>
                    </div>
                  </div>

                  <h5 className="card-title fw-semibold">{doctor.name}</h5>
                  <span className={`badge bg-${doctor.color} mb-2`}>{doctor.specialty}</span>
                  <p className="text-muted small mb-2">{doctor.role}</p>
                  <p className="text-muted small">{doctor.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
