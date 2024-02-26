import gsap from 'gsap';
function headerScroll() {

    /* get the header element */
    const header = document.querySelector('header.header_component')
    const burgerBtn = document.querySelector('.burger_button')

    if (!header && !burgerBtn) return;

    /* on click on burger button, toggle css overlow hidden in body */
    burgerBtn.addEventListener('click', function () {
        document.body.classList.toggle('--overflow-hidden')
    })

    /* Detect scroll up/down */
    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        var st = window.scrollY || document.documentElement.scrollTop;
        if (st < 150) {
            /* by using gsap, move the header to 100% of its height */
            gsap.to(header, {
                y: '0',
                duration: 1,
                ease: 'power3.EaseInOut'
            });
        } else if (st > lastScrollTop) {
            gsap.to(header, {
                y: '-100%',
                duration: 1,
                ease: 'power3.easeOut',
                delay: 0.5
            });
        } else {
            gsap.to(header, {
                y: '0%',
                duration: 1,
                ease: 'power3.easeOut',
                delay: 0.5
            });
        }

        /* if the scroll is less than 150px from top of screen
        then move the header to 0% of its height */


        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling

    });
}

export default headerScroll