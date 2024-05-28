// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

function espaceSlide() {
    const espaceSlider = document.querySelector('.espace-hero_component');
    const prev = document.querySelector('#espaceslide-prev')
    const next = document.querySelector('#espaceslide-next')


    if (espaceSlider) {
        new Swiper(espaceSlider, {
            autoplay: {
                delay: 5000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
            },
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
                /* on each navigation trigger, I will to move scroll in view to the class homeslide_component */
                navigationNext: () => {
                    espaceSlider.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
                navigationPrev: () => {
                    espaceSlider.scrollIntoView({
                        behavior: 'smooth'
                    });
                },
            }
        });

        espaceSlider.swiper.autoplay.start();
    }
}

export default espaceSlide