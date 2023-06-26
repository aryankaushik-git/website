const platforms1 = document.querySelector('#p2 #s2');

const rollingAnimation1 = platforms1.animate([
        { transform: 'translateX(-2500px)' },
        { transform: `translateX(${200 * 1}px)` }
    ],
    { iterations: Infinity, duration: 40 * 1000 });

function rollCarousel() {
    rollingAnimation1.play()
}

function pauseCarousel() {
    rollingAnimation1.pause();
}

platforms1.addEventListener('mouseover', pauseCarousel)
platforms1.addEventListener('mouseout', rollCarousel)

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