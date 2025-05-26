/**
 * Template Name: Medicio
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

;(() => {
  // Wait for document ready
  document.addEventListener("DOMContentLoaded", () => {
    // Declare variables before using them
    const AOS = window.AOS
    const GLightbox = window.GLightbox
    const PureCounter = window.PureCounter
    const Swiper = window.Swiper

    /**
     * Apply .scrolled class to the body as the page is scrolled down
     */
    function toggleScrolled() {
      const selectBody = document.querySelector("body")
      const selectHeader = document.querySelector("#header")
      if (
        !selectHeader ||
        (!selectHeader.classList.contains("scroll-up-sticky") &&
          !selectHeader.classList.contains("sticky-top") &&
          !selectHeader.classList.contains("fixed-top"))
      )
        return
      window.scrollY > 100 ? selectBody.classList.add("scrolled") : selectBody.classList.remove("scrolled")
    }

    document.addEventListener("scroll", toggleScrolled)
    window.addEventListener("load", toggleScrolled)

    /**
     * Mobile nav toggle
     */
    const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle")

    function mobileNavToogle() {
      document.querySelector("body").classList.toggle("mobile-nav-active")
      mobileNavToggleBtn.classList.toggle("bi-list")
      mobileNavToggleBtn.classList.toggle("bi-x")
    }

    if (mobileNavToggleBtn) {
      mobileNavToggleBtn.addEventListener("click", mobileNavToogle)
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll("#navmenu a").forEach((navmenu) => {
      navmenu.addEventListener("click", () => {
        if (document.querySelector(".mobile-nav-active")) {
          mobileNavToogle()
        }
      })
    })

    /**
     * Toggle mobile nav dropdowns
     */
    document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
      navmenu.addEventListener("click", function (e) {
        e.preventDefault()
        this.parentNode.classList.toggle("active")
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active")
        e.stopImmediatePropagation()
      })
    })

    /**
     * Preloader
     */
    const preloader = document.querySelector("#preloader")
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove()
      })
    }

    /**
     * Scroll top button
     */
    const scrollTop = document.querySelector(".scroll-top")

    function toggleScrollTop() {
      if (scrollTop) {
        window.scrollY > 100 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active")
      }
    }

    if (scrollTop) {
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }

    window.addEventListener("load", toggleScrollTop)
    document.addEventListener("scroll", toggleScrollTop)

    /**
     * Animation on scroll function and init
     */
    function aosInit() {
      if (AOS) {
        AOS.init({
          duration: 600,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        })
      }
    }
    window.addEventListener("load", aosInit)

    /**
     * Auto generate the carousel indicators
     */
    document.querySelectorAll(".carousel-indicators").forEach((carouselIndicator) => {
      if (carouselIndicator.closest(".carousel")) {
        carouselIndicator
          .closest(".carousel")
          .querySelectorAll(".carousel-item")
          .forEach((carouselItem, index) => {
            if (index === 0) {
              carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest(".carousel").id}" data-bs-slide-to="${index}" class="active"></li>`
            } else {
              carouselIndicator.innerHTML += `<li data-bs-target="#${carouselIndicator.closest(".carousel").id}" data-bs-slide-to="${index}"></li>`
            }
          })
      }
    })

    /**
     * Initiate glightbox
     */
    if (GLightbox) {
      const glightbox = GLightbox({
        selector: ".glightbox",
      })
    }

    /**
     * Initiate Pure Counter
     */
    if (PureCounter) {
      new PureCounter()
    }

    /**
     * Frequently Asked Questions Toggle
     */
    document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle").forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active")
      })
    })

    /**
     * Correct scrolling position upon page load for URLs containing hash links.
     */
    window.addEventListener("load", (e) => {
      if (window.location.hash) {
        if (document.querySelector(window.location.hash)) {
          setTimeout(() => {
            const section = document.querySelector(window.location.hash)
            const scrollMarginTop = getComputedStyle(section).scrollMarginTop
            window.scrollTo({
              top: section.offsetTop - Number.parseInt(scrollMarginTop),
              behavior: "smooth",
            })
          }, 100)
        }
      }
    })

    /**
     * Navmenu Scrollspy
     */
    const navmenulinks = document.querySelectorAll(".navmenu a")

    function navmenuScrollspy() {
      navmenulinks.forEach((navmenulink) => {
        if (!navmenulink.hash) return
        const section = document.querySelector(navmenulink.hash)
        if (!section) return
        const position = window.scrollY + 200
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          document.querySelectorAll(".navmenu a.active").forEach((link) => link.classList.remove("active"))
          navmenulink.classList.add("active")
        } else {
          navmenulink.classList.remove("active")
        }
      })
    }

    window.addEventListener("load", navmenuScrollspy)
    document.addEventListener("scroll", navmenuScrollspy)

    /**
     * Init swiper sliders
     */
    function initSwiper() {
      if (Swiper) {
        document.querySelectorAll(".swiper").forEach((swiperElement) => {
          new Swiper(swiperElement, {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            },
          })
        })
      }
    }

    window.addEventListener("load", initSwiper)
  })
})()
