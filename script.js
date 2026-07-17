let menuIcon = document.querySelector("#menu-item");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark')
  navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');

        const activeLink = document.querySelector(`header nav a[href*='${id}']`);
        if (activeLink) activeLink.classList.add('active');
      });

    };
  });
  let header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 100);
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');//fa-xmark

}
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
})
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home", { origin: "button" });
ScrollReveal().reveal(".home-contact h1,.about-content,.skills, .edu-content", { origin: "left" });
ScrollReveal().reveal(".home-contact p,.about-img", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["MERN Stack Developer", "Frontend Developer", "React JS Developer", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});


// ================================
// Skills Progress Bar Animation
// ================================

const skillsSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".skill-per");

let animated = false;

function animateSkills() {

    if (animated) return;

    const sectionTop = skillsSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;

    if (sectionTop < triggerPoint) {

        progressBars.forEach((bar) => {

            const width = bar.style.width || window.getComputedStyle(bar).width;

            // Save the final width
            const finalWidth = bar.classList.contains("html") ? "90%" :
                               bar.classList.contains("css") ? "85%" :
                               bar.classList.contains("javascript") ? "85%" :
                               bar.classList.contains("react") ? "80%" :
                               bar.classList.contains("bootstrap") ? "85%" :
                               bar.classList.contains("node") ? "70%" :
                               bar.classList.contains("express") ? "70%" :
                               bar.classList.contains("mongo") ? "70%" :
                               bar.classList.contains("mysql") ? "80%" :
                               bar.classList.contains("git") ? "75%" :
                               bar.classList.contains("powerbi") ? "70%" :
                               bar.classList.contains("problem") ? "85%" :
                               bar.classList.contains("team") ? "90%" :
                               bar.classList.contains("adaptability") ? "85%" :
                               "0%";

            bar.style.width = "0";

            setTimeout(() => {
                bar.style.transition = "width 1.5s ease";
                bar.style.width = finalWidth;
            }, 100);

        });

        animated = true;

    }

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);




// certification

const certCards = document.getElementById('certCards');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const scrollAmount = 320;


nextBtn.addEventListener('click', () => {
  certCards.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});


prevBtn.addEventListener('click', () => {
  certCards.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});


function updateButtons() {
  const scrollLeft = certCards.scrollLeft;
  const maxScroll = certCards.scrollWidth - certCards.clientWidth;


  if (scrollLeft <= 0) {
    prevBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
  }


  if (scrollLeft >= maxScroll - 1) {
    nextBtn.style.display = 'none';
  } else {
    nextBtn.style.display = 'block';
  }
}

certCards.addEventListener('scroll', updateButtons);

updateButtons();





//contact
const form = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            successMessage.style.display = "block";
            successMessage.innerHTML =
                "✅ Thank you for contacting me! Your message has been sent successfully. I'll get back to you soon.";

            form.reset();

            setTimeout(() => {
                successMessage.style.display = "none";
            }, 5000);

        } else {
            alert("Failed to send message. Please try again.");
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    }
});