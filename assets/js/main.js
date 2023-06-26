
//-------------------





/*          *     .        *  .    *    *   . 
 .  *  move your mouse to over the stars   .
 *  .  .   change these values:   .  *
   .      * .        .          * .       */
   // const STAR_COLOR = '#fff';
   // const STAR_SIZE = 3;
   // const STAR_MIN_SCALE = 0.2;
   // const OVERFLOW_THRESHOLD = 50;
   // const STAR_COUNT = ( window.innerWidth + window.innerHeight ) / 8;
   //
   // const canvas = document.querySelector( 'canvas' ),
   //       context = canvas.getContext( '2d' );
   //
   // let scale = 1, // device pixel ratio
   //     width,
   //     height;
   //
   // let stars = [];
   //
   // let pointerX,
   //     pointerY;
   //
   // let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
   //
   // let touchInput = false;
   //
   // generate();
   // resize();
   // step();
   //
   // window.onresize = resize;
   // canvas.onmousemove = onMouseMove;
   // canvas.ontouchmove = onTouchMove;
   // canvas.ontouchend = onMouseLeave;
   // document.onmouseleave = onMouseLeave;
   //
   // function generate() {
   //
   //    for( let i = 0; i < STAR_COUNT; i++ ) {
   //     stars.push({
   //       x: 0,
   //       y: 0,
   //       z: STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE )
   //     });
   //    }
   //
   // }
   //
   // function placeStar( star ) {
   //
   //   star.x = Math.random() * width;
   //   star.y = Math.random() * height;
   //
   // }
   //
   // function recycleStar( star ) {
   //
   //   let direction = 'z';
   //
   //   let vx = Math.abs( velocity.x ),
   //       vy = Math.abs( velocity.y );
   //
   //   if( vx > 1 || vy > 1 ) {
   //     let axis;
   //
   //     if( vx > vy ) {
   //       axis = Math.random() < vx / ( vx + vy ) ? 'h' : 'v';
   //     }
   //     else {
   //       axis = Math.random() < vy / ( vx + vy ) ? 'v' : 'h';
   //     }
   //
   //     if( axis === 'h' ) {
   //       direction = velocity.x > 0 ? 'l' : 'r';
   //     }
   //     else {
   //       direction = velocity.y > 0 ? 't' : 'b';
   //     }
   //   }
   //
   //   star.z = STAR_MIN_SCALE + Math.random() * ( 1 - STAR_MIN_SCALE );
   //
   //   if( direction === 'z' ) {
   //     star.z = 0.1;
   //     star.x = Math.random() * width;
   //     star.y = Math.random() * height;
   //   }
   //   else if( direction === 'l' ) {
   //     star.x = -OVERFLOW_THRESHOLD;
   //     star.y = height * Math.random();
   //   }
   //   else if( direction === 'r' ) {
   //     star.x = width + OVERFLOW_THRESHOLD;
   //     star.y = height * Math.random();
   //   }
   //   else if( direction === 't' ) {
   //     star.x = width * Math.random();
   //     star.y = -OVERFLOW_THRESHOLD;
   //   }
   //   else if( direction === 'b' ) {
   //     star.x = width * Math.random();
   //     star.y = height + OVERFLOW_THRESHOLD;
   //   }
   //
   // }
   //
   // function resize() {
   //
   //   scale = window.devicePixelRatio || 1;
   //
   //   width = window.innerWidth * scale;
   //   height = window.innerHeight * scale;
   //
   //   canvas.width = width;
   //   canvas.height = height;
   //
   //   stars.forEach( placeStar );
   //
   // }
   //
   // function step() {
   //
   //   context.clearRect( 0, 0, width, height );
   //
   //   update();
   //   render();
   //
   //   requestAnimationFrame( step );
   //
   // }
   //
   // function update() {
   //
   //   velocity.tx *= 0.96;
   //   velocity.ty *= 0.96;
   //
   //   velocity.x += ( velocity.tx - velocity.x ) * 0.8;
   //   velocity.y += ( velocity.ty - velocity.y ) * 0.8;
   //
   //   stars.forEach( ( star ) => {
   //
   //     star.x += velocity.x * star.z;
   //     star.y += velocity.y * star.z;
   //
   //     star.x += ( star.x - width/2 ) * velocity.z * star.z;
   //     star.y += ( star.y - height/2 ) * velocity.z * star.z;
   //     star.z += velocity.z;
   //
   //     // recycle when out of bounds
   //     if( star.x < -OVERFLOW_THRESHOLD || star.x > width + OVERFLOW_THRESHOLD || star.y < -OVERFLOW_THRESHOLD || star.y > height + OVERFLOW_THRESHOLD ) {
   //       recycleStar( star );
   //     }
   //
   //   } );
   //
   // }
   //
   // function render() {
   //
   //   stars.forEach( ( star ) => {
   //
   //     context.beginPath();
   //     context.lineCap = 'round';
   //     context.lineWidth = STAR_SIZE * star.z * scale;
   //     context.globalAlpha = 0.5 + 0.5*Math.random();
   //     context.strokeStyle = STAR_COLOR;
   //
   //     context.beginPath();
   //     context.moveTo( star.x, star.y );
   //
   //     var tailX = velocity.x * 2,
   //         tailY = velocity.y * 2;
   //
   //     // stroke() wont work on an invisible line
   //     if( Math.abs( tailX ) < 0.1 ) tailX = 0.5;
   //     if( Math.abs( tailY ) < 0.1 ) tailY = 0.5;
   //
   //     context.lineTo( star.x + tailX, star.y + tailY );
   //
   //     context.stroke();
   //
   //   } );
   //
   // }
   //
   // function movePointer( x, y ) {
   //
   //   if( typeof pointerX === 'number' && typeof pointerY === 'number' ) {
   //
   //     let ox = x - pointerX,
   //         oy = y - pointerY;
   //
   //     velocity.tx = velocity.tx + ( ox / 8*scale ) * ( touchInput ? 1 : -1 );
   //     velocity.ty = velocity.ty + ( oy / 8*scale ) * ( touchInput ? 1 : -1 );
   //
   //   }
   //
   //   pointerX = x;
   //   pointerY = y;
   //
   // }
   //
   // function onMouseMove( event ) {
   //
   //   touchInput = false;
   //
   //   movePointer( event.clientX, event.clientY );
   //
   // }
   //
   // function onTouchMove( event ) {
   //
   //   touchInput = true;
   //
   //   movePointer( event.touches[0].clientX, event.touches[0].clientY, true );
   //
   //   event.preventDefault();
   //
   // }
   //
   // function onMouseLeave() {
   //
   //   pointerX = null;
   //   pointerY = null;
   //
   // }
   
// jsss




document.documentElement.className = 'js';
document.cookie = 'jsEnabled=true';


(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

