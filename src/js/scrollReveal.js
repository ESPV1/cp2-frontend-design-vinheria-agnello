export function initScrollReveal() {
  const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    duration: 2000,
  });

  sr.reveal(".delayExtraSmallReveal", { delay: 100 });
  sr.reveal(".delaySmallReveal", { delay: 200 });
  sr.reveal(".delayRegularReveal", { delay: 250 });
  sr.reveal(".delayMediumReveal", { delay: 300 });
  sr.reveal(".delayLargeReveal", { delay: 400 });
  sr.reveal(".delayExtraBigReveal", { delay: 600 });
  sr.reveal(".intervalCardReveal", { interval: 300 });
}