// scroll.js
gsap.registerPlugin(ScrollTrigger);

// Animate Hero Section
gsap.from(".hero-text h1", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.3,
});

gsap.from(".hero-text p", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.6,
});

gsap.from(".btn-primary", {
  opacity: 0,
  scale: 0.8,
  duration: 0.8,
  delay: 0.9,
});

// Scroll Animation for Collections
gsap.from(".collection-card", {
  scrollTrigger: {
    trigger: ".collections",
    start: "top 80%",
  },
  opacity: 0,
  y: 40,
  stagger: 0.2,
  duration: 0.8,
});

// Scroll Animation for Occasion Cards
gsap.from(".occasion-card", {
  scrollTrigger: {
    trigger: ".occasions",
    start: "top 85%",
  },
  opacity: 0,
  scale: 0.9,
  stagger: 0.2,
  duration: 0.8,
});

// scroll.js
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".occasion-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    delay: index * 0.1,
    ease: "power2.out",
  });
});

