import feather from "feather-icons"

document.addEventListener("DOMContentLoaded", (event) => {
  // Initialize Feather icons
  feather.replace()

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Theme toggler
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const icon = themeToggle.querySelector("i")

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode")
    if (body.classList.contains("dark-mode")) {
      icon.setAttribute("data-feather", "sun")
    } else {
      icon.setAttribute("data-feather", "moon")
    }
    feather.replace()
  })

  // Add animation to timeline items
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.style.opacity = 0
    item.style.transform = "translateY(20px)"
    item.style.transition = "opacity 0.5s, transform 0.5s"
    observer.observe(item)
  })
})

