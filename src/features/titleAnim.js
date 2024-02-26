import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function titleAnim() {

    /* target all element with class .title2l_component */
    const title2l = document.querySelectorAll('.title2l_component')

    /* if there is at least one element with class .title2l_component */
    if (title2l.length > 0) {

        /* animate each span inside the title2l_component */
        title2l.forEach(title => {

            // Get all the <h2> elements in the DOM
            const h2Elements = document.querySelectorAll('.title2l_component h2, .title2l_component h1');

            // Iterate through each <h2> element
            h2Elements.forEach((title) => {
                // Check if the <h2> contains a <br> tag
                if (title.innerHTML.includes('<br>')) {
                    // Split the content of <h2> at the <br> tag
                    const parts = title.innerHTML.split('<br>');

                    // Wrap the text before <br> in a <span> with class "hello1"
                    parts[0] = '<span class="title-part1">' + parts[0] + '</span>';

                    // Wrap the text after <br> in a <span> with class "hello"
                    parts[1] = '<span class="title-part2"><strong>' + parts[1] + '</strong></span>';

                    // Set the modified HTML content back to the <h2>
                    title.innerHTML = parts.join('');
                }
            });

            const span1 = title.querySelectorAll('.title-part1')
            const span2 = title.querySelectorAll('.title-part2')

            // span1.style.backgroundColor = 'red';

            gsap.fromTo(span1, {
                x: '5rem',
            }, {
                x: '-2rem',
                duration: 1,
                scrollTrigger: {
                    trigger: title,
                    start: "top 100%",
                    end: "bottom 0%",
                    scrub: true,
                    // markers: true,
                    // toggleActions: "restart pause reverse pause"
                }
            })

            gsap.fromTo(span2, {
                x: '-5rem',
            }, {
                x: '2rem',
                duration: 1,
                scrollTrigger: {
                    trigger: title,
                    start: "top 100%",
                    end: "bottom 0%",
                    scrub: true,
                    // markers: { startColor: "orange", endColor: "blue", fontSize: "18px", fontWeight: "bold", indent: 20 }
                    // toggleActions: "restart pause reverse pause"
                }
            })
        })
    }
}

export default titleAnim