gsap.registerPlugin(ScrollTrigger);
gsap.from("#carousel", {duration: 1.5, opacity: 0});

/* let tl = gsap.timeline({repeat: 0, repeatDelay: 0});

tl.from('.first', {duration: 1, x: 100, opacity: 0});
tl.from('.second', {duration: 1, x: 100, opacity: 0});
tl.from('.third', {duration: 1, x: 100, opacity: 0});
tl.from('.fourth', {duration: 1, x: 100, opacity: 0}); */

gsap.from('.first', {scrollTrigger: {trigger: '.first', start: 'top center'}, duration: 1, x: 100, opacity: 0});
gsap.from('.second', {scrollTrigger: {trigger: '.second', start: 'top center'}, duration: 1, x: 100, opacity: 0});
gsap.from('.third', {scrollTrigger: {trigger: '.third', start: 'top center'}, duration: 1, x: 100, opacity: 0});
gsap.from('.fourth', {scrollTrigger: {trigger: '.fourth', start: 'top center'}, duration: 1, x: 100, opacity: 0});


gsap.from("#primary-2", {
  scrollTrigger: {
    trigger: '#primary-2',
    start: 'top center'},
  duration: 1,
  opacity: 0
});  

gsap.from("#primary-3", {
  scrollTrigger: {
    trigger: '#primary-3',
    start: 'top center'},
  duration: 1,
  opacity: 0
});  


  
  
  
  
  
  
