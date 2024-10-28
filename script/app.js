const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on("scroll", (e) => {});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

gsap.registerPlugin(ScrollTrigger);

const trigger = document.querySelector(".website-content");

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".white-space",
  end: "bottom top",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  endTrigger: ".white-space",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});
ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const rotation = self.progress * 360;
    const s = self.progress * 1 - 1;
    console.log(s);

    const scale = self.progress * 1 - 1 >= 0.5 ? self.progress * 1 - 1 : 0.5;
    gsap.to(".revealer", { rotation, scale });
  },
});

ScrollTrigger.create({
  trigger: ".pinned",
  start: "top top",
  endTrigger: ".header-info",
  end: "bottom bottom",
  onUpdate: (self) => {
    const progress = self.progress;
    const clipPath = `polygon(
    ${45 - 45 * progress}%  ${0 + 0 * progress}%,
    ${55 + 45 * progress}%  ${0 + 0 * progress}%,
    ${55 + 45 * progress}%  ${100 - 0 * progress}%,
    ${45 - 45 * progress}%  ${100 - 0 * progress}%
    )`;
    gsap.to(".revealer-1, .revealer-2", {
      clipPath,
      ease: "none",
      duration: 0,
    });
  },
});

ScrollTrigger.create({
  trigger: ".header-info",
  start: "top top",
  end: "bottom 50%",
  scrib: 1,
  onUpdate: (self) => {
    const progress = self.progress;
    const left = 35 + 15 * progress;
    gsap.to(".revealer", {
      left: `${left}%`,
      ease: "none",
      duration: 0,
    });
  },
});
ScrollTrigger.create({
  trigger: ".white-space",
  start: "top 50%",
  end: "bottom bottom",
  scrib: 1,
  onUpdate: (self) => {
    const scale = 1 + 12 * self.progress;
    gsap.to(".revealer", { scale, ease: "none", duration: 0 });
  },
});
