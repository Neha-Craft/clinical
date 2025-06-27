"use client"

import { useState } from "react"
import { Calendar, Pill, FileText, Mail, TestTube, CreditCard, RefreshCw, Heart } from "lucide-react"
import { useRouter } from "next/navigation"

// Import your forms
import LetterRequestForm from "@/components/doctorLetterForm"
import TestResultsForm from "@/components/testResultsForm"
import IllnessForm from "@/components/illnessForm"

const services = [
  {
    title: "Book an Appointment",
    description: "Schedule your appointment online",
    icon: Calendar,
    action: "external",
    link: "https://pippo.ie",
    color: "bg-primary",
  },
  {
    title: "Order Prescription",
    description: "Request prescription refills",
    icon: Pill,
    action: "external",
    link: "https://pippo.ie",
    color: "bg-success",
  },
  {
    title: "Illness Certificates",
    description: "Request medical certificates for work or school",
    icon: FileText,
    action: "form",
    formType: "illness",
    color: "bg-secondary",
  },
  {
    title: "Letter Request",
    description: "Request medical letters and reports",
    icon: Mail,
    action: "form",
    formType: "letter",
    color: "bg-warning",
  },
  {
    title: "Test Results",
    description: "Request copies of your test results",
    icon: TestTube,
    action: "form",
    formType: "results",
    color: "bg-danger",
  },
  {
    title: "Apply for Medical Card",
    description: "Apply for a new medical card through HSE",
    icon: CreditCard,
    action: "external",
    link: "https://www2.hse.ie/services/schemes-allowances/medical-cards/applying/apply/",
    color: "bg-info",
  },
  {
    title: "Renew Medical Card",
    description: "Renew your existing medical card",
    icon: RefreshCw,
    action: "external",
    link: "https://www2.hse.ie/services/schemes-allowances/medical-cards/managing-your-medical-card/renew/",
    color: "bg-dark",
  },
  {
    title: "Illness Benefit",
    description: "Apply for illness benefit through MyWelfare",
    icon: Heart,
    action: "external",
    link: "https://services.mywelfare.ie/en/topics/health-disability-illness/illness-benefit/",
    color: "bg-primary",
  },
]

export default function ServicesSection() {
  const [activeForm, setActiveForm] = useState(null)
  const router = useRouter()

  const handleServiceClick = (service) => {
    if (service.action === "external") {
      window.open(service.link, "_blank")
    } else if (service.action === "form") {
      setActiveForm(service.formType)
    }
  }

  const closeForm = () => setActiveForm(null)

  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-4">Our Online Services</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
              Access all your healthcare needs conveniently online.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div className="col-md-6 col-lg-3" key={index}>
                  <div
                    className="card h-100 border-0 shadow-sm text-center p-3"
                    style={{ cursor: "pointer" ,display:"flex", justifyContent:"space-between"}}
                    onClick={() => handleServiceClick(service)}
                  >
                    <div
                      className={`d-flex align-items-center justify-content-center ${service.color} rounded-circle mx-auto mb-3`}
                      style={{ width: "64px", height: "64px" }}
                    >
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h5 className="card-title fw-semibold mb-2">{service.title}</h5>
                    <p className="card-text text-muted mb-3" style={{ fontSize: "0.9rem" }}>
                      {service.description}
                    </p>
                    <button
                      className={`btn w-100 ${
                        service.action === "external" ? "btn-primary" : "btn-outline-primary"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleServiceClick(service)
                      }}
                    >
                      {service.action === "external" ? "Visit Site" : "Open Form"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal-style forms */}
      {activeForm === "letter" && (
        <Modal onClose={closeForm}>
          <LetterRequestForm onClose={closeForm} />
        </Modal>
      )}
      {activeForm === "results" && (
        <Modal onClose={closeForm}>
          <TestResultsForm onClose={closeForm} />
        </Modal>
      )}
      {activeForm === "illness" && (
        <Modal onClose={closeForm}>
          <IllnessForm onClose={closeForm} />
        </Modal>
      )}
    </>
  )
}

// Modal component
function Modal({ onClose, children }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1050 }}
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded shadow-lg position-relative"
        style={{ maxHeight: "90vh", overflowY: "auto", minWidth: "600px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={onClose}
        ></button>
        {children}
      </div>
    </div>
  )
}




// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import {
//   Calendar,
//   Pill,
//   FileText,
//   Mail,
//   TestTube,
//   CreditCard,
//   RefreshCw,
//   Heart,
// } from "lucide-react"

// // Import forms
// import LetterRequestForm from "@/components/doctorLetterForm"
// import TestResultsForm from "@/components/testResultsForm"
// import IllnessForm from "@/components/illnessForm"

// // Services list
// const services = [
//   {
//     title: "Book an Appointment",
//     description: "Schedule your appointment online through our booking system",
//     icon: Calendar,
//     action: "external",
//     link: "https://pippo.ie",
//     color: "bg-primary",
//   },
//   {
//     title: "Order Prescription",
//     description: "Request prescription refills and new prescriptions",
//     icon: Pill,
//     action: "external",
//     link: "https://pippo.ie",
//     color: "bg-success",
//   },
//   {
//     title: "Illness Certificates",
//     description: "Request medical certificates for work or school",
//     icon: FileText,
//     action: "form",
//     formType: "illness",
//     color: "bg-secondary",
//   },
//   {
//     title: "Letter Request",
//     description: "Request medical letters and reports",
//     icon: Mail,
//     action: "form",
//     formType: "letter",
//     color: "bg-warning",
//   },
//   {
//     title: "Test Results",
//     description: "Request copies of your test results",
//     icon: TestTube,
//     action: "form",
//     formType: "results",
//     color: "bg-danger",
//   },
//   {
//     title: "Apply for Medical Card",
//     description: "Apply for a new medical card through HSE",
//     icon: CreditCard,
//     action: "external",
//     link: "https://www2.hse.ie/services/schemes-allowances/medical-cards/applying/apply/",
//     color: "bg-info",
//   },
//   {
//     title: "Renew Medical Card",
//     description: "Renew your existing medical card",
//     icon: RefreshCw,
//     action: "external",
//     link: "https://www2.hse.ie/services/schemes-allowances/medical-cards/managing-your-medical-card/renew/",
//     color: "bg-dark",
//   },
//   {
//     title: "Illness Benefit",
//     description: "Apply for illness benefit through MyWelfare",
//     icon: Heart,
//     action: "external",
//     link: "https://services.mywelfare.ie/en/topics/health-disability-illness/illness-benefit/",
//     color: "bg-primary",
//   },
// ]

// export default function ServicesSection() {
//   const [activeForm, setActiveForm] = useState(null)
//   const router = useRouter()

//   const handleServiceClick = (service) => {
//     if (service.action === "external") {
//       window.open(service.link, "_blank")
//     } else if (service.action === "form") {
//       setActiveForm(service.formType)
//     }
//   }

//   const closeForm = () => setActiveForm(null)

//   return (
//     <>
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="display-4 fw-bold text-dark mb-4">Our Online Services</h2>
//             <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
//               Access all your healthcare needs conveniently online. From booking appointments
//               to requesting medical documents.
//             </p>
//           </div>

//           <div className="row g-4">
//             {services.map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <div className="col-md-6 col-lg-3" key={index}>
//                   <div
//                     className="card h-100 border-0 shadow-sm text-center p-3"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => handleServiceClick(service)}
//                   >
//                     <div
//                       className={`d-flex align-items-center justify-content-center ${service.color} rounded-circle mx-auto mb-3`}
//                       style={{ width: "64px", height: "64px" }}
//                     >
//                       <IconComponent size={32} className="text-white" />
//                     </div>
//                     <h5 className="card-title fw-semibold mb-2">{service.title}</h5>
//                     <p className="card-text text-muted mb-3" style={{ fontSize: "0.9rem" }}>
//                       {service.description}
//                     </p>
//                     <button
//                       className={`btn w-100 ${
//                         service.action === "external" ? "btn-primary" : "btn-outline-primary"
//                       }`}
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleServiceClick(service)
//                       }}
//                     >
//                       {service.action === "external" ? "Visit Site" : "Open Form"}
//                     </button>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Modal-style forms */}
//       {activeForm === "letter" && (
//         <Modal onClose={closeForm}>
//           <LetterRequestForm onClose={closeForm} />
//         </Modal>
//       )}

//       {activeForm === "results" && (
//         <Modal onClose={closeForm}>
//           <TestResultsForm onClose={closeForm} />
//         </Modal>
//       )}

//       {activeForm === "illness" && (
//         <Modal onClose={closeForm}>
//           <IllnessForm />
//         </Modal>
//       )}
//     </>
//   )
// }

// // Modal component
// function Modal({ onClose, children }) {
//   return (
//     <div
//       className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
//       style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", zIndex: 1050 }}
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-4 rounded shadow-lg"
//         style={{ maxHeight: "90vh", overflowY: "auto", minWidth: "600px" }}
//         onClick={(e) => e.stopPropagation()}
//       >
//         <button
//           className="btn-close float-end mb-2"
//           aria-label="Close"
//           onClick={onClose}
//         ></button>
//         {children}
//       </div>
//     </div>
//   )
// }



// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { Calendar, Pill, FileText, Mail, TestTube, CreditCard, RefreshCw, Heart } from "lucide-react"

// // Import modals that you still want to show as forms:
// import LetterRequestForm from "@/components/doctorLetterForm"
// import TestResultsForm from "@/components/testResultsForm"

// // Services list
// const services = [
//   {
//     title: "Book an Appointment",
//     description: "Schedule your appointment online through our booking system",
//     icon: Calendar,
//     action: "external",
//     link: "https://pippo.ie",
//     color: "bg-primary",
//   },
//   {
//     title: "Order Prescription",
//     description: "Request prescription refills and new prescriptions",
//     icon: Pill,
//     action: "external",
//     link: "https://pippo.ie",
//     color: "bg-success",
//   },
//   {
//     title: "Illness Certificates",
//     description: "Request medical certificates for work or school",
//     icon: FileText,
//     action: "form",
//     formType: "illness", 
//     color: "bg-secondary",
//   },
//   {
//     title: "Letter Request",
//     description: "Request medical letters and reports",
//     icon: Mail,
//     action: "form",
//     formType: "letter",
//     color: "bg-warning",
//   },
//   {
//     title: "Test Results",
//     description: "Request copies of your test results",
//     icon: TestTube,
//     action: "form",
//     formType: "results",
//     color: "bg-danger",
//   },
//   {
//     title: "Apply for Medical Card",
//     description: "Apply for a new medical card through HSE",
//     icon: CreditCard,
//     action: "external",
//     link: "https://www2.hse.ie/services/schemes-allowances/medical-cards/applying/apply/",
//     color: "bg-info",
//   },
//   {
//     title: "Renew Medical Card",
//     description: "Renew your existing medical card",
//     icon: RefreshCw,
//     action: "external",
//     link: "https://www2.hse.ie/services/schemes-allowances/medical-cards/managing-your-medical-card/renew/",
//     color: "bg-dark",
//   },
//   {
//     title: "Illness Benefit",
//     description: "Apply for illness benefit through MyWelfare",
//     icon: Heart,
//     action: "external",
//     link: "https://services.mywelfare.ie/en/topics/health-disability-illness/illness-benefit/",
//     color: "bg-primary",
//   },
// ]

// export default function ServicesSection() {
//   const [activeForm, setActiveForm] = useState(null)
//   const router = useRouter()

//   const handleServiceClick = (service) => {
//     if (service.action === "external") {
//       window.open(service.link, "_blank")
//     } else if (service.action === "form") {
//       if (service.formType === "illness") {
  
//         router.push("/illness-form")
//       } else {
//         setActiveForm(service.formType)
//       }
//     }
//   }

//   const closeForm = () => setActiveForm(null)

//   return (
//     <>
//       <section className="py-5 bg-light">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="display-4 fw-bold text-dark mb-4">Our Online Services</h2>
//             <p className="lead text-muted mx-auto" style={{ maxWidth: "800px" }}>
//               Access all your healthcare needs conveniently online. From booking appointments to requesting medical
//               documents.
//             </p>
//           </div>

//           <div className="row g-4">
//             {services.map((service, index) => {
//               const IconComponent = service.icon
//               return (
//                 <div className="col-md-6 col-lg-3" key={index}>
//                   <div
//                     className="card h-100 border-0 shadow-sm text-center p-3"
//                     style={{ cursor: "pointer" }}
//                     onClick={() => handleServiceClick(service)}
//                   >
//                     <div className={`d-flex align-items-center justify-content-center ${service.color} rounded-circle mx-auto mb-3`} style={{ width: "64px", height: "64px" }}>
//                       <IconComponent size={32} className="text-white" />
//                     </div>
//                     <h5 className="card-title fw-semibold mb-2">{service.title}</h5>
//                     <p className="card-text text-muted mb-3" style={{ fontSize: "0.9rem" }}>
//                       {service.description}
//                     </p>
//                     <button
//                       className={`btn w-100 ${
//                         service.action === "external" ? "btn-primary" : "btn-outline-primary"
//                       }`}
//                       onClick={(e) => {
//                         e.stopPropagation()
//                         handleServiceClick(service)
//                       }}
//                     >
//                       {service.action === "external" ? "Visit Site" : "Open Form"}
//                     </button>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Modal-style forms */}
//       {activeForm === "letter" && <LetterRequestForm onClose={closeForm} />}
//       {activeForm === "results" && <TestResultsForm onClose={closeForm} />}
//     </>
//   )
// }
