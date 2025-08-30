export default function ClinicsPage() {
  const clinicLocations = [
    {
      id: 1,
      name: "The Village Medical Centre",
      image: "/pract.jpg",
      link: "/village-medical-center/villagehome",
    },
    {
      id: 2,
      name: "Greenwood Surgery",
      image: "/pract.jpg",
      link: "/greenwood-surgery",
    },
    {
      id: 3,
      name: "Kilmoney Clinic",
      image: "/pract.jpg",
      link: "/kilmoney-clinic/kilomoneyhome",
    },
  ]

  return (
    <div className="container mt-5">

              <div className="container section-title" style={{
                marginBottom:"2rem"
              }} data-aos="fade-up">
          <h2 
          style={{paddingBottom:"1rem"}}
          >
  Our Medical Clinics
          </h2>
     
        </div>
  

      <div className="row">
        {clinicLocations.map((clinic, index) => (
          <div key={clinic.id} className="col-12 mb-5">
            <div className={`row align-items-center ${index % 2 === 1 ? "flex-row-reverse" : ""}`}>
              <div className="col-md-4">
                <img
                  src={clinic.image || "/placeholder.svg"}
                  alt={clinic.name}
                  className="img-fluid rounded shadow"
                  style={{ width: "100%", height: "200px", objectFit: "cover" }}
                />
              </div>
              <div className="col-md-8">
                <div className="p-4">
                  <h3 className="mb-3">{clinic.name}</h3>
                  <p className="text-muted mb-4">
                    Experience quality healthcare at {clinic.name}. Our dedicated team of medical professionals is
                    committed to providing comprehensive care for you and your family.
                  </p>
                 <a
  href={clinic.link}
    target="_blank"
                    rel="noopener noreferrer"
  style={{
    color: "rgb(255, 255, 255)",
    background: "rgb(31, 181, 114)",
    borderWidth: 0,
    padding: "10px 30px",
    transition: "0.4s",
    borderRadius: "4px",
    textDecoration: "none", 
    display: "inline-block" 
  }}
>
  Visit Clinic
</a>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
