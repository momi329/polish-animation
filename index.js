gsap.registerPlugin(Flip);

const startButton = document.getElementById("start");

const words = document.querySelectorAll(".fx-word");

const tl = gsap.timeline();

tl.to(".loader", {
  display: "none",
  delay: 1.2,
  duration: 1.2,
  ease: "circ.out",
})
  .to(".transition-div", {
    opacity: 0.8,
    position: "absolute",
    top: 0,
    left: "-100%",
    duration: 1,
    ease: "expoScale",
  })
  .to(".fx-letter", {
    transform: "none",
    opacity: 1,
    duration: 0.5,
    ease: "circ.out",
    stagger: 0.05,
  });
