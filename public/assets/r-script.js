

$(document).ready(function () {

    if(window.location.href.length !== window.location.href.lastIndexOf('/') + 1){
        $('.navbar .nav-link.about').removeClass('active')
    }
    let {width, left}= ''
    function slideLine(){
        width = $('.navbar .nav-link.active').outerWidth()
        let pos = $('.navbar .nav-link.active').position()
        left = pos.left
        $('span#slide-line').css({width,left})
    }
    slideLine()
    $('.navbar .nav-link').hover(function () {
        width = this.clientWidth;
        left = this.offsetLeft
        $('span#slide-line').css({width,left})
        }, function () {
            slideLine()
        }
    );

    $('.navbar .nav-link').click(function(){
        $('.navbar .nav-link').removeClass('active')
        $(this).addClass('active')
    })
});