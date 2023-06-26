const platforms3 = document.querySelector('#p3 #s3');

const rollingAnimation3 = platforms3.animate([
        { transform: 'translateX(0)' },
        { transform: `translateX(${-150 * 16.5}px)` }
    ],
    { iterations: Infinity, duration: 30 * 1000 });

function rollCarousel() {
    rollingAnimation3.play()
}

function pauseCarousel() {
    rollingAnimation3.pause();
}

platforms3.addEventListener('mouseover', pauseCarousel)
platforms3.addEventListener('mouseout', rollCarousel)

if (window.matchMedia("(max-width: 800px)").matches) {
    transform: `translateX(${-150 * 13}px)`
}


$('a.taphover').on("touchstart", function (e) {
    "use strict"; //satisfy the code inspectors
    var link = $(this); //preselect the link
    if (link.hasClass('hover')) {
        return true;
    } else {
        link.addClass("hover");
        $('a.taphover').not(this).removeClass("hover");
        e.preventDefault();
        return false; //extra, and to make sure the function has consistent return points
    }
});