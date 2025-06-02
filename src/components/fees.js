// "use client"


// import React from 'react';
//  import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaStethoscope, FaSyringe, FaBaby, FaFileAlt } from 'react-icons/fa';

// const FeeListing = () => {
//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-3">Our Fee Listing</h2>
//       <p className="text-center text-muted">(Editable chart example below)</p>
//       <Row className="g-4">
//         <Col md={6}>
//           <Card className="h-100 shadow-sm">
//             <Card.Body>
//               <div className="d-flex align-items-center mb-3">
//                 <FaStethoscope size={30} className="me-2 text-info" />
//                 <h5 className="mb-0">Consultation</h5>
//               </div>
//               <p>GP Consultation</p>
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <small className="text-muted">PRIVATE</small>
//                   <div className="text-danger">€60.00</div>
//                 </div>
//                 <div>
//                   <small className="text-muted">GMS/GP</small>
//                   <div className="text-success">Included</div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="h-100 shadow-sm">
//             <Card.Body>
//               <div className="d-flex align-items-center mb-3">
//                 <FaSyringe size={30} className="me-2 text-info" />
//                 <h5 className="mb-0">Vaccinations</h5>
//               </div>
//               <p>GP Consultation</p>
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <small className="text-muted">PRIVATE</small>
//                   <div className="text-danger">€60.00</div>
//                 </div>
//                 <div>
//                   <small className="text-muted">GMS/GP</small>
//                   <div className="text-success">Included</div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="h-100 shadow-sm">
//             <Card.Body>
//               <div className="d-flex align-items-center mb-3">
//                 <FaBaby size={30} className="me-2 text-info" />
//                 <h5 className="mb-0">Pregnancy</h5>
//               </div>
//               <p>Ante Natal</p>
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <small className="text-muted">PRIVATE</small>
//                   <div className="text-danger">Contact us</div>
//                 </div>
//                 <div>
//                   <small className="text-muted">GMS/GP</small>
//                   <div className="text-success">Included</div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6}>
//           <Card className="h-100 shadow-sm">
//             <Card.Body>
//               <div className="d-flex align-items-center mb-3">
//                 <FaFileAlt size={30} className="me-2 text-info" />
//                 <h5 className="mb-0">Administration</h5>
//               </div>
//               <p>Letters/Certs</p>
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <small className="text-muted">PRIVATE</small>
//                   <div className="text-danger">Contact us</div>
//                 </div>
//                 <div>
//                   <small className="text-muted">GMS/GP</small>
//                   <div className="text-success">Included</div>
//                 </div>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default FeeListing;





"use client"

export default function FeeListing() {
  const feeData = [
    {
      icon: "fas fa-stethoscope",
      title: "Consultation",
      services: [{ name: "GP Consultation", private: "€60.00", gms: "Included" }],
    },
    {
      icon: "fas fa-syringe",
      title: "Vaccinations",
      services: [{ name: "GP Consultation", private: "€60.00", gms: "Included" }],
    },
    {
      icon: "fas fa-baby",
      title: "Pregnancy",
      services: [
        { name: "Ante Natal", private: "", gms: "Included" },
        { name: "Pregnancy Blood work", private: "", gms: "" },
      ],
    },
    {
      icon: "fas fa-file-alt",
      title: "Administration",
      services: [
        { name: "Letters/Certs", private: "", gms: "Included" },
        { name: "Medical Reports", private: "", gms: "" },
      ],
    },
  ]

  return (
    <div className="container-fluid py-5" style={{background:"#f8f9fa"}}>
      <div className="container">
        <div className="container section-title" data-aos="fade-up">
          <h2 style={{ paddingBottom: "1rem" }}>Our Fee Listing</h2>
          <p style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>(Editable chart example below)</p>
        </div>

        <div className="row g-4">
          {feeData.map((category, index) => (
            <div key={index} className="col-lg-6 col-md-6">
              <div className="fee-card h-100 border-0 shadow-sm">
                <div className="card-header bg-white border-0 pb-3">
                  <div className="d-flex align-items-center">
                    <div className="icon-wrapper me-3">
                      <i className={`${category.icon} fa-2x`} style={{ color: "#65c9cd" }}></i>
                    </div>
                    <h4 className="mb-0 fw-bold text-dark">{category.title}</h4>
                  </div>
                </div>
                <div className="card-body pt-0">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="service-item mb-4 p-3 bg-light rounded">
                      {service.name && <h6 className="service-name mb-3 fw-semibold text-dark">{service.name}</h6>}
                      <div className="row">
                        <div className="col-6">
                          <div className="fee-item">
                            <small className="text-uppercase fw-bold text-muted d-block mb-1">Private</small>
                            <span className="fw-bold text-warning fs-6">{service.private || "Contact us"}</span>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="fee-item">
                            <small className="text-uppercase fw-bold text-muted d-block mb-1">GMS/GP</small>
                            <span className="fw-bold text-success fs-6">{service.gms || "Contact us"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .fee-card {
          border-radius: 6px; /* reduced from 12px to make corners less rounded */
          background-color: #fff;
          padding: 25px;
          min-height: 280px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e9ecef;
        }

        .fee-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15) !important;
        }

        .icon-wrapper {
          width: 60px;
          height: 60px;
          background: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .card-header {
          border: none;
          background: none;
          padding: 0 0 20px 0;
        }

        .card-body {
          padding: 0;
        }

        // .service-item {
        //   border-left: 4px solid #65c9cd;
        //   transition: all 0.3s ease;
        // }

        .service-item:hover {
          background-color: #f8f9fa !important;
        }

        .service-name {
          color: #2c3e50;
          font-size: 1.1rem;
        }

        .fee-item {
          text-align: center;
        }

        .text-success {
          color: #65c9cd !important;
        }

        .text-warning {
          color: #fd7e14 !important;
        }

        .bg-light {
          background-color: #f8f9fa !important;
        }

        .text-primary {
          color: #0d6efd !important;
        }

        .alert-info {
          background-color: #e7f3ff;
          color: #0c5460;
          border-radius: 10px;
        }

        @media (max-width: 768px) {
          .fee-card {
            min-height: auto;
            padding: 20px;
          }

          .icon-wrapper {
            width: 50px;
            height: 50px;
          }

          .display-5 {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
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

//         .service-item {
//           border-left: 4px solid #65c9cd;
//           transition: all 0.3s ease;
//         }

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



