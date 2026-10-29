// SMOOTH SCROLL
document.querySelectorAll('nav a').forEach(link=>{
  link.addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
    document.querySelector('.nav-links').classList.remove('open');
    const icon=document.querySelector('.menu-btn i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
    document.querySelector('.menu-btn').setAttribute('aria-expanded','false');
  });
});

// HAMBURGER MENU
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = menuBtn.querySelector("i");
const nav = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-times", isOpen);

    menuBtn.setAttribute("aria-expanded", isOpen);
});

// Close menu when a navigation link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// FADE-IN ON SCROLL
const revealElements=document.querySelectorAll(".section,.hero-content,.skill-card,.project-card,.service-card,.testimonial-card,.about-card");
const fadeInOnScroll=()=>{revealElements.forEach(el=>{const rect=el.getBoundingClientRect();if(rect.top<window.innerHeight-100){el.classList.add("visible");}});}
window.addEventListener("scroll",fadeInOnScroll);
window.addEventListener("load",fadeInOnScroll);

