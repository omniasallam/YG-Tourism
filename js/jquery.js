let typeOffset= $('#type-of-tourism').offset().top
$(window).scroll(function(){

 let windowScroll=$(window).scrollTop()

    if(windowScroll > typeOffset){
        $('.navbar').css('backgroundColor','black' )
    }
    else{
        $('.navbar').css('backgroundColor','transparent' )
    }
})
