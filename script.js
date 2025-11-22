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
  strings: ["MERN Stack Developer", "Backend Developer", "React JS Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});



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




