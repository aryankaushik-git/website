const platforms = document.querySelector('#p1 #s1');

const rollingAnimation = platforms.animate([
        { transform: 'translateX(0)' },
        { transform: `translateX(${-200 * 6.2}px)` }
    ],
    { iterations: Infinity, duration: 17 * 1000 });

function rollCarousel() {
    rollingAnimation.play()
}

function pauseCarousel() {
    rollingAnimation.pause();
}

platforms.addEventListener('mouseover', pauseCarousel)
platforms.addEventListener('mouseout', rollCarousel)

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