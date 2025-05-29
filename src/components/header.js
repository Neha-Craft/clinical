"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
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
      <header id="header" className={`header sticky-top ${isScrolled ? "scrolled" : ""}`}>
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="d-none d-md-flex align-items-center">
              <i className="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-phone me-1"></i> <a href="tel:+155895548855">021-488 5706</a>
            </div>
          </div>
        </div>

        <div className="branding d-flex align-items-center" style={{ paddingTop: "10px" }}>
          <div className="container position-relative d-flex align-items-center justify-content-end">
            <Link href="/" className="logo d-flex align-items-center me-auto">
              <Image src="/logo.png" alt="HealthCare+" width={60} height={60} objectFit="contain" />
              <h1 className="sitename ms-2">Tus Go Deireadh </h1>
            </Link>

            <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
              <ul>
                <li>
                  <Link href="/" className={pathname === '/' ? 'active' : ''}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={pathname === '/about' ? 'active' : ''}>
                    The Village Medical Centre
                  </Link>
                </li>
                <li>
                  <Link href="/KilmoneyClinic" className={pathname === '/KilmoneyClinic' ? 'active' : ''}>
                    Kilmoney Clinic
                  </Link>
                </li>
                <li>
                  <Link href="/GreenwoodSurgery" className={pathname === '/GreenwoodSurgery' ? 'active' : ''}>
                    Greenwood Surgery
                  </Link>
                </li>
              </ul>
              <i
                className={`mobile-nav-toggle d-xl-none ${isMobileNavActive ? "bi-x" : "bi-list"}`}
                onClick={toggleMobileNav}
              ></i>
            </nav>

            <Link href="/appointment" className="cta-btn ms-3">
              Make an Appointment
            </Link>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Mobile Navigation Styles */
        @media (max-width: 1199.98px) {
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
            box-shadow: -2px 0 5px rgba(0,0,0,0.1);
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
            padding-bottom: 15px;
          }
          
          .navmenu ul li:last-child {
            border-bottom: none;
          }
          
          .mobile-nav-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            font-size: 24px;
            cursor: pointer;
            color: #333;
          }
        }
        
        @media (min-width: 1200px) {
          .mobile-nav-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  )
}



// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState, useEffect } from "react"

// export default function Header() {
//   const [isMobileNavActive, setIsMobileNavActive] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)

//   useEffect(() => {
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

//   return (
//     <>
//       <header id="header" className={`header sticky-top ${isScrolled ? "scrolled" : ""}`}>
//         <div className="topbar d-flex align-items-center">
//           <div className="container d-flex justify-content-center justify-content-md-between">
//             <div className="d-none d-md-flex align-items-center">
//               <i className="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
//             </div>
//             <div className="d-flex align-items-center">
//               <i className="bi bi-phone me-1"></i> <a href="tel:+155895548855">021-488 5706</a>
//             </div>
//           </div>
//         </div>

//         <div className="branding d-flex align-items-center" style={{ paddingTop: "10px" }}>
//           <div className="container position-relative d-flex align-items-center justify-content-end">
//             <Link href="/" className="logo d-flex align-items-center me-auto">
//               <Image src="/logo.png" alt="HealthCare+" width={60} height={60} objectFit="contain" />
//               <h1 className="sitename ms-2">Tus Go Deireadh </h1>
//             </Link>

//             <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
//               <ul>
//                 <li>
//                   <Link href="/" className="active">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="/about">The Village Medical Centre</Link>
//                 </li>
//                 <li>
//                   <Link href="/KilmoneyClinic">Kilmoney Clinic</Link>
//                 </li>
//                 <li>
//                   <Link href="/GreenwoodSurgery">Greenwood Surgery</Link>
//                 </li>
//               </ul>
//               <i
//                 className={`mobile-nav-toggle d-xl-none ${isMobileNavActive ? "bi-x" : "bi-list"}`}
//                 onClick={toggleMobileNav}
//               ></i>
//             </nav>

//             <Link href="/appointment" className="cta-btn ms-3">
//               Make an Appointment
//             </Link>
//           </div>
//         </div>
//       </header>

//       <style jsx>{`
//         /* Mobile Navigation Styles */
//         @media (max-width: 1199.98px) {
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
//             box-shadow: -2px 0 5px rgba(0,0,0,0.1);
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
//             padding-bottom: 15px;
//           }
          
//           .navmenu ul li:last-child {
//             border-bottom: none;
//           }
          
//           .mobile-nav-toggle {
//             position: fixed;
//             top: 20px;
//             right: 20px;
//             z-index: 10000;
//             font-size: 24px;
//             cursor: pointer;
//             color: #333;
//           }
//         }
        
//         @media (min-width: 1200px) {
//           .mobile-nav-toggle {
//             display: none;
//           }
//         }
//       `}</style>
//     </>
//   )
// }
