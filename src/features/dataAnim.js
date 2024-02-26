import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Utility from './utility.js';


gsap.registerPlugin(ScrollTrigger);

function dataAnim() {
    /* target all element with class .title2l_component */
    // const datas_components = gsap.utils.toArray('.datas_component');


    // let startValue, endValue, start, end;


    // Initialize GSAP timeline
    const timeline = gsap.timeline();

    // Add animation to the timeline
    // timeline.to(".datas_component", {
    //     x: "-50%", // Translate horizontally to -50%
    //     ease: "power1.inOut", // You can use other easing functions as well
    // });

    timeline.fromTo(".datas_component", { xPercent: 100 }, { xPercent: -120, duration: 1, ease: "power1.in" });

    // Select and loop through all the .animation-div elements
    const animationDivs = gsap.utils.toArray(".datas_component");

    animationDivs.forEach((div) => {
        // Create ScrollTrigger for each .animation-div element
        ScrollTrigger.create({
            trigger: div,
            start: "top bottom", // Start when the top of the element reaches the bottom of the viewport
            end: "bottom 40%", // End when the bottom of the element reaches the top of the viewport
            scrub: 1, // Scrub the animation while scrolling
            animation: timeline, // Use the defined timeline for animation
            // markers: true,
        });
        // gsap.set(div, { x: "100%" });
    });


    ScrollTrigger.refresh();

}

export default dataAnim