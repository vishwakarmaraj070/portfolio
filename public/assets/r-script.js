$(document).ready(function () {
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

    $('#mdb-lightbox-ui').load('../mdb-addons/mdb-lightbox-ui.html');

   
});