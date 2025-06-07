
import Head from "next/head"

export default function Fees() {
  return (
    <>
  

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
              <div className="container section-title" data-aos="fade-up">
            <h2   style={{paddingBottom:"1rem"}}>    Fees</h2>
            <p className="fees-para" style={{fontSize:"18px", paddingTop:"1rem"

            }}>
                We aim to provide a fair and efficient service for all our patients. To facilitate this, the practice
                has adopted a policy that all accounts should be settled at the time of your consultation. We thank all
                our patients for co-operating with this policy.

            </p> 
          

               <p 
               className="fees-para"
                style={{fontSize:"18px",
               textAlign:"start !important"

            }}>
                If you have an outstanding balance, you may receive an SMS message from us with a secure payment link.
                Patients with outstanding balances are advised to pay their balance in full prior to making any further
                appointments.
              </p> 

              <p
              className="fees-para"
               style={{fontSize:"18px",  }}>
                We accept payment by cash, card or cheque and can take payment online or over the phone on outstanding
                balances.
              </p>

              <p className="fees-para" style={{fontSize:"18px", paddingBottom:"1rem"  }}>
                You can see an outline of our general fees below, please note that the fee for consultation with the
                Nurse may vary depending on the service being provided. Please enquire at reception if the fee for a
                particular service is not available below.
              </p>
          </div>
        

            {/* <div >
              <p style={{fontSize:"18px"  }}>
                We aim to provide a fair and efficient service for all our patients. To facilitate this, the practice
                has adopted a policy that all accounts should be settled at the time of your consultation. We thank all
                our patients for co-operating with this policy.
              </p>

              <p style={{fontSize:"18px" }}>
                If you have an outstanding balance, you may receive an SMS message from us with a secure payment link.
                Patients with outstanding balances are advised to pay their balance in full prior to making any further
                appointments.
              </p>

              <p style={{fontSize:"18px", }}>
                We accept payment by cash, card or cheque and can take payment online or over the phone on outstanding
                balances.
              </p>

              <p style={{fontSize:"18px",paddingBottom:"1rem"  }}>
                You can see an outline of our general fees below, please note that the fee for consultation with the
                Nurse may vary depending on the service being provided. Please enquire at reception if the fee for a
                particular service is not available below.
              </p>
            </div> */}

            <div className="row">
              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#3fbbc0 !important", color: "white" }}>
                    <tr>
                      <th>Consultation Types</th>
                      <th>Private</th>
                      <th>GMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GP Consultation</td>
                      <td>€60.00</td>
                      <td>Included</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Special Services</th>
                      <th>Private</th>
                      <th>GMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GP Consultation</td>
                      <td>€60.00</td>
                      <td>Included</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Vaccinations</th>
                      <th>Private</th>
                      <th>GMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GP Consultation</td>
                      <td>€60.00</td>
                      <td>Included</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Pregnancy Services</th>
                      <th>Private</th>
                      <th>GMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ante Natal</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Pregnancy Blood work</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Administration</th>
                      <th>Private</th>
                      <th>GMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Letters/Certs</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Medical Reports</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#3fbbc0", color: "white" }}>
                    <tr>
                      <th colSpan="2">FREE Services for GMS Patients</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="2">Standard GP Consultations</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Chronic Disease Management</td>
                    </tr>
                    <tr>
                      <td colSpan="2">Routine Blood Tests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="alert alert-info mt-4">
              <h5 className="alert-heading">Important Notice for Medical Card Holders</h5>
              <p>
                Patients with a valid Medical Card (Full or GP Visit) can access many free medical services, but note
                that some services are not fully covered:
              </p>

              <div className="row">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>• Driver's Licence Medicals</li>
                    <li>• Insurance Claim Forms and Medicals</li>
                    <li>• Pre-Employment or Return to Work Medicals</li>
                    <li>• Medical-legal Reports</li>
                    <li>• Legal Assessments (e.g., Testamentary Capacity)</li>
                    <li>• Document Signing/Witnessing</li>
                    <li>• Passport or Identity Reports</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li>• Travel Consults & Vaccines</li>
                    <li>• Letters and Certificates for Schools/Creche</li>
                    <li>• Non-scheme Vaccinations</li>
                    <li>• Activity Participation Exams (e.g., Sports)</li>
                    <li>• Non-Chronic Disease Management Blood Tests</li>
                    <li>• Joint Injections</li>
                    <li>• STI Screening</li>
                  </ul>
                </div>
              </div>

              <p className="mb-0">
                <strong>
                  If unsure whether a service incurs a charge, please call the surgery before your appointment.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// "use client"

// export default function FeeListing() {
//   const feeData = [
//     {
//       icon: "fas fa-stethoscope",
//       title: "Consultation",
//       services: [{ name: "GP Consultation", private: "€60.00", gms: "Included" }],
//     },
//     {
//       icon: "fas fa-syringe",
//       title: "Vaccinations",
//       services: [{ name: "GP Consultation", private: "€60.00", gms: "Included" }],
//     },
//     {
//       icon: "fas fa-baby",
//       title: "Pregnancy",
//       services: [
//         { name: "Ante Natal", private: "", gms: "Included" },
//         { name: "Pregnancy Blood work", private: "", gms: "" },
//       ],
//     },
//     {
//       icon: "fas fa-file-alt",
//       title: "Administration",
//       services: [
//         { name: "Letters/Certs", private: "", gms: "Included" },
//         { name: "Medical Reports", private: "", gms: "" },
//       ],
//     },
//   ]

//   return (
//     <div className="container-fluid py-5" style={{background:"#f8f9fa"}}>
//       <div className="container">
//         <div className="container section-title" data-aos="fade-up">
//           <h2 style={{ paddingBottom: "1rem" }}>Our Fee Listing</h2>
//           <p style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>(Editable chart example below)</p>
//         </div>

//         <div className="row g-4">
//           {feeData.map((category, index) => (
//             <div key={index} className="col-lg-6 col-md-6">
//               <div className="fee-card h-100 border-0 shadow-sm">
//                 <div className="card-header bg-white border-0 pb-3">
//                   <div className="d-flex align-items-center">
//                     <div className="icon-wrapper me-3">
//                       <i className={`${category.icon} fa-2x`} style={{ color: "#65c9cd" }}></i>
//                     </div>
//                     <h4 className="mb-0 fw-bold text-dark">{category.title}</h4>
//                   </div>
//                 </div>
//                 <div className="card-body pt-0">
//                   {category.services.map((service, serviceIndex) => (
//                     <div key={serviceIndex} className="service-item mb-4 p-3 bg-light rounded">
//                       {service.name && <h6 className="service-name mb-3 fw-semibold text-dark">{service.name}</h6>}
//                       <div className="row">
//                         <div className="col-6">
//                           <div className="fee-item">
//                             <small className="text-uppercase fw-bold text-muted d-block mb-1">Private</small>
//                             <span className="fw-bold text-warning fs-6">{service.private || "Contact us"}</span>
//                           </div>
//                         </div>
//                         <div className="col-6">
//                           <div className="fee-item">
//                             <small className="text-uppercase fw-bold text-muted d-block mb-1">GMS/GP</small>
//                             <span className="fw-bold text-success fs-6">{service.gms || "Contact us"}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         .fee-card {
//           border-radius: 6px; /* reduced from 12px to make corners less rounded */
//           background-color: #fff;
//           padding: 25px;
//           min-height: 280px;
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           border: 1px solid #e9ecef;
//         }

//         .fee-card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
//         }

//         .icon-wrapper {
//           width: 60px;
//           height: 60px;
//           background: #ffffff;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
//         }

//         .card-header {
//           border: none;
//           background: none;
//           padding: 0 0 20px 0;
//         }

//         .card-body {
//           padding: 0;
//         }

//         // .service-item {
//         //   border-left: 4px solid #65c9cd;
//         //   transition: all 0.3s ease;
//         // }

//         .service-item:hover {
//           background-color: #f8f9fa !important;
//         }

//         .service-name {
//           color: #2c3e50;
//           font-size: 1.1rem;
//         }

//         .fee-item {
//           text-align: center;
//         }

//         .text-success {
//           color: #65c9cd !important;
//         }

//         .text-warning {
//           color: #fd7e14 !important;
//         }

//         .bg-light {
//           background-color: #f8f9fa !important;
//         }

//         .text-primary {
//           color: #0d6efd !important;
//         }

//         .alert-info {
//           background-color: #e7f3ff;
//           color: #0c5460;
//           border-radius: 10px;
//         }

//         @media (max-width: 768px) {
//           .fee-card {
//             min-height: auto;
//             padding: 20px;
//           }

//           .icon-wrapper {
//             width: 50px;
//             height: 50px;
//           }

//           .display-5 {
//             font-size: 2rem;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }


