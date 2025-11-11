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