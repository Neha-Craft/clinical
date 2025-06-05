// "use client";

// import React from 'react';
// import { Accordion, Table, Button } from 'react-bootstrap';

// const VaccinesPage = () => {
//   return (
//     <div className="container py-5">
//       <h1 className="text-center mb-5">Vaccination Services</h1>

//       {/* Childhood Immunizations */}
//       <Accordion defaultActiveKey="0" className="mb-4">
//         <Accordion.Item eventKey="0">
//           <Accordion.Header>🟢 Childhood Immunisations</Accordion.Header>
//           <Accordion.Body>
//             <p>
//               Following the <a href="https://www.hse.ie/eng/health/immunisation/" target="_blank" rel="noopener noreferrer">HSE Immunisation Schedule</a> from 2 months of age.
//             </p>
//             <ul>
//               <li>2 months: 6-in-1, PCV, Rotavirus</li>
//               <li>4 months: 6-in-1, MenB, Rotavirus</li>
//               <li>12 months: MMR, MenB</li>
//             </ul>
//             <Button variant="primary" href="#contact">Book Appointment</Button>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>

//       {/* Travel Vaccines */}
//       <Accordion className="mb-4">
//         <Accordion.Item eventKey="1">
//           <Accordion.Header>✈️ Travel Vaccines</Accordion.Header>
//           <Accordion.Body>
//             <p><strong>Schedule a consultation 6-8 weeks before travel.</strong></p>
//             <Table striped bordered>
//               <thead>
//                 <tr>
//                   <th>Vaccine</th>
//                   <th>Recommended For</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Hepatitis A/B</td>
//                   <td>Most destinations</td>
//                 </tr>
//                 <tr>
//                   <td>Typhoid</td>
//                   <td>Asia, Africa, Latin America</td>
//                 </tr>
//               </tbody>
//             </Table>
//             <Button variant="primary" href="#contact">Contact Clinic</Button>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>

//       {/* Private/Occupational Vaccines */}
//       <Accordion className="mb-4">
//         <Accordion.Item eventKey="2">
//           <Accordion.Header>💼 Private & Occupational Vaccines</Accordion.Header>
//           <Accordion.Body>
//             <Table striped bordered>
//               <thead>
//                 <tr>
//                   <th>Vaccine</th>
//                   <th>Usage</th>
//                   <th>Notes</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>Tetanus</td>
//                   <td>Wound care</td>
//                   <td>Boosters every 10 years</td>
//                 </tr>
//                 <tr>
//                   <td>HPV</td>
//                   <td>Teens/Adults</td>
//                   <td>Private fee applies</td>
//                 </tr>
//               </tbody>
//             </Table>
//             <p className="text-muted">* Order at least 2 weeks in advance</p>
//           </Accordion.Body>
//         </Accordion.Item>
//       </Accordion>

//       {/* Contact Section */}
//       <section id="contact" className="mt-5 p-4 bg-light rounded">
//         <h2>📞 Contact Your Clinic</h2>
//         <div className="row">
//           <div className="col-md-4">
//             <h4>Ballinhassig</h4>
//             <p>021-488 5706</p>
//           </div>
//           <div className="col-md-4">
//             <h4>Carrigaline</h4>
//             <p>021-437 1974</p>
//           </div>
//           <div className="col-md-4">
//             <h4>Togher</h4>
//             <p>021-432 1790</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default VaccinesPage;
