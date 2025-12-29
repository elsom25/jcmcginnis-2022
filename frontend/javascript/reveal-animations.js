/**
 * Reveal Animations
 * CSS-based scroll-triggered reveal animations using IntersectionObserver.
 * No library required - works with CSS classes.
 */
export function initRevealAnimations() {
  // Mark document as JS-ready for CSS reveal animations
  document.body.classList.add("reveal-ready");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          revealObserver.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  document
    .querySelectorAll(".reveal-on-scroll")
    .forEach((el) => revealObserver.observe(el));
}
