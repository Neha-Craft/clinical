/**
 * Elements JS for Medicio template
 */

;(() => {
  // Wait for jQuery to be loaded
  document.addEventListener("DOMContentLoaded", () => {
    if (window.jQuery) {
      const $ = window.jQuery
      const ScrollMagic = window.ScrollMagic
      const TweenMax = window.TweenMax
      const Circ = window.Circ
      const ProgressBar = window.ProgressBar

      // Initialize accordions
      function initAccordions() {
        if ($(".accordion").length) {
          const accs = $(".accordion")

          accs.each(function () {
            const acc = $(this)

            if (acc.hasClass("active")) {
              const panel = $(acc.next())

              if (panel.css("max-height") == "0px") {
                panel.css("max-height", panel.prop("scrollHeight") + "px")
              } else {
                panel.css("max-height", "0px")
              }
            }

            acc.on("click", () => {
              if (acc.hasClass("active")) {
                acc.removeClass("active")
                const panel = $(acc.next())

                if (panel.css("max-height") == "0px") {
                  panel.css("max-height", panel.prop("scrollHeight") + "px")
                } else {
                  panel.css("max-height", "0px")
                }
              } else {
                acc.addClass("active")
                const panel = $(acc.next())

                if (panel.css("max-height") == "0px") {
                  panel.css("max-height", panel.prop("scrollHeight") + "px")
                } else {
                  panel.css("max-height", "0px")
                }
              }
            })
          })
        }
      }

      // Initialize tabs
      function initTabs() {
        if ($(".tab").length) {
          $(".tab").on("click", function () {
            $(".tab").removeClass("active")
            $(this).addClass("active")
            const clickedIndex = $(".tab").index(this)

            const panels = $(".tab_panel")
            panels.removeClass("active")
            $(panels[clickedIndex]).addClass("active")
          })
        }
      }

      // Initialize milestones
      function initMilestones() {
        if ($(".milestone_counter").length && ScrollMagic && TweenMax) {
          const milestoneItems = $(".milestone_counter")
          const ctrl = new ScrollMagic.Controller()

          milestoneItems.each(function (i) {
            const ele = $(this)
            const endValue = ele.data("end-value")
            const eleValue = ele.text()

            // Use data-sign-before and data-sign-after to add signs
            // infront or behind the counter number
            let signBefore = ""
            let signAfter = ""

            if (ele.attr("data-sign-before")) {
              signBefore = ele.attr("data-sign-before")
            }

            if (ele.attr("data-sign-after")) {
              signAfter = ele.attr("data-sign-after")
            }

            const milestoneScene = new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: "onEnter",
              reverse: false,
            })
              .on("start", () => {
                const counter = { value: eleValue }
                const counterTween = TweenMax.to(counter, 4, {
                  value: endValue,
                  roundProps: "value",
                  ease: Circ.easeOut,
                  onUpdate: () => {
                    document.getElementsByClassName("milestone_counter")[i].innerHTML =
                      signBefore + counter.value + signAfter
                  },
                })
              })
              .addTo(ctrl)
          })
        }
      }

      // Initialize loaders
      function initLoaders() {
        if ($(".loader").length && ScrollMagic && ProgressBar) {
          const loaders = $(".loader")
          const ctrl = new ScrollMagic.Controller()

          loaders.each(function () {
            
            const endValue = $(this).data("perc")

            const loaderScene = new ScrollMagic.Scene({
              triggerElement: this,
              triggerHook: "onEnter",
              reverse: false,
            })
              .on("start", () => {
                const bar = new ProgressBar.Circle(this, {
                  color: "#20d34a",
                  strokeWidth: 3,
                  trailWidth: 0,
                  trailColor: "transparent",
                  easing: "easeInOut",
                  duration: 1400,
                  text: {
                    autoStyleContainer: false,
                  },
                  from: { color: "#20d34a", width: 3 },
                  to: { color: "#20d34a", width: 3 },
                  step: (state, circle) => {
                    circle.path.setAttribute("stroke", state.color)
                    circle.path.setAttribute("stroke-width", state.width)

                    const value = Math.round(circle.value() * 100)
                    if (value === 0) {
                      circle.setText("0%")
                    } else {
                      circle.setText(value + "%")
                    }
                  },
                })

                bar.text.style.fontFamily = '"Roboto", sans-serif'
                bar.text.style.fontSize = "30px"
                bar.text.style.fontWeight = "500"
                bar.text.style.color = "#232323"

                bar.animate(endValue) // Number from 0.0 to 1.0
              })
              .addTo(ctrl)
          })
        }
      }

      // Initialize all components
      initAccordions()
      initTabs()
      initMilestones()
      initLoaders()
    }
  })
})()
