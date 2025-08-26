
//mainTop swiper
var swiper = new Swiper(".mainSlide", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    
  },
  spaceBetween:40,  
  speed:3000,
  autoplay: {
    delay:20 
  },
  centeredSlides: true,
  loop:true,
  slidesPerView:1,
  arrowTouchMove:false,
  disableOnInteraction: false

  
});

//item swiper
var swiper = new Swiper(".mainItem", {
  slidesPerView:1,
  spaceBetween:20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
  
    320:{
      slidesPerView: 1,
      spaceBetween:20

    },
    720:{
      slidesPerView: 2,
      spaceBetween:20
    },
    1280:{
      slidesPerView: 3,
      spaceBetween:40,
    }
  }
})

// text swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoplay:{
      delay:0
    }
  },
  loop:true
});
$(document).ready(function(){ 


  var previousScroll = 0;
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    if (currentScroll >= previousScroll) {
      // 아래로 스크롤 → 숨김
      $("header").addClass("remove");
    } else {
      // 위로 스크롤 → 나타남
      $("header").removeClass("remove");
      
    }
    previousScroll = currentScroll;
  });
    // let mzImg = "<img scr = './img/magagine_the fiker.png' alt= 'mz'>"
    // $(".main_div_box>img").css("background-img",mzImg)
     
      // let main_div_box1 = document.querySelector(".main_div_box")
      // const img = new Image();
      // img.src ='./img/magagine_the ikea.png' ;
      // main_div_box1.appendChild(img)


  

})//jquery end

