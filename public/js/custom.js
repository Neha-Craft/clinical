/**
 * Custom JS for Medicio template
 */

;(() => {
  // Wait for jQuery to be loaded
  document.addEventListener("DOMContentLoaded", () => {
    if (window.jQuery) {
      const $ = window.jQuery

      // Header scroll effect
      function setHeader() {
        if ($(window).scrollTop() > 100) {
          $(".header").addClass("scrolled")
        } else {
          $(".header").removeClass("scrolled")
        }
      }

      // Initialize header state
      setHeader()

      // Update header on scroll
      $(window).on("resize", () => {
        setHeader()
      })

      $(document).on("scroll", () => {
        setHeader()
      })

      // Mobile menu functionality
      function initMenu() {
        if ($(".hamburger").length) {
          const hamb = $(".hamburger")

          hamb.on("click", (event) => {
            event.stopPropagation()

            if (!window.menuActive) {
              openMenu()

              $(document).one("click", function cls(e) {
                if ($(e.target).hasClass("menu_mm")) {
                  $(document).one("click", cls)
                } else {
                  closeMenu()
                }
              })
            } else {
              $(".menu_container").removeClass("active")
              window.menuActive = false
            }
          })
        }
      }

      function openMenu() {
        const fs = $(".menu_container")
        fs.addClass("active")
        window.hambActive = true
        window.menuActive = true
      }

      function closeMenu() {
        const fs = $(".menu_container")
        fs.removeClass("active")
        window.hambActive = false
        window.menuActive = false
      }

      // Initialize menu
      initMenu()

      // Initialize SVG replacement
      function initSvg() {
        $("img.svg").each(function () {
          const $img = $(this)
          const imgID = $img.attr("id")
          const imgClass = $img.attr("class")
          const imgURL = $img.attr("src")

          $.get(
            imgURL,
            (data) => {
              // Get the SVG tag, ignore the rest
              let $svg = $(data).find("svg")

              // Add replaced image's ID to the new SVG
              if (typeof imgID !== "undefined") {
                $svg = $svg.attr("id", imgID)
              }

              // Add replaced image's classes to the new SVG
              if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg")
              }

              // Remove any invalid XML tags
              $svg = $svg.removeAttr("xmlns:a")

              // Replace image with new SVG
              $img.replaceWith($svg)
            },
            "xml",
          )
        })
      }

      // Initialize SVG
      initSvg()

      // Home slider initialization (if exists)
      if ($(".home_slider").length) {
        const homeSlider = $(".home_slider")

        if (homeSlider.hasClass("owl-carousel")) {
          homeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            autoplayTimeout: 10000,
            nav: false,
            dots: false,
            smartSpeed: 1200,
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar,
          })

          function startProgressBar() {
            if ($(".home_slider_progress").length) {
              $(".home_slider_progress").css({ width: "100%", transition: "width 8500ms" })
            }
          }

          function resetProgressBar() {
            if ($(".home_slider_progress").length) {
              $(".home_slider_progress").css({ width: "0", transition: "width 0s" })
            }
          }
        }
      }
    }
  })
})()
