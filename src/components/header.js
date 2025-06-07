"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"

const Header = () => {
  const pathname = usePathname()
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
  }

  return (
    <>
      <header id="header" className={`header sticky-top ${hasMounted && isScrolled ? "scrolled" : ""}`}>
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex ps-3 justify-content-md-between header-item">
            <div className="d-none d-md-flex align-items-center time-head">
              <i className="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
            </div>
            <div className="d-flex align-items-center head-phone gap-2">
              <i className="bi bi-telephone-fill me-1"></i>
              <a href="tel:+0214885706" style={{ color: "#fff" }}>
                021-488 5706
              </a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center" style={{ paddingTop: "10px" }}>
          <div className="container position-relative d-flex align-items-center justify-content-end header-doc">
            <Link href="/" className="logo d-flex align-items-center me-auto">
              <Image src="/logo.png" alt="HealthCare+" width={60} height={60} style={{ objectFit: "contain" }} />
              <h1 className="sitename ms-2">Tus Go Deireadh</h1>
            </Link>

            <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
              <ul>
                <li>
                  <Link href="/" className={pathname === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/village-medical-center" className={pathname === "/village-medical-center" ? "active" : ""}>
                    The Village Medical Centre
                  </Link>
                </li>
                <li>
                  <Link href="/kilmoney-clinic" className={pathname === "/kilmoney-clinic" ? "active" : ""}>
                    Kilmoney Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/greenwood-surgery" className={pathname === "/greenwood-surgery" ? "active" : ""}>
                    Greenwood Surgery
                  </Link>
                </li>
                  <li>
                  <Link href="/fees" className={pathname === "/fees" ? "active" : ""}>
                    fees
                  </Link>
                </li>
                   <li>
                  <Link href="/appointment" className={pathname === "/appointment" ? "active" : ""}>
                    Illness Certificate Form
                  </Link>
                </li>
              </ul>
              <i
                className={`mobile-nav-toggle header-bar d-lg-none ${isMobileNavActive ? "bi-x top-open" : "bi-list top-closed"}`}
                onClick={toggleMobileNav}
              ></i>
            </nav>

            {/* <Link href="/appointment" className=" ms-3" style={{whiteSpace:"nowrap"}}>
             Illness Certificate Form
            </Link> */}
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Mobile Navigation Styles */
        @media (max-width: 991.98px) {
          .navmenu ul {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: white;
            transition: right 0.3s ease;
            z-index: 9999;
            padding-top: 80px;
            padding-left: 20px;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            flex-direction: column;
            margin: 0;
            list-style: none;
          }

          .navmenu.mobile-nav-active ul {
            right: 0;
          }

          .navmenu ul li {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 2px;
          }

          .navmenu ul li:last-child {
            border-bottom: none;
          }

          .mobile-nav-toggle {
            position: fixed;
            right: 20px;
            z-index: 10000;
            font-size: 24px;
            cursor: pointer;
            color: #333;
            transition: top 0.3s ease;
          }

          .header-bar.top-closed {
            top: 0px !important;
          }

          .header-bar.top-open {
            top: 20px !important;
          }
        }

        /* Desktop */
        @media (min-width: 992px) {
          .mobile-nav-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Header



