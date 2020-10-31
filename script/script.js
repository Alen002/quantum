/* gsap.to("#primary-1", {duration: 2, x: 300}); */

/* gsap.from('#carousel', {opacity: 0, duration: 1, y:-400});
gsap.from('#icons', {opacity: 0, duration: 1, x: 500});
 */

gsap.registerPlugin(ScrollTrigger);





gsap.from('.first', {scrollTrigger: 'first', duration: 1, opacity: 0, x: 300});
gsap.from('.second', {scrollTrigger: 'second', duration: 1, opacity: 0, x: 300});