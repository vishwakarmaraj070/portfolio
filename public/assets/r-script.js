$(document).ready(function () {
    let {width, left}= ''

    function slideLine(){
        width = $('.navbar .nav-item.active').width()
        let pos = $('.navbar .nav-item.active').position()
        left = pos.left
        $('span#slide-line').css({width,left})
    }
    slideLine()
    $('.navbar .nav-item').hover(function () {
        width = this.offsetWidth;
        left = this.offsetLeft
        $('span#slide-line').css({width,left})
        }, function () {
            slideLine()
        }
    );
   
});