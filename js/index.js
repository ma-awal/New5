

const myNav=document.querySelector(".scroll-nav")
window.addEventListener('scroll',()=>{
   if(window.scrollY>myNav.offsetHeight+150){
      myNav.classList.add("show-nav2")
   }else{
      myNav.classList.remove("show-nav2")
   }
})




//  slider
var swiper = new Swiper(".mySwiper", {
  
   loop:true,
   spaceBetween:20,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
       slidesPerView:1,
        
      },
      768: {
         slidesPerView:2,
       },
     1024: {
         slidesPerView: 3,
       
       },
       
    }
     
 });
