import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Utility from './utility.js';



gsap.registerPlugin(ScrollTrigger);

function splitSlides() {



    if (Utility.isMobile()) {
        // Do something specific for mobile devices or just return if you need to skip some functionality.
        return;
    }

    // Get references to the left and right divs
    const splitComponents = document.querySelectorAll('.split_component');

    // Loop through each split component
    splitComponents.forEach(splitComponent => {
        // Get references to the elements inside the split component
        const verticalSlider = splitComponent.querySelector('.vertical-sections--wrapper-wrapper');
        const leftDiv = splitComponent.querySelector('.vertical-sections.left');
        const rightDiv = splitComponent.querySelector('.vertical-sections.right');
        const splitItems = splitComponent.querySelectorAll('.split_item');

        // Calculate the total distance to scroll
        const splitItemsCount = (splitItems.length - 1) * 100;

        // Loop through each split item and move the images to their corresponding divs
        splitItems.forEach((splitItem) => {
            const leftImage = splitItem.querySelector('[data-order^="left"]');
            const rightImage = splitItem.querySelector('[data-order^="right"]');
            const leftImageWrapper = document.createElement('div');
            const rightImageWrapper = document.createElement('div');

            leftImageWrapper.classList.add('vertical-section');
            leftImageWrapper.appendChild(leftImage);
            leftDiv.appendChild(leftImageWrapper);

            rightImageWrapper.classList.add('vertical-section');
            rightImageWrapper.appendChild(rightImage);
            rightDiv.appendChild(rightImageWrapper);
        });

        if (splitItems.length > 1) {
            // GSAP Animations to animate separate columns
            gsap.timeline({
                defaults: {
                    ease: "none",
                },
                scrollTrigger: {
                    trigger: verticalSlider,
                    pin: true,
                    start: "top top",
                    end: `+=${splitItemsCount}%`,
                    scrub: true,
                    // markers: true,
                },
            })
                .fromTo(
                    leftDiv,
                    { yPercent: 0 },
                    { yPercent: -splitItemsCount, duration: 1 }
                )
                .fromTo(
                    rightDiv,
                    { yPercent: 0 },
                    { yPercent: splitItemsCount, duration: 1 },
                    "<"
                );
        }

    });

    /* After document loaded */
    document.addEventListener("DOMContentLoaded", () => {
        ScrollTrigger.refresh()
    })
}


export default splitSlides