let header=document.querySelector("header");
window.onscroll=function(){
if(this.scrollY >= 50)
{
header.classList.add("active");
}else{
    header.classList.remove("active");
}
}
let navlinks=document.getElementById("links");
function openCloseMenu(){
navlinks.classList.toggle("active");
}

 new Swiper('.card-wrapper', {
  // Optional parameters
  loop: true,
spaceBetween:30,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

breakpoints:{
    0:{
        slidesPerView:1
    },
        768:{
        slidesPerView:2
    },
        1024:{
        slidesPerView:3
    },
}
});



// Close menu when clicking any link
const menuLinks = document.querySelectorAll("#links a");

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navlinks.classList.remove("active");
  });
});



const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  // إذا كان التمرير أكثر من 200px أظهر الزر
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Check saved theme in localStorage
if(localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  themeIcon.classList.replace('fa-sun','fa-moon');
} else {
  body.classList.remove('light-mode');
  themeIcon.classList.replace('fa-moon','fa-sun');
}

themeToggle.addEventListener('click', function(e){
  e.preventDefault();
  body.classList.toggle('light-mode');

  if(body.classList.contains('light-mode')){
    themeIcon.classList.replace('fa-sun','fa-moon');
    localStorage.setItem('theme', 'light');
  } else {
    themeIcon.classList.replace('fa-moon','fa-sun');
    localStorage.setItem('theme', 'dark');
  }
});
