document.addEventListener('DOMContentLoaded', () => {
  const framesContainer = document.querySelector('.frames');
  const previousButton = document.querySelector('.nav-btn.left');
  const nextButton = document.querySelector('.nav-btn.right');

  if (!framesContainer || !previousButton || !nextButton) {
    return;
  }

  const projects = [
    '/asset/photo:video/photo/3D skull.png',
    '/asset/photo:video/photo/Projet2.webp',
    '/asset/photo:video/photo/Projet3.jpg',
    '/asset/photo:video/photo/Projet4.jpg',
    '/asset/photo:video/photo/Projet5.jpg',
    '/asset/photo:video/photo/Projet6.jpeg'
  ];

  const projectTitles = [
    'Projet1',
    'Projet2',
    'Projet3',
    'Projet4',
    'Projet5',
    'Projet6'
  ];

  const projectLinks = [
    '/asset/Page-High/P1/Page-High-vehicule-artP1.html',
    '/project2.html',
    '/project3.html',
    '/project4.html',
    '/project5.html',
    '/project6.html'
  ];

  let currentIndex = 0;

  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const renderFrames = () => {
    framesContainer.innerHTML = '';

    const leftIndex = (currentIndex - 1 + projects.length) % projects.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % projects.length;
    const indices = [leftIndex, centerIndex, rightIndex];

    indices.forEach((projectIndex, position) => {
      const frame = document.createElement('div');
      frame.className = 'frame';
      if (position === 0) frame.classList.add('left');
      if (position === 1) frame.classList.add('center');
      if (position === 2) frame.classList.add('right');

      const title = document.createElement('h3');
      title.className = 'frame-title';
      title.textContent = projectTitles[projectIndex];
      frame.appendChild(title);

      const link = document.createElement('a');
      link.href = projectLinks[projectIndex];

      const img = document.createElement('img');
      img.src = projects[projectIndex];
      img.className = 'frame-img';
      img.loading = 'lazy';
      img.decoding = 'async';

      if (!reduceMotionQuery.matches) {
        img.style.opacity = 0;
        img.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        requestAnimationFrame(() => {
          img.style.opacity = 1;
        });
      }

      link.appendChild(img);
      frame.appendChild(link);
      framesContainer.appendChild(frame);
    });
  };

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    renderFrames();
  });

  previousButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    renderFrames();
  });

  if (typeof reduceMotionQuery.addEventListener === 'function') {
    reduceMotionQuery.addEventListener('change', renderFrames);
  } else if (typeof reduceMotionQuery.addListener === 'function') {
    reduceMotionQuery.addListener(renderFrames);
  }

  renderFrames();
});
