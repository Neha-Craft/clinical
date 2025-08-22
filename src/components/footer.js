import Link from "next/link"

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container overflow-hidden">
        <div className="footer-top">
          <div style={{
            justifyContent:"center"
          }} className="row gy-4 footer-maintext">
            {/* About */}
            <div className="col-lg-4 col-md-6 footer-about">
              <Link href="/" className="logo d-flex align-items-center">
                <span className="sitename">Tus go Deireadh</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>The Village Medical Centre, Ballinhassig</p>
                <p className="mt-3">
                  <strong>Phone:</strong>{" "}
                  <span className="d-inline-block">0214885706</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="d-inline-block">
                    <a href="mailto:practicemanager@tvmc.ie
">practicemanager@tvmc.ie
</a>{" "}
                    {/* <a href="mailto:kilmoney.clinic@tvmc.ie">Kilmoney</a>{" "}
                    <a href="mailto:greenwood.surgery@tvmc.ie">Greenwood</a> */}
                  </span>
                </p>
              </div>
            </div>

            {/* Useful Links */}


            {/* Opening Hours */}
            <div className="col-lg-4 col-md-6 footer-links">
              <h4>Opening Hours</h4>
              <ul>
                <li>Mon–Fri: 9.00 AM – 5:30 PM</li>
                <li>Saturday: Closed</li>
                <li>Sunday: Closed</li>
                <li>Public Holidays: Closed</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright text-center mt-4">
          <p>
            &copy; {new Date().getFullYear()} The Village Medical Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
