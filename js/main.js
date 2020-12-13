$(function(){
    $('.dropdown-toggle').click(function () {
        $(this).next('.dropdown').slideToggle(); //pressMenu
    });
    $(document).click(function(e) {
            var taaaarget = e.target;
            if (window.innerWidth <= 992) {
                if (!$(taaaarget).is('.dropdown-toggle') && !$(taaaarget).parents().is('.dropdown-toggle')) {
                    $('.dropdown').slideUp(500); //pressOutZone
                }
        }
    });
//    $(document).click(function(){
//        if($('.dropdown').css("display")=="block"){
//            $('.dropdown').slideUp();  0000 после открытия сразу закрывает
//        }
//    });
//$(document).click(function (e){ // событие клика по веб-документу
//    var div = $(".dropdown"); // тут указываем ID элемента
//    if (!div.is(e.target) // если клик был не по нашему блоку
//        && div.has(e.target).length === 0) { // и не по его дочерним элементам
//        div.slideUp(); // скрываем его
//    } //открывает и сразу закрывает
//});
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2
                },
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false
                }
            }
        ]
    });
    
    $('.popup-open').click(function(){
       $('.popup-fade').fadeIn();
        return false;
    });
    
    $('.popup-close').click(function(){
       $(this).parents('.popup-fade').fadeOut();
        return false;
    });
    
    $(document).keydown(function(e){
       if(e.keyCode === 27){
           e.stopPropagation();
           $('.popup-fade').fadeOut();
       } 
    });
    
    $('.popup-fade').click(function(e){
       if($(e.target).closest('.popup').length == 0){
           $(this).fadeOut();
       }
    });
    
    function parallax(event){
            this.querySelectorAll(".parallax").forEach(layer =>{
            let distanceX = (screen.width / 2 - event.clientX) * 0.02;
            let distanceY = (screen.height / 2 - event.clientY) * 0.02;
            layer.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
        });
    }
    document.addEventListener("mousemove", parallax);
});