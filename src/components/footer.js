import Link from "next/link"

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container overflow-hidden">
        <div className="footer-top">
          <div className="row gy-4 footer-maintext">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">The Village Medical Centre</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>TulligMore, Ballinhassig, Cork, T12 D521</p>
                <p>Kilmoney Clinic, Carrigaline, Cork, P43 VY30</p>
                <p>Greenwood Surgery, Togher, Cork</p>
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span className="d-inline-block">021-488 5706 / 021-437 1974 / 021-432 1790</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="d-inline-block">
                    <a href="mailto:ballinhassig.clinic@tvmc.ie">Ballinhassig</a> 
                    <a href="mailto:kilmoney.clinic@tvmc.ie">Kilmoney</a> 
                    <a href="mailto:greenwood.surgery@tvmc.ie">Greenwood</a>
                  </span>
                </p>
              </div>
          
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  FAQ's
                </li>
                <li>
                  Test Results
                </li>
                <li>
                  Appointment Scheduling
                </li>
                <li>
                  Patient Resources
                </li>
                <li>
                  Contact Us
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  General Medicine
                </li>
                <li>
                  Minor Procedures & Cryotherapy
                </li>
                <li>
                  Vaccines & Venesection
                </li>
                <li>
                  Men's, Women's & Children's Health
                </li>
                <li>
                Chronic Disease Management
                </li>
                <li>
                  Medical Reports & Certificates
                  {/* <a href="#">Medical Reports & Certificates</a> */}
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Opening Hours</h4>
              <ul>
                <li>Mon–Fri: 8:00 AM – 6:00 PM</li>
                <li>Saturday: 9:00 AM – 1:00 PM</li>
                <li>Sunday: Closed</li>
                <li>Public Holidays: Closed</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} The Village Medical Centre. All rights reserved. <br />
            Privacy policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  )
}



