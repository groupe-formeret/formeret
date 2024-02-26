// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

function espaceSlide() {
    /* eslint-disable no-unused-vars */
    const espaceSlider = document.querySelector('.espace-hero_component');
    const prev = document.querySelector('#espaceslide-prev')
    const next = document.querySelector('#espaceslide-next')


    if (espaceSlider) {
        const swiper = new Swiper(espaceSlider, {
            speed: 500,
            effect: 'fade',
            loop: true,
            autoHeight: true,
            simulateTouch: false,
            navigation: {
                nextEl: next,
                prevEl: prev
            },
            on: {

                /* on each transition start, I will to move scroll in view to the class homeslide_component */
                slideChangeTransitionStart: function () {
                    espaceSlider.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

            }
        });
    }
    /* eslint-enable no-unused-vars */
}

export default espaceSlide