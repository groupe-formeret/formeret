import { gsap } from "gsap";
import Utility from './utility.js';
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Ukiyo from "ukiyojs";
gsap.registerPlugin(ScrollTrigger);


function ScrollSmootherInit() {
    if (!Utility.isMobile()) {

        // Smooth Scroll with Lenis

        /* Define a const wich targe all element with attribute data-u-speed */
        // const els = document.querySelectorAll("[data-u-speed]");
        // els.forEach((el) => {
            //     new Ukiyo(el);
            // });
            // const footer = document.querySelector("footer.footer_component");
            // if (!footer) return;

            // const footerHeight = footer.offsetHeight + 100;
            // const mainWrapper = document.querySelector(".main-wrapper");

            /* Set padding bottom of mainWrapper to footerHeight */
            // mainWrapper.style.paddingBottom = `${footerHeight}px`;
            Utility.createSmoother();


        // gsap.set(footer, { yPercent: -50 })
        // gsap.to(footer, {
        //     scrollTrigger: {
        //         trigger: '.content-wrapper',
        //         start: 'bottom bottom',
        //         end: '+=66%',
        //         // markers: true,
        //         scrub: true,
        //     },
        //     onStart: () => {
        //         console.log('start  ')
        //         footer.style.zIndex = 3
        //     },
        //     yPercent: 0,
        //     ease: 'none'
        // });


    }
}

export default ScrollSmootherInit;