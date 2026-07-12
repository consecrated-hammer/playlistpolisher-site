(() => {
  const source = document.documentElement.dataset.roadmapSource;
  const target = document.querySelector('[data-roadmap-target]');

  if (!source || !target || typeof window === 'undefined') {
    return;
  }

  if (!window.marked) {
    return;
  }

  fetch(source, { cache: 'no-store' })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to load roadmap');
      }
      return response.text();
    })
    .then((markdown) => {
      const html = window.marked.parse(markdown);
      target.innerHTML = html;
    })
    .catch(() => {});
})();
