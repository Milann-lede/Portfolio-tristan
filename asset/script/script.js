// ========================================
// Data: Projects for each category
// ========================================
const projectLibrary = {
    "deadpool": {
        id: "deadpool",
            title: "Stylize Deadpool",
            shortDescription: "Projet personnel réalisé en 3 semaines, basé sur l'œuvre d'Oscar Alberto Castañeda.",
            longDescription: "Hello !! Here is a work that I did on my free time. This project took me 3 weeks of work. I have used the magnicent work from Oscar Alberto Castañeda as reference. Ce projet m'a permis d'explorer des techniques de sculpture stylisée et de rendu cartoon.",
            thumbnail: { type: 'image', src: './asset/img/tristan-lede-krzysztof-tarasiuk-deadpool-final.jpg' },
            media: [
                { type: 'video', src: './asset/video/deadpool-color.mp4', layout: 'small' },
                { type: 'video', src: './asset/video/2Design sans titre.mp4', layout: 'small' },
                { type: 'video', src: './asset/video/deadpool-blueprinte.mp4', layout: 'small' },
                { type: 'image', src: './asset/img/tristan-lede-deadpool-color.jpg', layout: 'small' },
                { type: 'image', src: './asset/img/tristan-lede-deadpool-oclusion-10.jpg', layout: 'small' },
                { type: 'image', src: './asset/img/tristan-lede-deadpool-blueprinte.jpg', layout: 'small' }
            ]
    },
    "exo-armor": {
        id: "exo-armor",
            title: "Exo-armor",
            shortDescription: "Concept 3D d'une exo-armure d'exploration pour Mars. Projet en cours.",
            longDescription: "Here is a 3D concept of an exo-armor made from the moodboard below. The pilot can stay in the cabin of this armor designed for exploration on Mars. The project is still in progress and improvements will be made on 3D, wireframe and texture.",
            thumbnail: { type: 'image', src: './asset/img/EXO.jpg' },
            galleryLayout: 'stacked-centered', // Ajout de la mise en page spécifique
            media: [
                { type: 'sketchfab', layout: 'large', embedCode: '<div class="sketchfab-embed-wrapper"> <iframe title="SSM sentinelle spatiale martienne" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/edf4e6b46da745a0a7128829dceca67b/embed?autostart=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/ssm-sentinelle-spatiale-martienne-edf4e6b46da745a0a7128829dceca67b?utm_medium=embed&utm_campaign=share-popup&utm_content=edf4e6b46da745a0a7128829dceca67b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> SSM sentinelle spatiale martienne </a> by <a href="https://sketchfab.com/YDetailed_Figures?utm_medium=embed&utm_campaign=share-popup&utm_content=edf4e6b46da745a0a7128829dceca67b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> YDetailed_Figures </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=edf4e6b46da745a0a7128829dceca67b" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>' },
                { type: 'image', src: './asset/img/tristan-lede-tristan-lede-b3-environement-mecha-ao-2.jpg', layout: 'small', caption: 'Ambiant_occlusion' },
                { type: 'image', src: './asset/img/tristan-lede-tristan-lede-b3-environement-mecha-final-01.jpg', layout: 'small', caption: 'final_render' },
                { type: 'image', src: './asset/img/tristan-lede-tristan-lede-b3-environement-mecha-wirframe-02.jpg', layout: 'small', caption: 'Wireframe' }
            ]
    },
    "samurai": {
        id: "samurai",
            title: "Undead Samurai",
            shortDescription: "Séquence d'ouverture pour une série de science-fiction.",
            longDescription: "Description détaillée du projet Undead Samurai. Ce personnage a été conçu pour un jeu de dark fantasy, en se concentrant sur la narration environnementale à travers son design.",
            credit: "Concept art of Hua Lu",
            thumbnail: { type: 'image', src: './asset/img/tristan-lede-asset.jpg' },
            mediaItemClass: 'modal-media-item-samuraile', // Classe de style spécifique
            media: [
                { type: 'video', src: './asset/video/samuraill-2.mp4', layout: 'medium' },
                { type: 'video', src: './asset/video/composition-1.1.mov', layout: 'medium' },
                { type: 'image', src: './asset/img/tristan-lede-tristan-lede-tristan-lede-samurai01.jpg', layout: 'medium' },
                { type: 'image', src: './asset/img/tristan-lede-asset (1).jpg', layout: 'medium' }
            ]
    },
    "chrome-city": {
        id: "chrome-city",
            title: "Chrome City",
            shortDescription: "Animation architecturale d'une métropole futuriste.",
            longDescription: "Description détaillée du projet Chrome City.",
            thumbnail: { type: 'image', src: './asset/img/Projet4.jpg' },
            media: [ { type: 'image', src: './asset/img/Projet4.jpg' } ]
    },
    "env-wasteland": {
        id: "env-wasteland",
            title: "Wasteland Ruins",
            shortDescription: "Paysage post-apocalyptique avec des structures abandonnées et une atmosphère désolée.",
            longDescription: "Description détaillée de Wasteland Ruins.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Wasteland+Ruins" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Wasteland+Ruins" } ]
    },
    "env-neon-district": {
        id: "env-neon-district",
            title: "Neon District",
            shortDescription: "Quartier urbain nocturne illuminé par des enseignes lumineuses et des hologrammes.",
            longDescription: "Description détaillée de Neon District.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Neon+District" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Neon+District" } ]
    },
    "env-space-station": {
        id: "env-space-station",
            title: "Space Station",
            shortDescription: "Station spatiale orbitale avec vue sur une planète lointaine.",
            longDescription: "Description détaillée de Space Station.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Space+Station" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Space+Station" } ]
    },
    "env-underground-lab": {
        id: "env-underground-lab",
            title: "Underground Lab",
            shortDescription: "Laboratoire souterrain high-tech avec équipements futuristes.",
            longDescription: "Description détaillée de Underground Lab.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Underground+Lab" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Underground+Lab" } ]
    },
    "env-cyber-metropolis": {
        id: "env-cyber-metropolis",
            title: "Cyber Metropolis",
            shortDescription: "Une ville futuriste baignée de néons, avec des gratte-ciels imposants et des véhicules volants.",
            longDescription: "Description détaillée de Cyber Metropolis. Ce projet explore l'architecture verticale et les ambiances lumineuses des futures mégalopoles.",
            thumbnail: { type: 'image', src: "./asset/img/3D skull.png" },
            media: [ { type: 'sketchfab', embedCode: '<div class="sketchfab-embed-wrapper"> <iframe title="skull_test_01" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/9e3a24e3e08840d69fc031b9c1a0e55d/embed?autostart=1"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/skull-test-01-9e3a24e3e08840d69fc031b9c1a0e55d?utm_medium=embed&utm_campaign=share-popup&utm_content=9e3a24e3e08840d69fc031b9c1a0e55d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> skull_test_01 </a> by <a href="https://sketchfab.com/tristan_lede?utm_medium=embed&utm_campaign=share-popup&utm_content=9e3a24e3e08840d69fc031b9c1a0e55d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> tristan_lede </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=9e3a24e3e08840d69fc031b9c1a0e55d" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>' } ]
    },
    "char-neon-assassin": {
        id: "char-neon-assassin",
            title: "Neon Assassin",
            shortDescription: "Assassin furtif dans un costume high-tech avec des lames énergétiques.",
            longDescription: "Description détaillée de Neon Assassin.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Neon+Assassin" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Neon+Assassin" } ]
    },
    "char-android-sentinel": {
        id: "char-android-sentinel",
            title: "Android Sentinel",
            shortDescription: "Robot humanoïde de combat avec des capacités d'IA avancées.",
            longDescription: "Description détaillée de Android Sentinel.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Android+Sentinel" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Android+Sentinel" } ]
    },
    "char-hacker-elite": {
        id: "char-hacker-elite",
            title: "Hacker Elite",
            shortDescription: "Expert en cybersécurité avec des lunettes AR et des gants tactiles.",
            longDescription: "Description détaillée de Hacker Elite.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Hacker+Elite" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Hacker+Elite" } ]
    },
    "char-zombie-sculpt": {
        id: "char-zombie-sculpt",
            title: "Zombie Sculpt",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            thumbnail: { type: 'image', src: "./asset/img/Capture d’écran 2025-11-19 à 22.47.32.png" },
            media: [ { type: 'video', src: "./asset/video/YTDown.com_YouTube_Sculpte-zombie-zoom_Media_fgbLfsv7RkM_001_720p.mp4", layout: 'large', autoplayWithSound: true } ]
    },
    "veh-demoreel": {
        id: "veh-demoreel",
            title: "Vehicle Demoreel",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
            thumbnail: { type: 'video', src: "./asset/video/YTDown.com_YouTube_DEMOREEL-VEHICULE_Media_nBFCPz36S_g_001_1080p.mp4" },
            media: [ { type: 'video', src: "./asset/video/YTDown.com_YouTube_DEMOREEL-VEHICULE_Media_nBFCPz36S_g_001_1080p.mp4", layout: 'large', autoplayWithSound: true } ]
    },
    "veh-nomad-rover": {
        id: "veh-nomad-rover",
            title: "Nomad Rover",
            shortDescription: "Véhicule tout-terrain d'exploration pour les planètes hostiles.",
            longDescription: "Description détaillée de Nomad Rover.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Nomad+Rover" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Nomad+Rover" } ]
    },
    "veh-cyberbike": {
        id: "veh-cyberbike",
            title: "Cyberbike",
            shortDescription: "Moto futuriste conçue pour les courses à grande vitesse dans les rues de néon.",
            longDescription: "Description détaillée de Cyberbike.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Cyberbike" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Cyberbike" } ]
    },
    "prt-scifi-miniature": {
        id: "prt-scifi-miniature",
            title: "Sci-Fi Miniature",
            shortDescription: "Figurine détaillée d'un soldat futuriste, optimisée pour l'impression 3D résine.",
            longDescription: "Description détaillée de Sci-Fi Miniature.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Sci-Fi+Miniature" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Sci-Fi+Miniature" } ]
    },
    "prt-cyberpunk-helmet": {
        id: "prt-cyberpunk-helmet",
            title: "Cyberpunk Helmet",
            shortDescription: "Réplique de casque portable avec des détails complexes, prête à être imprimée.",
            longDescription: "Description détaillée de Cyberpunk Helmet.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Cyberpunk+Helmet" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Cyberpunk+Helmet" } ]
    },
    "prt-mechanical-diorama": {
        id: "prt-mechanical-diorama",
            title: "Mechanical Diorama",
            shortDescription: "Diorama d'un atelier mécanique, conçu en plusieurs parties pour l'impression 3D.",
            longDescription: "Description détaillée de Mechanical Diorama.",
            thumbnail: { type: 'image', src: "https://via.placeholder.com/500x450/0a0a0a/ff0040?text=Mechanical+Diorama" },
            media: [ { type: 'image', src: "https://via.placeholder.com/1280x720/0a0a0a/ff0040?text=Mechanical+Diorama" } ]
    },
};

const projectsData = {
    cinematics: ["deadpool", "exo-armor", "samurai", "chrome-city"],
    environment: ["env-wasteland", "env-neon-district", "env-space-station", "env-underground-lab"],
    character: ["deadpool", "exo-armor", "samurai", "env-cyber-metropolis", "char-neon-assassin", "char-android-sentinel", "char-hacker-elite", "char-zombie-sculpt"],
    vehicle: ["veh-demoreel", "veh-nomad-rover", "veh-cyberbike"],
    print3d: ["prt-scifi-miniature", "prt-cyberpunk-helmet", "prt-mechanical-diorama"],
};

// ========================================
// State Management
// ========================================
let currentCategory = 'cinematics';
const carouselStates = {
    environment: 0,
    character: 0,
    vehicle: 0,
    print3d: 0
};

// ========================================
// Navigation
// ========================================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    // On rend le logo cliquable pour revenir à la catégorie par défaut
    const logo = document.querySelector('.logo');
    logo.style.cursor = 'pointer';
    logo.addEventListener('click', () => switchCategory('cinematics'));

    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const overlay = document.getElementById('overlay');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            switchCategory(category);
            closeMobileMenu();
        });
    });

    navToggle.addEventListener('click', () => {
        navList.classList.toggle('nav-open');
        overlay.classList.toggle('visible');
        document.body.classList.toggle('no-scroll'); // Empêche le scroll du body
    });

    overlay.addEventListener('click', closeMobileMenu);

    function closeMobileMenu() {
        navList.classList.remove('nav-open');
        overlay.classList.remove('visible');
        document.body.classList.remove('no-scroll');
    }
}

function switchCategory(category) {
    if (currentCategory === category) return;
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // Update sections
    document.querySelectorAll('.category-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(category).classList.add('active');
    
    currentCategory = category;
    
    // Initialize carousel if needed
    if (category !== 'cinematics' && category !== 'about') {
        // S'assurer que le carrousel est initialisé s'il ne l'a jamais été
        if (!document.getElementById(category).classList.contains('carousel-initialized')) {
            initSingleCarousel(category);
        }
        updateCarousel(category);
    }
}

// ========================================
// Carousel
// ========================================
function initCarousels() {
    const categories = ['environment', 'character', 'vehicle', 'print3d'];
    
    categories.forEach(category => {
        initSingleCarousel(category);
    });
}

function initSingleCarousel(category) {
    const section = document.getElementById(category);
    if (!section || section.classList.contains('carousel-initialized')) return;

    const prevBtn = section.querySelector('.carousel-btn-prev');
    const nextBtn = section.querySelector('.carousel-btn-next');
    
    prevBtn.addEventListener('click', () => navigateCarousel(category, -1));
    nextBtn.addEventListener('click', () => navigateCarousel(category, 1));
    section.classList.add('carousel-initialized');
}

function initSwipeableCarousels() {
    const carousels = document.querySelectorAll('.carousel-track');

    carousels.forEach(carousel => {
        let touchstartX = 0;
        let touchendX = 0;
        const category = carousel.closest('.carousel-section').id;

        carousel.addEventListener('touchstart', function(event) {
            touchstartX = event.changedTouches[0].screenX;
        }, false);

        carousel.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleSwipe();
        }, false); 

        function handleSwipe() {
            // Un swipe de 50px est nécessaire pour déclencher la navigation
            if (touchendX < touchstartX - 50) {
                // Swipe vers la gauche
                navigateCarousel(category, 1);
            }

            if (touchendX > touchstartX + 50) {
                // Swipe vers la droite
                navigateCarousel(category, -1);
            }
        }
    });
}


function navigateCarousel(category, direction) {
    const projects = projectsData[category].map(id => projectLibrary[id]);
    const currentIndex = carouselStates[category];
    
    let newIndex = currentIndex + direction;
    
    // Loop around
    if (newIndex < 0) {
        newIndex = projects.length - 1;
    } else if (newIndex >= projects.length) {
        newIndex = 0;
    }
    
    carouselStates[category] = newIndex;
    updateCarousel(category);
}

function updateCarousel(category) {
    const section = document.getElementById(category);
    const track = section.querySelector('.carousel-track');
    const projects = projectsData[category].map(id => projectLibrary[id]);
    const currentIndex = carouselStates[category];
    
    // Calculate indices for left, center, right
    const leftIndex = (currentIndex - 1 + projects.length) % projects.length;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % projects.length;
    
    // Get carousel items
    const leftItem = track.querySelector('.side-item.left');
    const centerItem = track.querySelector('.center-item');
    const rightItem = track.querySelector('.side-item.right');
    
    // Update content
    updateCarouselItem(leftItem, projects[leftIndex], category);
    updateCarouselItem(centerItem, projects[centerIndex], category);
    updateCarouselItem(rightItem, projects[rightIndex], category);
}

function updateCarouselItem(item, project, category) {
    // Clear existing content
    item.innerHTML = '';
    if (!project) return;

    const link = document.createElement('a');
    link.href = '#';
    link.className = 'carousel-card-link';
    link.dataset.projectId = project.id;
    link.dataset.category = category;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openProjectModal(project.id, category);
    });

    const thumbnailHTML = project.thumbnail.type === 'video'
        ? `<video autoplay loop muted playsinline><source src="${project.thumbnail.src}" type="video/mp4"></video>`
        : `<img src="${project.thumbnail.src}" alt="${project.title}">`;

    link.innerHTML = `
        ${thumbnailHTML}
        <div class="carousel-item-content">
            <h3>${project.title}</h3>
            <p>${project.shortDescription}</p>
        </div>
    `;

    item.appendChild(link);
}

// ========================================
// Cinematics Grid & Modal
// ========================================
function initCinematicsGrid() {
    const grid = document.querySelector('#cinematics .projects-grid');
    if (!grid) return;
    grid.innerHTML = ''; // Vider la grille au cas où

    projectsData.cinematics.forEach(projectId => {
        const project = projectLibrary[projectId];
        const creditHTML = project.credit ? `<div class="project-credit">${project.credit}</div>` : '';
        const cardHTML = `
            <a href="#" class="project-card-link" data-project-id="${project.id}">
                <article class="project-card">
                    <div class="project-image">
                        ${project.thumbnail.type === 'video' 
                            ? `<video autoplay loop muted playsinline><source src="${project.thumbnail.src}" type="video/mp4"></video>`
                            : `<img src="${project.thumbnail.src}" alt="${project.title}">`
                        }
                        ${creditHTML}
                    </div>
                    <div class="project-info">
                        <h3>${project.title}</h3>
                        <p>${project.shortDescription}</p>
                    </div>
                </article>
            </a>
        `;
        grid.innerHTML += cardHTML;
    });

    // Ajouter les écouteurs d'événements pour ouvrir la modale
    grid.addEventListener('click', (e) => {
        const link = e.target.closest('.project-card-link');
        if (!link) return;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.dataset.projectId;
            openProjectModal(projectId, 'cinematics');
        });
    });
}

function openProjectModal(projectId, category) {
    const project = projectLibrary[projectId];
    if (!project) return;

    // Vérifier si un média dans le projet a du son
    const projectHasSound = project.media.some(item => item.autoplayWithSound);

    const modal = document.getElementById('project-modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const modalGallery = modal.querySelector('.modal-gallery');

    modalTitle.textContent = project.title;
    modalDescription.textContent = project.longDescription;
    modalGallery.innerHTML = ''; // Vider la galerie

    // Appliquer la mise en page spécifique à la galerie si elle est définie
    modalGallery.classList.remove('stacked-centered'); // D'abord, nettoyer
    if (project.galleryLayout) {
        modalGallery.classList.add(project.galleryLayout);
    }

    project.media.forEach(mediaItem => {
        let mediaHTML = '';
        const layoutClass = mediaItem.layout ? `layout-${mediaItem.layout}` : 'layout-large';
        const captionHTML = mediaItem.caption ? `<p class="media-caption">${mediaItem.caption}</p>` : '';

        let mediaContent; // This will be a DOM element, not a string
        if (mediaItem.type === 'video') {
            mediaContent = document.createElement('video');
            mediaContent.playsInline = true;
            mediaContent.innerHTML = `<source src="${mediaItem.src}" type="video/mp4">`;

            if (mediaItem.autoplayWithSound) {
                mediaContent.autoplay = true;
                mediaContent.loop = true;
                mediaContent.muted = false;
                mediaContent.controls = false;
                mediaContent.volume = 0.1; // Volume réglé à 10%
            } else {
                mediaContent.autoplay = true;
                mediaContent.loop = true;
                mediaContent.muted = true;
            }
        } else if (mediaItem.type === 'sketchfab') {
            const sketchfabDiv = document.createElement('div');
            sketchfabDiv.className = 'sketchfab-container';
            sketchfabDiv.innerHTML = mediaItem.embedCode;
            mediaContent = sketchfabDiv;
        } else {
            mediaContent = document.createElement('img');
            mediaContent.src = mediaItem.src;
            mediaContent.alt = project.title;
        }

        const itemClass = project.mediaItemClass || 'modal-media-item';
        const mediaItemDiv = document.createElement('div');
        mediaItemDiv.className = `${itemClass} ${mediaItem.type === 'video' ? 'video-clickable' : ''}`;
        mediaItemDiv.appendChild(mediaContent);

        const wrapperDiv = document.createElement('div');
        wrapperDiv.className = `media-item-wrapper ${layoutClass}`;
        wrapperDiv.appendChild(mediaItemDiv);
        wrapperDiv.innerHTML += captionHTML;

        modalGallery.appendChild(wrapperDiv);
    });

    document.body.classList.add('modal-open');
    modal.classList.add('active');
}

function initModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const closeModalBtn = modal.querySelector('.modal-close');
    const modalOverlay = modal.querySelector('.modal-overlay');

    const closeModal = () => {
        document.body.classList.remove('modal-open');
        modal.classList.remove('active');
        // Arrêter toutes les vidéos dans la modale
        modal.querySelectorAll('video').forEach(video => {
            video.pause();
            video.muted = true; // Garantit que le son est coupé
        });
    };

    closeModalBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

function initImageViewer() {
    const viewer = document.getElementById('image-viewer');
    if (!viewer) return;

    const closeBtn = viewer.querySelector('.image-viewer-close');
    const overlay = viewer.querySelector('.image-viewer-overlay');
    const img = viewer.querySelector('img');

    const openViewer = (src) => {
        img.src = src;
        viewer.classList.add('active');
    };
    const closeViewer = () => viewer.classList.remove('active');

    document.querySelector('.modal-gallery').addEventListener('click', (e) => {
        const image = e.target.closest('.modal-media-item img');
        if (image) {
            openViewer(e.target.src);
        }
    });

    closeBtn.addEventListener('click', closeViewer);
    overlay.addEventListener('click', closeViewer);
}

function initVideoViewer() {
    const viewer = document.getElementById('video-viewer');
    if (!viewer) return;

    const closeBtn = viewer.querySelector('.video-viewer-close');
    const overlay = viewer.querySelector('.video-viewer-overlay');
    const video = viewer.querySelector('video');

    const openViewer = (src) => {
        video.src = src;
        // Mettre en pause les vidéos de la modale en arrière-plan
        document.querySelectorAll('#project-modal video').forEach(bgVideo => bgVideo.pause());
        viewer.classList.add('active');
    };
    const closeViewer = () => {
        viewer.classList.remove('active');
        video.pause();
        video.src = ""; // Arrête le chargement

        // Relancer les vidéos de la modale si elle est toujours ouverte
        if (document.getElementById('project-modal').classList.contains('active')) {
            document.querySelectorAll('#project-modal video').forEach(bgVideo => {
                // Ne relance que si la vidéo n'est pas censée être muette par défaut
                if (bgVideo.autoplay && !bgVideo.muted) {
                    bgVideo.play();
                }
            });
        }
    };

    document.querySelector('.modal-gallery').addEventListener('click', (e) => {
        const videoWrapper = e.target.closest('.modal-media-item.video-clickable');
        if (videoWrapper) {
            const videoSrc = videoWrapper.querySelector('video source')?.getAttribute('src');
            openViewer(videoSrc);
        }
    });
    closeBtn.addEventListener('click', closeViewer);
    overlay.addEventListener('click', closeViewer);
}

// ========================================
// Animations on Scroll
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ========================================
// Keyboard Navigation
// ========================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        if (currentCategory === 'cinematics' || currentCategory === 'about') return;
        
        if (e.key === 'ArrowLeft') {
            navigateCarousel(currentCategory, -1);
        } else if (e.key === 'ArrowRight') {
            navigateCarousel(currentCategory, 1);
        }
    });
}

// ========================================
// Initialize Everything
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initCinematicsGrid();
    initNavigation();
    initCarousels();
    initScrollAnimations();
    initKeyboardNavigation();
    initModal();
    initSwipeableCarousels();
    initImageViewer();
    initVideoViewer();
    
    // Add smooth reveal animation to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
        }, 100);
    }
});

// ========================================
// Utility: Debounce for performance
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add resize handler with debounce
window.addEventListener('resize', debounce(() => {
    // Re-initialize carousels on resize if needed
    if (currentCategory !== 'cinematics' && currentCategory !== 'about') {
        updateCarousel(currentCategory);
    }
}, 250));