// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import Utility from './utility.js';
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);

function homeslider() {
    /* eslint-disable no-unused-vars */
    const homeSlider = document.querySelector('.homeslide_component');
    const prev = document.querySelector('#homeslide-prev')
    const next = document.querySelector('#homeslide-next')
    const header = document.querySelector('header.header_component')

    if (homeSlider) {
        new Swiper(homeSlider, {
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
            speed: 500,
            effect: 'fade',
            loop: true,
            noSwipingClass: 'homeslide_item-text',
            // autoHeight: true,
            simulateTouch: false,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            pagination: {
                el: '.homeslide_nav-bullets',
            },
            on: {
                init: function () {
                    if (Utility.isMobile()) {
                        const imgs = document.querySelectorAll('.homeslide_item-imgwrapper img')

                        imgs.forEach(img => {
                            const parent = img.closest('.homeslide_item-inner')
                            parent.querySelector('.homeslide_mobile-img').appendChild(img)
                        });
                    }
                },

                /* on each transition start, I will to move scroll in view to the class homeslide_component by using scrollsmoother*/
                slideChange: function () {
                    if (!Utility.isMobile()) {
                        // Use Lenis from UTility Class to scroll to the top of the slider after each transition
                        Utility.createSmoother().scrollTo(homeSlider, true, "top top");
                        console.log('change')
                    } else {
                        homeSlider.scrollIntoView({
                            block: 'start',
                            inline: 'nearest',
                            behavior: 'smooth'

                        });
                    }
                },

                /* on each transition end, Hide the header */
                slideChangeTransitionEnd: function () {
                    gsap.to(header, {
                        y: '-100%',
                        duration: 1,
                        ease: 'power3.easeOut',
                        delay: 0.5
                    });
                }


            }
        }).init();
    }
    /* eslint-enable no-unused-vars */
}

export default homeslider