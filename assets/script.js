(function () {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const pageMap = {
    'index.html': 'home',
    '': 'home',
    'blog.html': 'blog',
    'teaching.html': 'teaching',
    'projects.html': 'projects',
    'cv.html': 'cv'
  };
  const current = pageMap[path] || 'home';
  document.querySelectorAll('.nav__links a').forEach(a => {
    if (a.dataset.page === current) a.classList.add('active');
  });
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();


