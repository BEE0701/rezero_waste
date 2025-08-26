$(document).ready(function(){
    

  
    $(".mainTxtH1").mouseenter(function(){
      $(".mainTxtH1").css("color","#5c5b5b")
    })
    $(".mainTxtH1").mouseleave(function(){
      $(".mainTxtH1").css("color", "#0A400C")
    })
    $("#burgur").click(function(){
      $(".mobileNavigation").show();
    })
    $(".mobile_esc").click(function(){
      $(".mobileNavigation").hide()
    })
    


})
document.querySelector("header").style.top = "-100px";
document.querySelector("header").style.top = "0"; 