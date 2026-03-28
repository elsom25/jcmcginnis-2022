/**
 * Timeline fill (homepage)
 * Rail runs from first marker dot to last; scroll scrub fills between them.
 */
export function initTimelineFill() {
  const track = document.getElementById("timeline-track");
  const fill = document.getElementById("timeline-fill");
  const container = document.getElementById("timeline-container");
  const startAnchor = document.querySelector("[data-timeline-rail-anchor]");
  const endAnchor = document.querySelector("[data-timeline-rail-end]");
  const eras = Array.from(document.querySelectorAll(".timeline-era"));

  if (!track || !fill || !container || !startAnchor || !endAnchor) return;

  const check = setInterval(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      clearInterval(check);
      gsap.registerPlugin(ScrollTrigger);
      setupTimeline();
    }
  }, 50);
  setTimeout(() => clearInterval(check), 3000);

  function setupTimeline() {
    if (window.innerWidth < 768) return;

    let trackHeight = 0;

    function setActiveEra(activeIndex) {
      eras.forEach((era, index) => {
        era.classList.toggle("is-active", index === activeIndex);
        era.classList.toggle(
          "is-adjacent",
          Math.abs(index - activeIndex) === 1,
        );
      });
    }

    function positionTimeline() {
      const containerRect = container.getBoundingClientRect();
      const anchorRect = startAnchor.getBoundingClientRect();
      const endRect = endAnchor.getBoundingClientRect();

      /* Rail x-axis is fixed in CSS (--lessons-rail-center); only vertical extent is JS-driven */
      const startY = anchorRect.top - containerRect.top + anchorRect.height / 2;
      const endY = endRect.top - containerRect.top + endRect.height / 2;
      trackHeight = Math.max(24, endY - startY);

      track.style.top = `${Math.max(0, startY)}px`;
      track.style.height = `${trackHeight}px`;
    }

    positionTimeline();
    setTimeout(positionTimeline, 100);
    window.addEventListener("resize", () => {
      positionTimeline();
      ScrollTrigger.refresh();
    });

    ScrollTrigger.create({
      trigger: startAnchor,
      start: "top 38%",
      endTrigger: endAnchor,
      end: "bottom 38%",
      scrub: 0.25,
      onUpdate: (self) => {
        fill.style.height = `${self.progress * 100}%`;
      },
    });

    if (eras.length > 0) {
      setActiveEra(0);

      eras.forEach((era, index) => {
        ScrollTrigger.create({
          trigger: era,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveEra(index),
          onEnterBack: () => setActiveEra(index),
        });
      });
    }
  }
}
