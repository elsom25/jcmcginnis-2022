/**
 * Reading Progress Bar (Blog Posts)
 * Shows reading progress based on scroll position through article.
 * Dynamically imported only on post pages.
 */
export function initReadingProgress() {
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
