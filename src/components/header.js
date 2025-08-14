"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClinicDropdownOpen, setIsClinicDropdownOpen] = useState(false);

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
  ];

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!hasMounted) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsClinicDropdownOpen(false);
      }
    };

    if (isClinicDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClinicDropdownOpen, hasMounted]);

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  const toggleClinicDropdown = () => {
    setIsClinicDropdownOpen(!isClinicDropdownOpen);
  };

  const handleMenuItemClick = () => {
    setIsMobileNavActive(false);
    setIsClinicDropdownOpen(false);
  };
  if (!hasMounted) {
    return (
      <header id="header" className="header sticky-top">
        <div
          className="branding d-flex align-items-center"
          style={{ paddingTop: "10px" }}
        >
          <div className="container position-relative d-flex align-items-center justify-content-end header-doc">
            <Link href="/" className="logo d-flex align-items-center me-auto">
              <Image
                src="/logo.png"
                alt="HealthCare+"
                width={70}
                height={70}
                style={{ 
                  objectFit: "contain",
                  width: "70px",
                  height: "70px"
                }}
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
    );
  }

  return (
    <>
      <header
        id="header"
        className={`header sticky-top ${isScrolled ? "scrolled" : ""}`}
      >
    

        <div
          className="branding d-flex align-items-center"
          style={{ paddingTop: "10px", paddingBottom: "10px" }}
        >
          <div className="container position-relative d-flex align-items-center justify-content-end header-doc">
            <Link href="/" className="logo d-flex align-items-center me-auto">
              <Image
                src="/logo.png"
                alt="HealthCare+"
                width={60}
                height={60}
                style={{ 
                  objectFit: "contain",
                  width: "60px",
                  height: "60px"
                }}
              />
              <h1 className="sitename ms-2">Tus Go Deireadh</h1>
            </Link>

            <nav
              id="navmenu"
              className={`navmenu ${
                isMobileNavActive ? "mobile-nav-active" : ""
              }`}
            >
              <ul>
                <li>
                  <Link href="/" className={pathname === "/" ? "active" : ""} onClick={handleMenuItemClick}>
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
                      e.preventDefault();
                      toggleClinicDropdown();
                    }}
                  >
                    Find a Clinic
                  </a>
                  <div
                    className={`clinic-dropdown-menu ${
                      isClinicDropdownOpen ? "show" : ""
                    }`}
                  >
                    <div className="dropdown-header">
                      <p className="p-drop">
                        Find the best practices for your treatment
                      </p>
                    </div>
                    <div className="clinic-grid">
                      {clinicLocations.map((location) => (
                        <Link
                          href={location.link}
                          key={location.id}
                          passHref
                          legacyBehavior
                          onClick={handleMenuItemClick}
                        >
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="header-one"
                          >
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
                                      console.log(
                                        `Failed to load image: ${location.image}`
                                      );
                                      e.currentTarget.src = "/placeholder.svg";
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
                  <Link
                    href="/Find-a-service"
                    className={pathname === "/Find-a-service" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                    Find a service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/residential"
                    className={pathname === "/residential" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                    Residential
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contactus"
                    className={pathname === "/contactus" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <button
                className={`mobile-nav-toggle header-bar d-lg-none ${
                  isMobileNavActive ? "top-open" : "top-closed"
                }`}
                onClick={toggleMobileNav}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  cursor: 'pointer',
                  color: '#000',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '30px',
                  height: '30px',
                  position: 'fixed',
                  right: '20px',
                  top: '15px',
                  zIndex: 10000
                }}
              >
                {isMobileNavActive ? '✕' : '☰'}
              </button>
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

        /* Enhanced Clinic Dropdown Styles - Matching Centric Health Design */
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

        /* Desktop hover effect - only for screens larger than 1024px */
        @media (min-width: 1025px) {
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

        /* Responsive adjustments for tablets (1024px and below) */
        @media (max-width: 1200px) {
          .clinic-dropdown-menu {
            width: 550px;
            left: -200px;
          }
        }

        /* Tablet-specific fixes for 1024px and below */
        @media (max-width: 1024px) {
          .clinic-dropdown-menu {
            width: 500px;
            left: -180px;
            padding: 25px;
            position: absolute;
            background: #f8f9fa;
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 1000;
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

        /* Medium tablets */
        @media (max-width: 768px) {
          .clinic-dropdown-menu {
            width: 100% !important;
            left: -150px;
          }
          .clinic-dropdown-menu.show {
            width: 100% !important;
          }
        }

        /* Small tablets */
        @media (max-width: 640px) {
          .clinic-dropdown-menu {
            width: 350px;
            left: -120px;
          }
        }

        /* Mobile Navigation Styles */
        @media (max-width: 991.98px) {
          .navmenu ul {
            position: fixed;
            top: 0;
            right: -117%;
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

          /* Mobile clinic dropdown styles */
          .clinic-dropdown-menu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            margin-left: 0px;
            margin-top: 10px;
            border-radius: 12px;
            opacity: 1;
            visibility: visible;
            transform: none;
            transition: max-height 0.3s ease;
            max-height: 0;
            width: calc(100% - 40px);
            padding: 0;
            border: none;
            overflow: hidden;
          }
          .clinic-dropdown-menu.show {
            max-height: 600px;
            padding: 15px;
          }
          .clinic-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .clinic-card {
            height: 80px;
            min-height: 80px;
            max-height: 80px;
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
            border-radius: 8px;
            padding: 0;
            width: 100%;
          }
          .clinic-image {
            width: 80px;
            height: 80px;
            min-width: 80px;
            max-width: 80px;
            flex-shrink: 0;
            border-radius: 8px 0 0 8px;
          }
          .clinic-info {
            padding: 15px;
            height: auto;
            flex: 1;
            justify-content: center;
            min-height: 80px;
            max-height: 80px;
            display: flex;
            align-items: center;
          }
          .clinic-info p {
            font-size: 12px !important;
            font-weight: 600 !important;
            color: #333 !important;
            margin: 0 !important;
            text-align: left !important;
            line-height: 1.3;
          }
          .dropdown-header {
            margin-bottom: 15px;
            padding-bottom: 10px;
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          }
          .dropdown-header .p-drop {
            font-size: 13px;
            color: #666;
            margin: 0;
            font-weight: 500;
          }
        }

          /* Mobile dropdown styles */
          .dropdown-menu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
            margin-left: 20px;
            margin-top: 10px;
            border-radius: 0;
            opacity: 1;
            visibility: visible;
            transform: none;
            transition: max-height 0.3s ease;
            max-height: 0;
          }
          .dropdown-menu.show {
            max-height: 300px;
          }
          .dropdown-menu li a {
            padding: 8px 15px;
            font-size: 14px;
          }
          .mobile-nav-toggle {
            position: fixed;
            right: 20px;
            z-index: 10000;
            font-size: 24px;
            cursor: pointer;
            color: #000;
            transition: top 0.3s ease;
          }
          .header-bar.top-closed {
            top: 15px !important;
          }
          .header-bar.top-open {
            top: 20px !important;
          }
        }

        /* Extra small mobile devices - 425px and below */
        @media (max-width: 425px) {
          .navmenu ul {
            width: 260px;
          }
          
          .clinic-dropdown-menu {
            width: calc(100% - 30px);
            margin-left: 0px;
            margin-right: 0px;
            padding: 0;
            border: none !important;
            box-shadow: none !important;
          }
          
          .clinic-dropdown-menu.show {
            padding: 12px;
            border: none !important;
          }
          
          .clinic-grid {
            gap: 10px;
          }
          
          .clinic-card {
            height: 70px;
            min-height: 70px;
            max-height: 70px;
            border: none !important;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
          }
          
          .clinic-image {
            width: 70px;
            height: 70px;
            min-width: 70px;
            max-width: 70px;
            border-radius: 8px 0 0 8px;
          }
          
          .clinic-info {
            padding: 10px;
            min-height: 70px;
            max-height: 70px;
          }
          
          .clinic-info p {
            font-size: 11px !important;
            line-height: 1.2;
          }
          
          .dropdown-header {
            margin-bottom: 12px;
            padding-bottom: 8px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          }
          
          .dropdown-header .p-drop {
            font-size: 12px;
          }
        }

          /* Mobile dropdown styles */
          .dropdown-menu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
            margin-left: 20px;
            margin-top: 10px;
            border-radius: 0;
            opacity: 1;
            visibility: visible;
            transform: none;
            transition: max-height 0.3s ease;
            max-height: 0;
          }
          .dropdown-menu.show {
            max-height: 300px;
          }
          .dropdown-menu li a {
            padding: 8px 15px;
            font-size: 14px;
          }
          .mobile-nav-toggle {
            position: fixed;
            right: 20px;
            z-index: 10000;
            font-size: 24px;
            cursor: pointer;
            color: #000;
            transition: top 0.3s ease;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-bar.top-closed {
            top: 15px !important;
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
  );
};

export default Header;