import Link from "next/link"

export default function Footer() {
  return (
    <footer id="footer" className="footer ">
      <div className="container">
        <div className=" footer-top">
          <div className="row gy-4 footer-menu">
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center" >
                <span className="sitename" >The Village Medical Centre</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>TulligMore, Ballinhassig, Cork, T12 D521</p>
                <p>Kilmoney Clinic, Carrigaline, Cork, P43 VY30</p>
                <p>Greenwood Surgery, Togher, Cork</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>021-488 5706 / 021-437 1974 / 021-432 1790</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>
                    <a href="mailto:info@tvmc.ie">info@tvmc.ie</a>
                  </span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">FAQ's</a>
                </li>
                <li>
                  <a href="#">Test Results</a>
                </li>
                <li style={{ whiteSpace: "nowrap" }}>
                  <a href="#">Appointment Scheduling</a>
                </li>
                <li>
                  <a href="#">Patient Resources</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">  General Medicine</a>
                
                  </li>
                <li style={{ whiteSpace: "nowrap" }}>
                   <a href="#">  
                  Minor Procedures & Cryotherapy
                  </a>
                  </li>
                <li style={{ whiteSpace: "nowrap" }}>
                     <a href="#">  
                  Vaccines & Venesection
                  </a>
                  
                  </li>
                <li style={{ whiteSpace: "nowrap" }}>
                     <a href="#">  Men's, Women's & Children's Health
                      </a>
                     </li>
                <li style={{ whiteSpace: "nowrap" }}>
                   <a href="#">
Chronic Disease Management
                   </a>
                  
                  </li>
                <li style={{ whiteSpace: "nowrap" }}>
                       <a href="#">
Medical Reports & Certificates
                       </a>
                  
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

        <div className=" copyright text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} The Village Medical Centre. All rights reserved. <br />
            Privacy policy | Terms of Use
          </p>
        </div>
      </div>
    </footer>
  )
}
