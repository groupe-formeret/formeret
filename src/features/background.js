import { gsap } from "gsap";
import Utility from './utility.js';

function background() {

    const changeBackgroundElements = document.querySelectorAll('[data-change-background]');
    let startValue, endValue

    if (Utility.isMobile()) {
        startValue = 'top 50%';
        endValue = 'bottom 75%';
    } else {
        startValue = 'top 50%';
        endValue = 'bottom 50%';
    }

    /* Use gsap to determine when an item from changeBackgroundElements is intersecting the screen, then toggleClass '--is-black' in the body */
    changeBackgroundElements.forEach(function (element) {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: startValue,
                end: endValue,
                toggleClass: { targets: 'body', className: '--is-black' },
                // markers: true,
            }
        });
    }
    );

}

export default background;