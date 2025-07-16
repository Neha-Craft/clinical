const doctors = [
  {
    name: "Dr. Suzanne Smyth",
    role: "General Practitioner - NUI Galway Graduate 2015, Joined 2025",
    color: "primary",
    specialty: "General Practice",
  },
  {
    name: "Dr. Diana Lynch",
    role: "General Practitioner - NUI Galway Graduate 2015, Joined 2024",
    color: "success",
    specialty: "General Practice",
  },
  {
    name: "Jessica Moran",
    role: "Nurse",
    color: "warning",
    specialty: "Kilmoney",
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
         our team of dedicated healthcare professionals are here to look after your health, at every stage of life
        </p>
      </div>

      <div className="container">
        <div className="row g-4 justify-center" style={{justifyContent:"center"}}>
          {doctors.map((doctor, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
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
                  <p className="text-muted small">{doctor.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
