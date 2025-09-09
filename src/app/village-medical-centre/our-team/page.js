const doctors = [
  {
    name: "Dr Susan O'Connor",
    role: "General Practitioner - UCC Graduate 2012, Joined September 2023",
    color: "primary",
    specialty: "General Practice",
    description: "Completed the North Dublin City GP Training Scheme in 2021 and has worked in Cork since.",
  },
  {
    name: "Dr Rebecca O'Sullivan",
    role: "General Practitioner - UCC Graduate 2012, Joined October 2021",
    color: "success",
    specialty: "General Practice",
    description:
      "Completed the Cork GP Training Scheme in 2018. Special interests include paediatrics, obstetrics and women's health. Assistant Scheme Director on the Cork GP Training Scheme.",
  },
  {
    name: "Dr Gillian Murphy",
    role: "General Practitioner - NUI Galway Graduate 2007, Joined 2015",
    color: "info",
    specialty: "General Practice",
    description: "On the Specialist Register for General Practice.",
  },
  {
    name: "Mary Bowen",
   
    color: "warning",
    specialty: "Nurse",
    description: "Dedicated healthcare professional providing comprehensive patient care.",
  },
  {
    name: "Niamh Cowhig",
    // role: "Nurse",
    color: "secondary",
    specialty: "Nurse",
    description: "Committed to delivering quality healthcare services to our community.",
  },
  {
    name: "Milena Stegnjaja",
    // role: "Healthcare Professional",
    color: "dark",
    specialty: "Physician assistant",
    description: "Experienced healthcare professional focused on patient wellbeing.",
  },
]

export default function Ourteam() {
  const getInitials = (name) =>
    name
      .replace("Dr. ", "")
      .replace("Dr ", "")
      .split(" ")
      .map((word) => word[0])
      .join("")

  return (
    <section className="py-5 bg-light" id="doctors">
      <div className="container section-title" data-aos="fade-up">
        <h2 style={{ paddingBottom: "1rem" }}>Our Medical Team - Ballinhassig</h2>
        <p style={{ paddingTop: "1rem", paddingBottom: "2rem" }} className="doctor-p">
          Our team of dedicated healthcare professionals are here to look after your health, at every stage of life
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
