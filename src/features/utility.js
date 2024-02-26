import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
import Lenis from "@studio-freight/lenis";

class Utility {
    static isMobile() {
        return Math.min(window.screen.width, window.screen.height) < 768
    }

    /* Create a static method to use LEnis Smooth scroll*/
    static createSmoother() {
        const lenis = new Lenis({
            smoothWheel: true,
            wheelMultiplier: 0.5,
            lerp: 0.05,
        });

        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return lenis;
    }

}

export default Utility;
