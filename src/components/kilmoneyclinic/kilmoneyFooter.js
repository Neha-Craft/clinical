import Link from "next/link"

export default function KilmoneyFooter() {
  return (
    <footer id="footer" className="footer">
      <div className="container overflow-hidden">
        <div className="footer-top">
          <div className="row gy-4 footer-maintext">
            {/* About */}
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">Kilmoney Clinic</span>
              </Link>
              <div className="footer-contact pt-3">
                {/* <p>Kilmoney Clinic</p> */}
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span className="d-inline-block"> 021-437 1974</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="d-inline-block">
     
                    <a href="mailto:kilmoney.clinic@tvmc.ie">kilmoney.clinic@tvmc.ie</a>{" "}
               
                  </span>
                </p>
              </div>
            </div>

        
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
           
                <li>Test Results</li>
                <li>Appointment Scheduling</li>
                <li>Patient Resources</li>
                <li>Contact Us</li>
              </ul>
            </div>

      
            <div className="col-lg-4 col-md-6 footer-links">
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
            &copy; {new Date().getFullYear()} The Village Medical Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
