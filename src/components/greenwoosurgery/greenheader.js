

"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useScroll } from "@/components/scrollContext";

const Kilmoneyheader = () => {
  const pathname = usePathname();
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isClinicDropdownOpen, setIsClinicDropdownOpen] = useState(false);
  const { scrollTo } = useScroll();

 

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

  return (
    <>
      <header
        id="header"
        className={`header sticky-top ${
          hasMounted && isScrolled ? "scrolled" : ""
        }`}
      >
   
        <div
          className="branding d-flex align-items-center"
          style={{ paddingTop: "10px" }}
        >
          <div className="container position-relative d-flex align-items-center justify-content-end header-doc" style={{
            marginBottom:"10px"
          }}>
            <Link href="/greenwood-surgery" className="logo d-flex align-items-center me-auto">
              <Image
                src="/logo.png"
                alt="HealthCare+"
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
              <h1 className="sitename ms-2">Greenwood Surgery</h1>
            </Link>

            <nav
              id="navmenu"
              className={`navmenu ${
                isMobileNavActive ? "mobile-nav-active" : ""
              }`}
            >
              <ul>
                <li>
                  <Link href="/greenwood-surgery" className={pathname === "/greenwood-surgery" ? "active" : ""} onClick={handleMenuItemClick}>
                    Home
                  </Link>
                </li>
                   <li>
               <Link
                    href="/greenwood-surgery/our-team"
                    className={pathname === "/kilmoney-clinic/our-team" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                   Our Team
                  </Link>
                </li>
          
               
                    <li>
               <Link
                  href="/greenwood-surgery/services"
            
                    className={pathname === "/greenwood-surgery/services" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                    Services
                  
                  </Link>
                </li>
                
                   <li>
               <Link
                  href="/greenwood-surgery/online-services"
            
                    className={pathname === "/greenwood-surgery/online-services" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                    Online Services
                  
                  </Link>
                </li>
                
           
                <li>
                  <Link
                    href="/greenwood-surgery/contactus"
                    className={pathname === "/greenwood-surgery/contactus" ? "active" : ""}
                    onClick={handleMenuItemClick}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              <i
                className={`mobile-nav-toggle header-bar d-lg-none ${
                  isMobileNavActive ? "bi-x top-open" : "bi-list top-closed"
                }`}
                onClick={toggleMobileNav}
              ></i>
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
          top: 71px;
          left: -287px;
          background: #f8f9fa;

          max-width: 90vw;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          border-radius: 20px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-20px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1000;
          padding: 35px;
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
          padding-bottom: 20px;
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
          // height: 100px;
          // min-height: 100px;
          // max-height: 100px;
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
          min-width: 120px;
          max-width: 120px;
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

        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .clinic-dropdown-menu {
            width: 550px;
            left: -200px;
          }
        }

        @media (max-width: 1024px) {
          .clinic-dropdown-menu {
            width: 450px;
            left: -150px;
          }

          .clinic-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .clinic-card {
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

          .clinic-info h4 {
            font-size: 15px;
          }
        }

        /* Desktop hover effect */
        @media (min-width: 992px) {
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

          /* Mobile clinic dropdown styles */
          .clinic-dropdown-menu {
            position: static;
            box-shadow: none;
            background: #f8f9fa;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            margin-left: 20px;
            margin-top: 10px;
            border-radius: 12px;
            opacity: 1;
            visibility: visible;
            transform: none;
            transition: max-height 0.3s ease;
            max-height: 0;
            width: auto;
            padding: 0;
            border: none;
          }

          .clinic-dropdown-menu.show {
            max-height: 800px;
            padding: 20px;
          }

          .clinic-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .clinic-card {
            height: 100px;
            min-height: 100px;
            max-height: 100px;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: row;
            border-radius: 12px;
            padding: 0;
          }

          .clinic-card::before {
            display: none;
          }

          .clinic-image {
            width: 90px;
            height: 100px;
            min-width: 90px;
            max-width: 90px;
            flex-shrink: 0;
            border-radius: 12px 0 0 12px;
          }

          .clinic-info {
            padding: 20px;
            height: auto;
            flex: 1;
            justify-content: center;
            min-height: 100px;
            max-height: 100px;
            flex-wrap: wrap;
          }

          .clinic-info h4 {
            font-size: 14px;
            margin-bottom: 0;
          }

          .dropdown-header {
            margin-bottom: 20px;
            padding-bottom: 15px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .dropdown-header h3 {
            font-size: 18px;
            max-width: none;
          }

          .view-all-link {
            font-size: 14px;
            padding: 6px 12px;
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
            top: 20px !important;
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

export default Kilmoneyheader;








