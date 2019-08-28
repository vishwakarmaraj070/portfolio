

$(document).ready(function () {

    if(window.location.href.length !== window.location.href.lastIndexOf('/') + 1){
        $('.navbar .nav-link.about').removeClass('active')
    }
    let {width, left}= ''
    width = $('.navbar .nav-link.active').outerWidth()
    let pos = $('.navbar .nav-link.active').position()
    left = pos.left
    $('span#slide-line').css({width, left: left + 25})
   
    $('.navbar .nav-link').hover(function () {
        width = this.clientWidth;
        left = this.offsetLeft
        $('span#slide-line').css({width,left})
        }, function () {
            width = $('.navbar .nav-link.active').outerWidth()
            let pos = $('.navbar .nav-link.active').position()
            left = pos.left
            $('span#slide-line').css({width, left})
        }
    );

    $('.navbar .nav-link').click(function(){
        $('.navbar .nav-link').removeClass('active')
        $(this).addClass('active')
    })
});