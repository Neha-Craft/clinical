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
  const [isOpen, setIsOpen] = useState(false)
  const [isClinicDropdownOpen, setIsClinicDropdownOpen] = useState(false)

  const clinicLocations = [
    {
      id: 1,
      name: "The Village Medical Centre",
      image: "/village.jpg?height=80&width=80",
      link: "/village-medical-center/villagehome",
    },
    {
      id: 2,
      name: "Greenwood Surgery",
      image: "/Greenwood.png?height=80&width=80",
      link: "/greenwood-surgery",
    },
    {
      id: 3,
      name: "Kilmoney Clinic",
      image: "/kelo.jpeg?height=80&width=80",
      link: "/kilmoney-clinic/kilomoneyhome",
    },
  ]

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

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!hasMounted) return

    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setIsClinicDropdownOpen(false)
      }
    }

    if (isClinicDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isClinicDropdownOpen, hasMounted])

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
  }

  const toggleClinicDropdown = () => {
    setIsClinicDropdownOpen(!isClinicDropdownOpen)
  }

  // Don't render anything until mounted to prevent hydration mismatch
  if (!hasMounted) {
    return (
      <header id="header" className="header sticky-top">
        <div className="branding d-flex align-items-center" style={{ paddingTop: "10px" }}>
          <div className="container position-relative d-flex align-items-center justify-content-end header-doc">
            <Link href="/" className="logo d-flex align-items-center me-auto">
               <Image
                             src="/logo.png"
                             alt="HealthCare+"
                             width={60}
                             height={60}
                             style={{ objectFit: "contain" }}
                           />
              <h1 className="sitename ms-2">Tus Go Deireadh</h1>
            </Link>

            <nav id="navmenu" className="navmenu">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle">
                    Find a Clinic
                  </a>
                </li>
                <li>
                  <Link href="/Find-a-service">Find a service</Link>
                </li>
                <li>
                  <Link href="/residential">Residential</Link>
                </li>
                <li>
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header id="header" className={`header sticky-top ${isScrolled ? "scrolled" : ""}`}>
        <div className="branding d-flex align-items-center" style={{ paddingTop: "10px",paddingBottom:"10px" }}>
          <div className="container position-relative d-flex align-items-center justify-content-end header-doc">
            <Link href="/" className="logo d-flex align-items-center me-auto">
              <Image src="/logo.jpg" alt="HealthCare+" width={40} height={40} style={{ objectFit: "contain" }} />
              <h1 className="sitename ms-2">Tus Go Deireadh</h1>
            </Link>

            <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
              <ul>
                <li>
                  <Link href="/" className={pathname === "/" ? "active" : ""}>
                    Home
                  </Link>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className={`dropdown-toggle ${
                      pathname === "/village-medical-center" ||
                      pathname === "/kilmoney-clinic" ||
                      pathname === "/greenwood-surgery"
                        ? "active"
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      toggleClinicDropdown()
                    }}
                  >
                    Find a Clinic
                  </a>
                  <div className={`clinic-dropdown-menu ${isClinicDropdownOpen ? "show" : ""}`}>
                    <div className="dropdown-header">
                      <p className="p-drop">Find the best practices for your treatment</p>
                    </div>
                    <div className="clinic-grid">
                      {clinicLocations.map((location) => (
                        <Link href={location.link} key={location.id} passHref legacyBehavior>
                          <a target="_blank" rel="noopener noreferrer" className="header-one">
                            <div
                              className="card clinic-card"
                              style={{
                                display: "flex",
                                width: "100%",
                                flexWrap: "wrap",
                              }}
                            >
                              <div style={{ display: "flex" }}>
                                <div className="clinic-image">
                                  <img
                                    className="dropdown-header-image"
                                    src={location.image || "/placeholder.svg"}
                                    alt={location.name}
                                    onError={(e) => {
                                      console.log(`Failed to load image: ${location.image}`)
                                      e.currentTarget.src = "/placeholder.svg"
                                    }}
                                  />
                                </div>
                                <div className="clinic-info">
                                  <p
                                    style={{
                                      color: "#000",
                                      fontWeight: 700,
                                      margin: "auto",
                                      textAlign: "center",
                                      fontSize: "13px",
                                    }}
                                  >
                                    {location.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="/Find-a-service" className={pathname === "/Find-a-service" ? "active" : ""}>
                    Find a service
                  </Link>
                </li>
                <li>
                  <Link href="/residential" className={pathname === "/residential" ? "active" : ""}>
                    Residential
                  </Link>
                </li>
                <li>
                  <Link href="/contactus" className={pathname === "/contactus" ? "active" : ""}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              
              {/* Fixed hamburger menu button with explicit icons */}
              <div
                className={`mobile-nav-toggle header-bar d-lg-none ${
                  isMobileNavActive ? "mobile-nav-close" : "mobile-nav-open"
                }`}
                onClick={toggleMobileNav}
              >
                {isMobileNavActive ? (
                  // Close icon (X)
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  // Hamburger icon (three lines)
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </nav>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Dropdown Styles */
        .dropdown {
          position: relative;
        }
        .dropdown-toggle {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 250px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 1000;
          list-style: none;
          padding: 10px 0;
          margin: 0;
        }
        .dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-menu li {
          margin: 0;
        }
        .dropdown-menu li a {
          display: block;
          padding: 12px 20px;
          color: #333;
          text-decoration: none;
          transition: background-color 0.2s ease;
          border-bottom: none;
        }
        .dropdown-menu li a:hover,
        .dropdown-menu li a.active {
          background-color: #f8f9fa;
          color: #007bff;
        }

        /* Enhanced Clinic Dropdown Styles - For Desktop (769px and above) */
        .clinic-dropdown-menu {
          position: absolute;
          top: 86px;
          left: -260px;
          background: #f8f9fa;
          width: 49vw !important;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border-radius: 20px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          padding: 35px !important;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .clinic-dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }
        .dropdown-header h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
          max-width: 60%;
        }
        .view-all-link {
          color: #4a90e2;
          text-decoration: none;
          font-weight: 500;
          font-size: 16px;
          white-space: nowrap;
          transition: all 0.2s ease;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(74, 144, 226, 0.1);
        }
        .view-all-link:hover {
          color: #357abd;
          background: rgba(74, 144, 226, 0.15);
          text-decoration: none;
          transform: translateY(-1px);
        }
        .clinic-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 20px;
          width: 100%;
          align-items: stretch;
        }
        .clinic-card {
          width: 67%;
          display: flex;
          flex-direction: row;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          position: relative;
          border: 3px solid rgba(0, 0, 0, 0.05);
        }
        .clinic-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
          text-decoration: none;
          color: inherit;
        }
        .clinic-image {
          width: 120px;
          height: 100px;
          min-width: 105px;
          max-width: 107px;
          overflow: hidden;
          position: relative;
          background: #f8f9fa;
          flex-shrink: 0;
        }
        .clinic-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.3s ease;
        }
        .clinic-card:hover .clinic-image img {
          transform: scale(1.05);
        }
        .clinic-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          text-align: left;
          min-height: 100px;
          max-height: 100px;
          overflow: hidden;
        }
        .clinic-info h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
  
        .navmenu ul {
          width: 448px !important;
        }

        /* Desktop hover effect - only for screens larger than 768px */
        @media (min-width: 769px) {
          .dropdown:hover .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
          .dropdown:hover .clinic-dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }
        }

        /* Responsive adjustments for larger screens */
        @media (max-width: 1200px) and (min-width: 769px) {
          .clinic-dropdown-menu {
            width: 550px;
            left: -200px;
          }
        }

        /* Tablet-specific fixes for screens 769px to 1024px */
        @media (max-width: 1024px) and (min-width: 769px) {
          .clinic-dropdown-menu {
            width: 500px;
            left: -180px;
            padding: 25px;
          }
          
          .clinic-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }
          
          .clinic-card {
            width: 100%;
            height: 90px;
            min-height: 90px;
            max-height: 90px;
          }
          
          .clinic-image {
            width: 100px;
            height: 90px;
            min-width: 100px;
            max-width: 100px;
          }
          
          .clinic-info {
            padding: 15px;
            min-height: 90px;
            max-height: 90px;
          }
          
          .clinic-info p {
            font-size: 14px !important;
          }
          
          .dropdown-header {
            margin-bottom: 20px;
            padding-bottom: 10px;
          }
          
          .dropdown-header .p-drop {
            font-size: 14px;
            color: #666;
            margin: 0;
            font-weight: 500;
          }
        }

        /* Mobile Navigation Styles - 768px and below */
        @media (max-width: 768px) {
          .navmenu ul {
            position: fixed;
            top: 0;
            right: -100%;
            width: 280px;
            height: 100vh;
            background: white;
            transition: right 0.3s ease;
            z-index: 9999;
            padding-top: 60px;
            padding-left: 0px;
            padding-right: 0px;
            box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
            flex-direction: column;
            margin: 0;
            list-style: none;
            overflow-y: auto;
          }
          .navmenu.mobile-nav-active ul {
            right: 0;
          }
          .navmenu ul li {
            margin-bottom: 0px;
            border-bottom: 1px solid #eee;
            padding: 15px 20px;
          }
          .navmenu ul li:last-child {
            border-bottom: none;
          }
          .navmenu ul li a {
            font-size: 16px;
            font-weight: 500;
            color: #333;
            text-decoration: none;
            display: block;
          }

          /* Mobile clinic dropdown styles - Completely redesigned for 768px and below */
          .clinic-dropdown-menu {
            position: static;
            width: 100%;
            background: #f8f9fa;
            box-shadow: none;
            border-radius: 12px;
            border: 1px solid #e0e0e0;
            opacity: 1;
            visibility: visible;
            transform: none;
            transition: max-height 0.4s ease, padding 0.4s ease;
            max-height: 0;
            padding: 0 15px;
            margin: 10px 0 0 0;
            overflow: hidden;
            z-index: 1;
          }
          
          .clinic-dropdown-menu.show {
            max-height: 500px;
            padding: 20px 15px;
          }
          
          .dropdown-header {
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            text-align: center;
          }
          
          .dropdown-header .p-drop {
            font-size: 14px;
            color: #666;
            margin: 0;
            font-weight: 500;
            text-align: center;
          }
          
          .clinic-grid {
            display: flex;
            flex-direction: column;
            gap: 12px;
            width: 100%;
          }
          
          .clinic-card {
            width: 100%;
            height: 80px;
            min-height: 80px;
            max-height: 80px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            border: 1px solid #f0f0f0;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
          }
          
          .clinic-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
            text-decoration: none;
            color: inherit;
          }
          
          .clinic-image {
            width: 70px;
            height: 70px;
            min-width: 70px;
            max-width: 70px;
            margin: 5px;
            border-radius: 8px;
            overflow: hidden;
            background: #f8f9fa;
            flex-shrink: 0;
          }
          
          .clinic-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
          
          .clinic-info {
            flex: 1;
            padding: 15px 15px 15px 10px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            min-height: 80px;
            max-height: 80px;
          }
          
          .clinic-info p {
            font-size: 14px !important;
            font-weight: 600 !important;
            color: #333 !important;
            margin: 0 !important;
            text-align: left !important;
            line-height: 1.3;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }

          /* Mobile nav toggle styles */
          .mobile-nav-toggle {
            position: fixed;
            right: 20px;
            top: 15px;
            z-index: 10000;
            cursor: pointer;
            color: #333;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 4px;
            transition: all 0.3s ease;
          }
          
          .mobile-nav-toggle:hover {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
          }
          
          .mobile-nav-toggle svg {
            width: 20px;
            height: 20px;
            transition: all 0.3s ease;
          }
        }

        /* Extra small mobile devices - 480px and below */
        @media (max-width: 480px) {
          .navmenu ul {
            width: 260px;
          }
          
          .clinic-dropdown-menu {
            margin: 8px 0 0 0;
            border-radius: 10px;
          }
          
          .clinic-dropdown-menu.show {
            padding: 15px 12px;
          }
          
          .clinic-grid {
            gap: 10px;
          }
          
          .clinic-card {
            height: 75px;
            min-height: 75px;
            max-height: 75px;
          }
          
          .clinic-image {
            width: 65px;
            height: 65px;
            min-width: 65px;
            max-width: 65px;
            margin: 5px;
          }
          
          .clinic-info {
            padding: 12px 12px 12px 8px;
            min-height: 75px;
            max-height: 75px;
          }
          
          .clinic-info p {
            font-size: 13px !important;
            line-height: 1.2;
          }
          
          .dropdown-header {
            margin-bottom: 12px;
            padding-bottom: 8px;
          }
          
          .dropdown-header .p-drop {
            font-size: 13px;
          }
          
          .mobile-nav-toggle {
            right: 15px;
            top: 12px;
            width: 28px;
            height: 28px;
          }
          
          .mobile-nav-toggle svg {
            width: 18px;
            height: 18px;
          }
        }

        /* Desktop - hide mobile nav toggle */
        @media (min-width: 769px) {
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default Header