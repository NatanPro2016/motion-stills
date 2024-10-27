const lenis = new Lenis();

// Listen for the 'scroll' event and log the event data to the console
lenis.on("scroll", (e) => {
  console.log(e);
});

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

ScrollTrigger.create({
  trigger: ".website-content",
  start: "top top",
  endTrigger: ".white-space",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});

ScrollTrigger.create({
    trigger:".header-info",
    start:"top top",
    endTrigger:".white-space",
    end:"bottom bottom",
    pin:true,
    pinSpacing:false,

})
