(() => {
  // frontend/javascript/reveal-animations.js
  function initRevealAnimations() {
    document.body.classList.add("reveal-ready");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            revealObserver.unobserve(entry.target);
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

  // frontend/javascript/timeline.js
  function initTimelineFill() {
    const track = document.getElementById("timeline-track");
    const fill = document.getElementById("timeline-fill");
    const glow = document.getElementById("timeline-glow");
    const thesis = document.getElementById("thesis-card");
    const container = document.getElementById("timeline-container");
    const firstLesson = document.querySelector(".lesson-panel");
    if (!track || !fill || !glow || !thesis || !container || !firstLesson)
      return;
    const check = setInterval(() => {
      if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
        clearInterval(check);
        gsap.registerPlugin(ScrollTrigger);
        setupTimeline();
      }
    }, 50);
    setTimeout(() => clearInterval(check), 3e3);
    function setupTimeline() {
      let trackHeight = 0;
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

  // frontend/javascript/reading-progress.js
  function initReadingProgress() {
    const progressBar = document.getElementById("progress-bar");
    const article = document.querySelector("article");
    if (!progressBar || !article) return;
    window.addEventListener("scroll", () => {
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const progress = Math.min(
        100,
        Math.max(
          0,
          ((scrollY - articleTop + windowHeight * 0.3) / articleHeight) * 100,
        ),
      );
      progressBar.style.width = `${progress}%`;
    });
  }

  // frontend/javascript/index.js
  document.addEventListener("DOMContentLoaded", () => {
    initRevealAnimations();
    const page = document.body.dataset.page;
    if (page === "index") {
      initTimelineFill();
    }
    if (page === "post") {
      initReadingProgress();
    }
  });
})();
//# sourceMappingURL=app.js.map
