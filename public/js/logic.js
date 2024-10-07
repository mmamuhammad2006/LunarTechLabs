$(document).ready(function () {
    let width = $(window).width();
        if(width < 992){
            $(".navbar-cont").addClass("bg-blue");
            $(".navbar-cont").removeClass("bg-transparent");
        }else{
            $(".navbar-cont").removeClass("bg-blue");
            $(".navbar-cont").addClass("bg-transparent");
        }
    $(window).resize(function () { 
        console.log($(window).width());
        let width = $(window).width();
        if(width < 992){
            $(".navbar-cont").addClass("bg-blue");
            $(".navbar-cont").removeClass("bg-transparent");
        }else{
            $(".navbar-cont").removeClass("bg-blue");
            $(".navbar-cont").addClass("bg-transparent");
        }
    });
});