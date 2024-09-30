let menuIcon=document.querySelector("#menu-item");
let navbar=document.querySelector(".navbar");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

let sections=document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
  

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           navLinks.forEach.apply(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
           });
        };
    });
  let header = document.querySelector("header");
  header.classList.toggle('sticky',window.scrollY>100);
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');//fa-xmark

}
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
})
ScrollReveal().reveal(".home-content, .heading",{origin: "top"});
ScrollReveal().reveal(".home",{origin: "button"});
ScrollReveal().reveal(".home-contact h1,.about-content,.skills, .edu-content",{origin: "left"});
ScrollReveal().reveal(".home-contact p,.about-img",{origin: "right"});

const typed=new Typed(".multiple-text",{
    strings: ["Frontend Developer","MySQL Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
