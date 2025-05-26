"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Header() {
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
    <header id="header" className={`header sticky-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="d-none d-md-flex align-items-center">
            <i className="bi bi-clock me-1"></i> Monday - Saturday, 8AM to 10PM
          </div>
          <div className="d-flex align-items-center">
            <i className="bi bi-phone me-1"></i> <a href="tel:+155895548855">+1 5589 55488 55</a>
          </div>
        </div>
      </div>

      <div className="branding d-flex align-items-center" style={{paddingTop:"10px"}}>
        <div className="container position-relative d-flex align-items-center justify-content-end">
          <Link href="/" className="logo d-flex align-items-center me-auto">
            <Image src="/logo.png" alt="HealthCare+" width={60} height={60} objectFit="contain" />
            <h1 className="sitename ms-2">Tus Go Deireadh </h1>
          </Link>

          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? "mobile-nav-active" : ""}`}>
            <ul>
              <li>
                <Link href="/" className="active">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/departments">Departments</Link>
              </li>
              <li className="dropdown">
                <Link href="#">
                  <span>More</span> <i className="bi bi-chevron-down toggle-dropdown"></i>
                </Link>
                <ul>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/resources">Resources</Link>
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms">Terms of Service</Link>
                  </li>
                </ul>
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
  )
}
