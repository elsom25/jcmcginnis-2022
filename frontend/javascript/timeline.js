/**
 * Timeline Fill Animation (Homepage)
 * GSAP ScrollTrigger-powered timeline that fills as user scrolls through career eras.
 * Dynamically imported only on index page.
 */
export function initTimelineFill() {
  const track = document.getElementById("timeline-track");
  const fill = document.getElementById("timeline-fill");
  const glow = document.getElementById("timeline-glow");
  const thesis = document.getElementById("thesis-card");
  const container = document.getElementById("timeline-container");
  const firstLesson = document.querySelector(".lesson-panel");

  if (!track || !fill || !glow || !thesis || !container || !firstLesson) return;

  // Wait for GSAP
  const check = setInterval(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      clearInterval(check);
      gsap.registerPlugin(ScrollTrigger);
      setupTimeline();
    }
  }, 50);
  setTimeout(() => clearInterval(check), 3000);

  function setupTimeline() {
    let trackHeight = 0;

    // Position timeline and glow from first lesson to thesis card top
    function positionTimeline() {
      const startY = firstLesson.offsetTop + 32;
      const thesisSection = document.getElementById("thesis-section");
      const endY = thesisSection.offsetTop + thesis.offsetTop;

      trackHeight = Math.max(100, endY - startY);

      track.style.top = `${startY}px`;
      track.style.height = `${trackHeight}px`;
      glow.style.top = `${startY}px`;
    }

    positionTimeline();
    setTimeout(positionTimeline, 100);
    window.addEventListener("resize", () => {
      positionTimeline();
      ScrollTrigger.refresh();
    });

    // Scroll-driven fill + glow animation
    ScrollTrigger.create({
      trigger: firstLesson,
      start: "top 50%",
      endTrigger: thesis,
      end: "top 40%",
      scrub: 0.3,
      onUpdate: (self) => {
        const progress = self.progress;
        fill.style.height = `${progress * 100}%`;
        glow.style.height = `${progress * trackHeight}px`;
      },
    });
  }
}
