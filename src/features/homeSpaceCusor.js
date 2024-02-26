import { gsap } from "gsap";

function homeSpaceCusor() {



    if (window.screen.width >= 1280) {

        /* insert in the document a div name cursor and cursor2 */
        document.body.insertAdjacentHTML('beforeend', '<div class="cursor"><div class="text-cursor">Découvrir</div></div>');
        const homespace = document.querySelector('.homespace_component');

        var cursor = document.querySelector('.cursor');

        if (cursor && homespace) {

            //var a = document.querySelectorAll('a');
            var customCursors = document.querySelectorAll('.homespace_item');

            homespace.addEventListener('mousemove', function (e) {

                // cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
                /* use gsap to animate the cursor to follow the mouse */
                cursor.classList.add('active');
                gsap.to(cursor, {
                    duration: 0.3,
                    x: e.clientX,
                    y: e.clientY,
                    ease: 'power2.out'
                });

                /* remove the cursor pointer from document */
                document.body.style.cursor = 'none';
            });

            /* when mouse leave homespace, remove class active from cursor */
            homespace.addEventListener('mouseleave', function () {
                cursor.classList.remove('active');
                document.body.style.cursor = 'auto';

            });

            customCursors.forEach(item => {
                item.addEventListener('mouseover', () => {
                    cursor.classList.add('active');
                });
                item.addEventListener('active', () => {
                    cursor.classList.remove('bigcursor');
                });
            })
        }
    }

}

export default homeSpaceCusor