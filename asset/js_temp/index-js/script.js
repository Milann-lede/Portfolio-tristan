document.addEventListener('DOMContentLoaded', () => {
  // Dropdown sur boutons texte OU image
  const dropdownButtons = document.querySelectorAll('.dropbtn, .img-button');
  dropdownButtons.forEach(button => {
    const dropdown = button.nextElementSibling;
    if (!dropdown) {
      return;
    }

    button.addEventListener('click', () => {
      // ferme les autres menus
      document.querySelectorAll('.dropdown-content').forEach(menu => {
        if (menu !== dropdown) {
          menu.classList.remove('show');
        }
      });

      // toggle menu cliqué
      dropdown.classList.toggle('show');

      // scroll automatique pour que le dropdown soit visible
      if (dropdown.classList.contains('show')) {
        setTimeout(() => {
          const dropdownRect = dropdown.getBoundingClientRect();
          const dropdownBottom = dropdownRect.bottom + window.scrollY;
          const viewportHeight = window.innerHeight;

          if (dropdownBottom > window.scrollY + viewportHeight) {
            window.scrollTo({
              top: dropdownBottom - viewportHeight + 20,
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    });
  });

  if (dropdownButtons.length > 0) {
    // ferme le menu si on clique ailleurs
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(menu => {
          menu.classList.remove('show');
        });
      }
    });
  }

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Réduit le travail vidéo si l'utilisateur préfère moins d'animations
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const rawHeroVideo = document.querySelector('.hero-video');
  const backgroundVideos = document.querySelectorAll('video.background-video');

  const managedVideos = [];

  if (rawHeroVideo instanceof HTMLVideoElement) {
    managedVideos.push({
      video: rawHeroVideo,
      autoplay: rawHeroVideo.autoplay,
      loop: rawHeroVideo.loop,
      controls: rawHeroVideo.controls,
      showControlsOnReduce: true
    });
  }

  backgroundVideos.forEach((video) => {
    managedVideos.push({
      video,
      autoplay: video.autoplay,
      loop: video.loop,
      controls: video.controls,
      showControlsOnReduce: false
    });
  });

  const applyMotionPreference = (query) => {
    managedVideos.forEach(({ video, autoplay, loop, controls, showControlsOnReduce }) => {
      if (!(video instanceof HTMLVideoElement)) {
        return;
      }

      if (query.matches) {
        video.pause();
        video.autoplay = false;
        video.loop = false;
        video.controls = showControlsOnReduce ? true : controls;
      } else {
        video.controls = showControlsOnReduce ? false : controls;
        video.autoplay = autoplay;
        video.loop = loop;
        video.muted = true;
        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === 'function') {
          playPromise.catch(() => {/* ignore playback blocking */});
        }
      }
    });
  };

  if (managedVideos.length > 0) {
    applyMotionPreference(motionQuery);
    if (typeof motionQuery.addEventListener === 'function') {
      motionQuery.addEventListener('change', applyMotionPreference);
    } else if (typeof motionQuery.addListener === 'function') {
      motionQuery.addListener(applyMotionPreference);
    }
  }
});
