let enter = document.querySelector('.menu');

let exit = document.querySelector('.exit');

let tl = gsap.timeline();

tl.paused(true);

tl.to('.overlay', {
    clipPath:'circle(200% at 100% 0%)',
    duration:1
});

enter.addEventListener('click',() => {
    tl.play();
})

exit.addEventListener('click', () => {
    tl.reverse(0.3);
})