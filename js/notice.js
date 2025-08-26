$(document).ready(function(){
    $(".titleBox").click(function(){
        $(this).find(".horizon").toggleClass("rotate");
        $(this).next().stop(true, true).slideToggle(400);
        
    })  
    $(".noticeBox").hide()


})