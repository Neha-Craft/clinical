export default function Fees() {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="container section-title" data-aos="fade-up">
              <h2 style={{ paddingBottom: "1rem" }}>Fees</h2>
              <p className="fees-para" style={{ fontSize: "18px", paddingTop: "1rem" }}>
                We aim to provide a fair and efficient service for all our patients. To facilitate this, the practice
                has adopted a policy that all accounts should be settled at the time of your consultation. We thank all
                our patients for co-operating with this policy.
              </p>
              <p className="fees-para" style={{ fontSize: "18px", textAlign: "start !important" }}>
                If you have an outstanding balance, you may receive an SMS message from us with a secure payment link.
                Patients with outstanding balances are advised to pay their balance in full prior to making any further
                appointments.
              </p>
              <p className="fees-para" style={{ fontSize: "18px" }}>
                We accept payment by cash, card or cheque and can take payment online or over the phone on outstanding
                balances.
              </p>
              <p className="fees-para" style={{ fontSize: "18px", paddingBottom: "1rem" }}>
                You can see an outline of our general fees below, please note that the fee for consultation with the
                Nurse may vary depending on the service being provided. Please enquire at reception if the fee for a
                particular service is not available below.
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#3fbbc0", color: "white" }}>
                    <tr>
                      <th>Consultation Types</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>GP Consultation</td>
                      <td>€60.00</td>
                    </tr>
                    <tr>
                      <td>GP Consultation 2 Children</td>
                      <td>€80.00</td>
                    </tr>
                    <tr>
                      <td>GP Consultation with Bloods</td>
                      <td>€80.00</td>
                    </tr>
                    <tr>
                      <td>GP Consultation with Bloods & ECG</td>
                      <td>€100.00</td>
                    </tr>
                    <tr>
                      <td>GP Consultation with ECG</td>
                      <td>€80.00</td>
                    </tr>
                    <tr>
                      <td>GP Follow-up</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>GP Follow-up same condition within ONE week</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Phone Consultation</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Nurses Consultation</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Consultation 2 members (1 adult + 1 u 12's exc u 6)</td>
                      <td>€100.00</td>
                    </tr>
                    <tr>
                      <td>Under 12s (exc under 6's with a valid GP visit)</td>
                      <td>€60.00</td>
                    </tr>
                    <tr>
                      <td>Extra Child</td>
                      <td>€20.00</td>
                    </tr>
                    <tr>
                      <td>Over 70's with GP card</td>
                      <td>€0.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Special Services</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Full Medical | Doctor</td>
                      <td>€100.00</td>
                    </tr>
                    <tr>
                      <td>Employment Medical</td>
                      <td>€100.00</td>
                    </tr>
                    <tr>
                      <td>Driving Licence Medical</td>
                      <td>€60.00</td>
                    </tr>
                    <tr>
                      <td>Travel Consultation (vaccines not included)</td>
                      <td>€60.00</td>
                    </tr>
                    <tr>
                      <td>Domiciliary</td>
                      <td>€75.00</td>
                    </tr>
                    <tr>
                      <td>Capicity Assessment</td>
                      <td>€175.00</td>
                    </tr>
                    <tr>
                      <td>Capicity Assessment Repeat</td>
                      <td>€125.00</td>
                    </tr>
                    <tr>
                      <td>Medical Legal Report</td>
                      <td>€400.00</td>
                    </tr>
                    <tr>
                      <td>PMA | REPORT | OTHER</td>
                      <td>€200.00</td>
                    </tr>
                    <tr>
                      <td>STI Screening & treatment</td>
                      <td>€100.00</td>
                    </tr>
                    <tr>
                      <td>BP 24 Hour Monitor</td>
                      <td>€80.00</td>
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
                      <th>Vaccinations & Injections</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Flu Vaccine</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Pneumonia Vaccine | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Immunisation | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>B12 Injection</td>
                      <td>€30.00</td>
                    </tr>
                    <tr>
                      <td>Injection | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Women's Health Services</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cervical Smear | Private</td>
                      <td>€160.00</td>
                    </tr>
                    <tr>
                      <td>Cervical Smear Programme | STC</td>
                      <td>€0.00</td>
                    </tr>
                    <tr>
                      <td>Coil Insertion</td>
                      <td>€200.00</td>
                    </tr>
                    <tr>
                      <td>Mirena | Copper | Insertion</td>
                      <td>€160.00</td>
                    </tr>
                    <tr>
                      <td>Mirena | Copper Coil | Pre visit</td>
                      <td>€60.00</td>
                    </tr>
                    <tr>
                      <td>Mirena | Copper Coil | Removal</td>
                      <td>€80.00</td>
                    </tr>
                    <tr>
                      <td>Mirena | Copper Coil | Review at 6 weeks</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Mirena|Copper Coil Removal & Insertion (same day)</td>
                      <td>€200.00</td>
                    </tr>
                    <tr>
                      <td>Implanon Insertion</td>
                      <td>€100.00</td>
                    </tr>
                    <tr>
                      <td>Implanon Pre-visit</td>
                      <td>€60.00</td>
                    </tr>
                    <tr>
                      <td>Implanon Removal</td>
                      <td>€120.00</td>
                    </tr>
                    <tr>
                      <td>Implanon Removal and insertion (same day)</td>
                      <td>€150.00</td>
                    </tr>
                    <tr>
                      <td>Pill Check (under 16 & over 45)</td>
                      <td>€60.00</td>
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
                      <th>Nursing Services</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Blood Test | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Follow Up Bloods | Nurse</td>
                      <td>€20.00</td>
                    </tr>
                    <tr>
                      <td>Dressing | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Ear Syringe | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Suture Removal (Nurse)</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Urine Sampling | Nurse</td>
                      <td>€40.00</td>
                    </tr>
                    <tr>
                      <td>Courier-bloods | Urine Sample charge</td>
                      <td>€10.00</td>
                    </tr>
                    <tr>
                      <td>Cryotherapy First Visit</td>
                      <td>€80.00</td>
                    </tr>
                    <tr>
                      <td>Cryotherapy Repeat Visit</td>
                      <td>€40.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-md-6 mb-4">
                <table className="table table-bordered">
                  <thead style={{ backgroundColor: "#2c9faf", color: "white" }}>
                    <tr>
                      <th>Administration</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Admin - Fee for repeat receipts</td>
                      <td>€20.00</td>
                    </tr>
                    <tr>
                      <td>Admin - Fee for Year end Account Summary</td>
                      <td>€50.00</td>
                    </tr>
                    <tr>
                      <td>Admin - Medical Certificate</td>
                      <td>€20.00</td>
                    </tr>
                    <tr>
                      <td>Admin - Prescription | Repeat</td>
                      <td>€20.00</td>
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