$(function () {
    zoom = $('.feature').css('background-size')
    zoom = parseFloat(zoom) / 100
    size = zoom * $('.feature').width() * 2.5;

    $(window).on('scroll', function () {
        var fromTop = $(window).scrollTop();
        
        let opc = $('.feature').css('opacity')
        console.log(opc)
        newSize = size - (fromTop / 6);

        if (newSize > $('.feature').width() && fromTop !== 0) {
            $('.feature').css({
                '-webkit-background-size': newSize,
                '-moz-background-size': newSize,
                '-o-background-size': newSize,
                'background-size': newSize,
                '-webkit-filter': 'blur(' + 0 + (fromTop / 400) + 'px)',
                'opacity': 1 - ((fromTop / $('html').height()) * 13.3)
            });
        }
        if (fromTop == 0) {
            $('.feature').css({
                'transition': 1.2 + 's',
                '-moz-transition': 1.2 + 's', /* Firefox 4 */
                '-webkit-transition': 1.2 + 's',/* Safari and Chrome */
                '-o-transition': 1.2 + 's',/* Opera */
                '-webkit-background-size': '100%',
                '-moz-background-size': '100%',
                '-o-background-size': '100%',
                'background-size': '100%',
            });
            
            
        }
        if(fromTop<=150){
            console.log('jll')
            $('.Quick-navigation_word').css({ 'display':'none' })
        }else{
            $('.Quick-navigation_word').css({ 'display':'block' })
        }
        if (opc<=0.53) {
            $('.Quick-navigation').css({ 'display':'block' })
            $('#topHead').css({'color':'#41d6ca'})
        }else{
            $('.Quick-navigation').css({ 'display':'none' })
            $('#topHead').css({'color':'white'})
        }
    });

});

$(function () {
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    console.log(isSafari)
    if (isChrome || isSafari) {
    } else {
        $('.feature').append('<div class="opaque"></div>');
        $(window).on('scroll', function () {
            var opacity = 0 + ($(window).scrollTop() / 5000);
            $('.opaque').css('opacity', opacity);
        });
    }
});
let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate')
            observer.unobserve(entry.target)
        }
    })
})
document.querySelectorAll('mark').forEach((mark) => {
    observer.observe(mark)
})
