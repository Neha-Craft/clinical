





// "use client"

// import { useState, useEffect } from "react"
// import { usePathname } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"

// const GreenHeader = () => {
//   const pathname = usePathname()
//   const [isMobileNavActive, setIsMobileNavActive] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [hasMounted, setHasMounted] = useState(false)
//   const [isOpen, setIsOpen] = useState(false)
//   const [isClinicDropdownOpen, setIsClinicDropdownOpen] = useState(false)

//   useEffect(() => {
//     setHasMounted(true)

//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     handleScroll()

//     return () => {
//       window.removeEventListener("scroll", handleScroll)
//     }
//   }, [])

//   const toggleMobileNav = () => {
//     setIsMobileNavActive(!isMobileNavActive)
//   }

//   const toggleClinicDropdown = () => {
//     setIsClinicDropdownOpen(!isClinicDropdownOpen)
//   }

//   return (
//     <>
//       <header id="header" className={`header sticky-top ${hasMounted && isScrolled ? "scrolled" : ""}`}>
//         <div className="topbar d-flex align-items-center">
//           <div className="container d-flex ps-3 justify-content-md-between header-item">
//             <div className="d-none d-md-flex align-items-center time-head">
//               <i className="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
//             </div>
//             <div className="d-flex align-items-center head-phone gap-2">
//               <i className="bi bi-telephone-fill me-1"></i>
//               <a href="tel:+0214885706" style={{ color: "#fff" }}>
//                 021-488 5706
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="branding d-flex align-items-center" style={{ paddingTop: "10px" }}>
//           <div className="container position-relative d-flex align-items-center justify-content-end header-doc">
//             <Link href="/" className="logo d-flex align-items-center me-auto">
//               <Image src="/logo.png" alt="HealthCare+" width={60} height={60} style={{ objectFit: "contain" }} />
//               <h1 className="sitename ms-2">Greenwood Surgery</h1>
//             </Link>

//             <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
//               <ul>
//                 <li>
//                   <Link href="/" className={pathname === "/" ? "active" : ""}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="dropdown">
//                   <a 
//                     href="#" 
//                     className={`dropdown-toggle ${
//                       pathname === "/village-medical-center" || 
//                       pathname === "/kilmoney-clinic" || 
//                       pathname === "/greenwood-surgery" 
//                         ? "active" : ""
//                     }`}
//                     onClick={(e) => {
//                       e.preventDefault()
//                       toggleClinicDropdown()
//                     }}
//                   >
//                     Find a Clinic
//                   </a>
//                   <ul className={`dropdown-menu ${isClinicDropdownOpen ? 'show' : ''}`}>
//                     <li>
//                       <Link href="/village-medical-center" className={pathname === "/village-medical-center" ? "active" : ""}>
//                         The Village Medical Centre
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/kilmoney-clinic" className={pathname === "/kilmoney-clinic" ? "active" : ""}>
//                         Kilmoney Clinic
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/greenwood-surgery" className={pathname === "/greenwood-surgery" ? "active" : ""}>
//                         Greenwood Surgery
//                       </Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li>
//                   <Link href="/fees" className={pathname === "/fees" ? "active" : ""}>
//                     Fees
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/appointment" className={pathname === "/appointment" ? "active" : ""}>
//                    Online Service
//                   </Link>
//                 </li>
//                    <li>
//                   <Link href="/contactus" className={pathname === "/contactus" ? "active" : ""}>
//                   Contact Us
//                   </Link>
//                 </li>
//               </ul>
//               <i
//                 className={`mobile-nav-toggle header-bar d-lg-none ${isMobileNavActive ? "bi-x top-open" : "bi-list top-closed"}`}
//                 onClick={toggleMobileNav}
//               ></i>
//             </nav>
//           </div>
//         </div>
//       </header>

//       <style jsx>{`
//         /* Dropdown Styles */
//         .dropdown {
//           position: relative;
//         }

//         .dropdown-toggle {
//           display: flex;
//           align-items: center;
//           text-decoration: none;
//           color: inherit;
//           cursor: pointer;
//         }

//         .dropdown-menu {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: white;
//           min-width: 250px;
//           box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//           border-radius: 8px;
//           opacity: 0;
//           visibility: hidden;
//           transform: translateY(-10px);
//           transition: all 0.3s ease;
//           z-index: 1000;
//           list-style: none;
//           padding: 10px 0;
//           margin: 0;
//         }

//         .dropdown-menu.show {
//           opacity: 1;
//           visibility: visible;
//           transform: translateY(0);
//         }

//         .dropdown-menu li {
//           margin: 0;
//         }

//         .dropdown-menu li a {
//           display: block;
//           padding: 12px 20px;
//           color: #333;
//           text-decoration: none;
//           transition: background-color 0.2s ease;
//           border-bottom: none;
//         }

//         .dropdown-menu li a:hover,
//         .dropdown-menu li a.active {
//           background-color: #f8f9fa;
//           color: #007bff;
//         }

//         /* Desktop hover effect */
//         @media (min-width: 992px) {
//           .dropdown:hover .dropdown-menu {
//             opacity: 1;
//             visibility: visible;
//             transform: translateY(0);
//           }
//         }

//         /* Mobile Navigation Styles */
//         @media (max-width: 991.98px) {
//           .navmenu ul {
//             position: fixed;
//             top: 0;
//             right: -100%;
//             width: 300px;
//             height: 100vh;
//             background: white;
//             transition: right 0.3s ease;
//             z-index: 9999;
//             padding-top: 80px;
//             padding-left: 20px;
//             box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
//             flex-direction: column;
//             margin: 0;
//             list-style: none;
//           }

//           .navmenu.mobile-nav-active ul {
//             right: 0;
//           }

//           .navmenu ul li {
//             margin-bottom: 20px;
//             border-bottom: 1px solid #eee;
//             padding-bottom: 2px;
//           }

//           .navmenu ul li:last-child {
//             border-bottom: none;
//           }

//           /* Mobile dropdown styles */
//           .dropdown-menu {
//             position: static;
//             box-shadow: none;
//             background: #f8f9fa;
//             margin-left: 20px;
//             margin-top: 10px;
//             border-radius: 0;
//             opacity: 1;
//             visibility: visible;
//             transform: none;
//             transition: max-height 0.3s ease;
//             max-height: 0;
//             overflow: hidden;
//           }

//           .dropdown-menu.show {
//             max-height: 300px;
//           }

//           .dropdown-menu li a {
//             padding: 8px 15px;
//             font-size: 14px;
//           }

//           .mobile-nav-toggle {
//             position: fixed;
//             right: 20px;
//             z-index: 10000;
//             font-size: 24px;
//             cursor: pointer;
//             color: #333;
//             transition: top 0.3s ease;
//           }

//           .header-bar.top-closed {
//             top: 0px !important;
//           }

//           .header-bar.top-open {
//             top: 20px !important;
//           }
//         }

//         /* Desktop */
//         @media (min-width: 992px) {
//           .mobile-nav-toggle {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   )
// }

// export default GreenHeader