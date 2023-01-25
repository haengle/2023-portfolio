export const inmoCode = `const InmoJs = 
// only trigger JS animations for users without prefers reduced motion
var notReduceMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
if (!notReduceMotion || notReduceMotion.matches) {
    startAnimations();
}

function startAnimations() {
    var controller = new ScrollMagic.Controller();

    var growFlare = '.grow-flare g, .save-flare g';

    // check elements
    var check = document.querySelector(growFlare);
    if (check) {
         gsap.to(growFlare, {
            duration: 2, 
            scale: 1.05,
            y: -100,
            opacity: .83,
            stagger: .3,
            ease: "elastic"
        });
    }
   

    var iconSections = document.querySelectorAll('.content-section');
    if (iconSections) {
        [...iconSections].forEach(sect => {
            new ScrollMagic.Scene({
                triggerElement: sect,
                offset: 50,
                triggerHook: 0.9,
                reverse: false,
            }).setClassToggle(sect, 'reveal').addTo(controller);
        })
    }

    //homepage
    var bannerLeft = document.querySelectorAll('#home-banner-left path');
    var bannerRight = document.querySelectorAll('#home-banner-right path');


    gsap.to('.staticBanner .content h1, .staticBanner .content p', {
        duration: 2,
        scale: 1,
        opacity: 1,
        ease: "elastic"
    });

    gsap.to('.staticBanner img', {
        duration: 1,
        scale: 1,
        opacity: 1
    })


    if (bannerLeft) {
        gsap.to(bannerLeft, {
            duration: 1,
            scale: 1,
            opacity: .83,
            stagger: .1
        })
    }
    if (bannerRight) {
        gsap.to(bannerRight, {
            delay: 1,
            duration: 1,
            scale: 1,
            opacity: .83,
            stagger: .1
        })
    }
    var homecontroller = new ScrollMagic.Controller();

    var homeSections = document.querySelectorAll('#homePage main .row');

    if (homeSections) {
        [...homeSections].forEach(sect => {
            new ScrollMagic.Scene({
                triggerElement: sect,
                offset: 50,
                triggerHook: 0.9,
                reverse: false,
            }).setClassToggle(sect, 'reveal').addTo(homecontroller);
        });        
    }

    var pathSections = document.querySelectorAll('.path-section');
    if (pathSections) {
        [...pathSections].forEach(path => {
            new ScrollMagic.Scene({
                triggerElement: path,
                offset: 50,
                triggerHook: 0.9,
            })
            .setClassToggle(path, "visible") // add class toggle
            .addTo(homecontroller);
        })
    }

    var drawPath = document.querySelector('#home-path-line');
    if (drawPath) {
        var drawPathLength = drawPath.getTotalLength();
        drawPath.style.strokeDasharray = drawPathLength + ' ' + drawPathLength;
        drawPath.style.strokeDashoffset = drawPathLength;

        
        new ScrollMagic.Scene({
            triggerElement: '#home-path',
            offset: 50,
            triggerHook: 0.9,
        })
        .setClassToggle("#home-path-line", "visible") // add class toggle
        .addTo(homecontroller);
    }
    
}
`
export const TifbScss = `
        @keyframes fade100 {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        @keyframes fadein-scale {
            0% { 
                opacity: 0; 
                transform: scale(0.6) translateY(8px); 
                transform-origin: right; 
            }
            100% { opacity: 1; }
        }

        .banner-wrapper {
            opacity: 0;
            position: relative;
            z-index: 400;
            animation: fade100 1.2s ease-in-out 1 forwards;
            > svg {
                opacity: 0;
                position: absolute;
                z-index: 50;
                mix-blend-mode: multiply;
                animation: fade100 1.5s ease-in-out 1s 1 forwards;
                polygon {
                    animation-name: fadein-scale;
                    animation-duration: 250ms;
                    animation-delay: calc(var(--animation-order) * 70ms);
                    animation-fill-mode: both;
                    animation-timing-function: ease-in-out;
                }
            }
        }`;    

export const TifbJs = `
    var polygons = $f('.page-header-img svg polygon, .banner-wrapper > svg polygon').length;
    $f('.page-header-img svg polygon, .banner-wrapper > svg polygon').each(function(i) {
        var random = Math.floor(Math.random() * (polygons - 1) + 1);
        $f(this).attr('style', '--animation-order: '+random);
    `

  export const ExchangeScss = `
    .bg {
        width: 50vw;
        background-size: cover;
        background-position: center top;
        transition: opacity .25s;
        &.fp-1 { z-index: 4; opacity: 1; }
        &.fp-2 { z-index: 3; opacity: 0; }
        &.fp-3 { z-index: 2; opacity: 0; }
        &.fp-4 { z-index: 1; opacity: 0; }
    }
    
    .fp {
        z-index: 5;
        .icon {
            background: $darkBlue;
            transition: background-color .25s;
        }
    
        &:hover {
            h3 a { color: $tan; }
            .icon { background-color: $tan; }
            + .bg { z-index: 4; opacity: 1; }
        }
    }`;

export const FnbJs = `
    var el = $f('.slideContent');
el.on('load', hintBrowser);
el.on('animationEnd', removeHint);

function hintBrowser() { this.style.willChange = 'transform'; }

function removeHint() { this.style.willChange = 'auto'; }

var animation_elements = $f('.fp-image, .fp-image-large');
var the_window = $f(window);

function check_if_in_view() {
    var window_height = the_window.height();
    var window_top_position = the_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $f.each(animation_elements, function() {
        var element = $f(this);
        var element_height = element.outerHeight();
        var element_top_position = element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            element.addClass('in-view');
        } else {
            element.addClass('out-view');
        }
    });
}

the_window.on('scroll resize', check_if_in_view);
the_window.trigger('scroll');`;