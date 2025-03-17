gsap.registerPlugin(Flip);

const words = document.querySelectorAll(".fx-word");
const quotes = document.querySelectorAll(
  ".fx-letter.start-quote, .fx-letter.end-quote"
);

const tl = gsap.timeline();

words.forEach((word) => {
  const letters = word.querySelectorAll(".fx-letter");
  gsap.set(letters, {
    y: window.innerHeight,
    opacity: 0,
  });
});

gsap.set(quotes, {
  y: window.innerHeight,
  opacity: 0,
});

words.forEach((word, wordIndex) => {
  const letters = word.querySelectorAll(".fx-letter");

  letters.forEach((letter, letterIndex) => {
    tl.to(
      letter,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      `${wordIndex * 0.1 + letterIndex * 0.01}`
    );
  });
});

quotes.forEach((quote, index) => {
  if (index === 0) {
    tl.to(
      quote,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      0
    );
  } else {
    tl.to(
      quote,
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      ">-0.5"
    );
  }
});

tl.eventCallback("onComplete", () => {
  console.log("Animation completed!");
});
