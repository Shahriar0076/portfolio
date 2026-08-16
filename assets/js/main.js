tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                dark: {
                    900: '#0a0a0a',
                    800: '#1a1a1a',
                    700: '#2a2a2a',
                }
            }
        }
    }
}

// Generate stars when page loads
document.addEventListener('DOMContentLoaded', function () {
    createStars();
    createSkillsStars();
    initCustomCursor();
    initPortfolioItems();
    setupScrollAnimations();
    highlightActiveNavLink();
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starsCount = 200;

    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random animation duration (2-5s)
        const duration = Math.random() * 3 + 2;
        star.style.setProperty('--duration', `${duration}s`);

        // Random float duration (20-60s)
        const floatDuration = Math.random() * 40 + 20;
        star.style.setProperty('--float-duration', `${floatDuration}s`);

        // Random delay (0-5s)
        star.style.animationDelay = `${Math.random() * 5}s`;

        // Add parallax effect by creating layers
        if (i % 3 === 0) {
            star.style.setProperty('--z-depth', '-100px');
            star.style.opacity = '0.6';
        } else if (i % 2 === 0) {
            star.style.setProperty('--z-depth', '-50px');
            star.style.opacity = '0.8';
        } else {
            star.style.setProperty('--z-depth', '0');
        }

        starsContainer.appendChild(star);
    }
}

function createSkillsStars() {
    const container = document.querySelector('.skills-stars-container');
    const starsCount = 30;

    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('skills-star');

        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random x position
        const xPos = Math.random() * 100;
        star.style.setProperty('--x-pos', `${xPos}%`);

        // Random float duration (10-30s)
        const floatDuration = Math.random() * 20 + 10;
        star.style.setProperty('--float-duration', `${floatDuration}s`);

        // Random delay (0-5s)
        star.style.animationDelay = `${Math.random() * 5}s`;

        // Random start position
        star.style.top = `${Math.random() * 100}%`;

        container.appendChild(star);
    }
}

function initCustomCursor() {
    // Skip custom cursor on touch devices (mobile/tablet)
    if (!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Outer cursor moves instantly
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    // Animate dot trailing
    function animateDot() {
        dotX += (mouseX - dotX) * 0.4; // follow with smoothing
        dotY += (mouseY - dotY) * 0.4;

        cursorDot.style.left = `${dotX}px`;
        cursorDot.style.top = `${dotY}px`;

        requestAnimationFrame(animateDot);
    }
    animateDot();

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(249, 115, 22, 0.3)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}

function initPortfolioItems() {
        const portfolioContainer = document.querySelector('#portfolio .grid');
        const viewMoreBtn = document.querySelector('#view-more-btn');

        // Define all portfolio items
        const allItems = [
            {
                title: "Belyfted",
                description: "Online Currency Exchange Platform (NextJS & Laravel)",
                image: "./assets/images/projects/belyfted.webp",
                link: "https://belyfted.com/"
            },
            {
                title: "EventLab",
                description: "Event Ticket Booking System",
                image: "./assets/images/projects/eventlab.webp",
                link: "https://script.viserlab.com/eventlab"
            },
            {
                title: "PromptLab",
                description: "AI Prompt Marketplace",
                image: "./assets/images/projects/promptlab.webp",
                link: "https://script.viserlab.com/promptlab"
            },
            {
                title: "TreeVest",
                description: "Tree Plantation Based Investment Platform",
                image: "./assets/images/projects/treevest.webp",
                link: "https://script.viserlab.com/treevest"
            },
            {
                title: "HungryHub",
                description: "On Demand Food Ordering Platform",
                image: "./assets/images/projects/hungryhub.webp",
                link: "https://script.viserlab.com/hungryhub"
            },
            {
                title: "Agrivest",
                description: "Agriculture and Livestock Investment Platform",
                image: "./assets/images/projects/agrivest.webp",
                link: "https://script.viserlab.com/agrivest"
            },
            {
                title: "ServiceHUB",
                description: "On Demand Service Provider Marketplace",
                image: "./assets/images/projects/servicehub.webp",
                link: "https://script.viserlab.com/servicehub"
            },
            {
                title: "ClipLab",
                description: "Professional Clipping Path Service Platform",
                image: "./assets/images/projects/cliplab.webp",
                link: "https://script.viserlab.com/cliplab"
            },
            {
                title: "BTCRR",
                description: "Bitcoin Investment Platform",
                image: "./assets/images/projects/btcrr.webp",
                link: "https://script.viserlab.com/btcrr"
            },
            {
                title: "Kothay",
                description: "Sales Team with Real Time Tracking",
                image: "./assets/images/projects/kothay.webp",
                link: "https://kothay.app/"
            },
            {
                title: "Html CSS JS Template",
                description: "Web Template",
                image: "./assets/images/projects/html_bbq.webp",
                link: "https://tinyurl.com/jhb6fxbn"
            },
            {
                title: "iMentor",
                description: "Tutor Hiring Platform",
                image: "./assets/images/projects/imentor.webp",
                link: "https://script.viserlab.com/imentor"
            },
            {
                title: "Ladies Market",
                description: "Ecommerce Website",
                image: "./assets/images/projects/ladiesmarket.webp",
                link: "http://ladiesmarket.com.bd/en"
            },
            {
                title: "Ladies Market Mobile App",
                description: "Android/iOS Mobile App (React Native)",
                image: "./assets/images/projects/ladiesmarket_mobile_app.webp",
                link: "#"
            },
            {
                title: "NodeJS Real-Time Chat App",
                description: "Chat Application (friend request, accept/reject/remove)",
                image: "./assets/images/projects/NodeJSChatApp.webp",
                link: "#"
            },
            {
                title: "Python Desktop Software",
                description: "Desktop Software and Profit Analysis",
                image: "./assets/images/projects/Python_Desktop_Software.webp",
                link: "#"
            },
            {
                title: "Python Selenium",
                description: "Webscraping and Automation",
                image: "./assets/images/projects/selenium.webp",
                link: "#"
            }
        ];


        let loadedItems = 0;
        const loadCount = 6;

        function loadMore() {
            const nextItems = allItems.slice(loadedItems, loadedItems + loadCount);
            nextItems.forEach(item => {
                const projectCard = createProjectCard(item);
                portfolioContainer.appendChild(projectCard);
            });
            loadedItems += nextItems.length;

            if (loadedItems >= allItems.length) {
                viewMoreBtn.classList.add('hidden');
            }
        }

        // Initially load 6
        loadMore();

        viewMoreBtn.addEventListener('click', loadMore);
    }


let imageScrollObserver = null;

function getImageScrollObserver() {
    if (!imageScrollObserver) {
        // rootMargin shrinks the observation root to a zero-height line at the
        // exact vertical center of the viewport, so the scroll only runs while
        // the card spans the middle of the screen.
        imageScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const img = entry.target.querySelector('.image-container img');
                if (img) img.classList.toggle('img-scroll', entry.isIntersecting);
            });
        }, { rootMargin: '-50% 0px -50% 0px' });
    }
    return imageScrollObserver;
}


function createProjectCard(item) {
    const card = document.createElement('div');
    card.className =
        'project-card group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-dark-700/80 to-dark-800/90 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-xl hover:shadow-orange-500/10';

    const href = item.link !== "#" ? item.link : "javascript:void(0)";
    const viewButton = item.link !== "#"
        ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300 shadow-md shadow-orange-600/20 hover:shadow-orange-500/40 group-hover:translate-x-0 translate-x-[-4px] hover:-translate-y-0.5">
            View Project
            <i class="fas fa-arrow-right text-xs transition-transform duration-300 group-hover:translate-x-1"></i>
        </a>`
        : '';

    const imageId = `img-${Math.random().toString(36).substr(2, 9)}`;

    card.innerHTML = `
    <a href="${href}" ${item.link !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ''} class="block" aria-label="Open ${item.title}">
        <div class="image-container relative overflow-hidden">
            <div class="spinner absolute inset-0 flex items-center justify-center bg-dark-800/50 z-10">
                <i class="fas fa-spinner fa-spin text-white text-2xl"></i>
            </div>
            <img id="${imageId}" src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="w-full object-cover opacity-0 transition-opacity duration-500">
            <div class="card-link-icon absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-orange-500">
                <i class="fas fa-arrow-up-right-from-square text-sm"></i>
            </div>
        </div>
    </a>
    <div class="flex flex-col flex-grow p-5">
        <a href="${href}" ${item.link !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ''} class="text-xl font-bold mb-2 inline-block transition-colors duration-300 group-hover:text-orange-400">
            ${item.title}
        </a>
        <p class="text-gray-400 mb-5 leading-relaxed">${item.description}</p>
        <div class="mt-auto">
            ${viewButton}
        </div>
    </div>
    `;

    // Wait for image to load before removing spinner
    const img = card.querySelector(`#${imageId}`);
    img.addEventListener('load', () => {
        img.classList.remove('opacity-0');
        card.querySelector('.spinner')?.remove();
    });

    // On touch devices: auto-play the slow image scroll when the card reaches the middle of the viewport
    const isTouch = !window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (isTouch) {
        getImageScrollObserver().observe(card);
    }

    return card;
}




document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-to-top');

    const updateScrollTopBtn = () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.remove('hidden');
        } else {
            scrollTopBtn.classList.add('hidden');
        }
    };

    window.addEventListener('scroll', updateScrollTopBtn, { passive: true });
    updateScrollTopBtn(); // set correct state on load

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


$(document).ready(function () {
    $('.slick-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 6 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 4 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 3 }
            }
        ]
    });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('form button[type="submit"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('disabledModal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', function () {
    document.getElementById('disabledModal').classList.add('hidden');
});


// Preloader Script
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('preloader');

    // Show preloader while everything loads
    window.addEventListener('load', function () {
        // Minimum display time for preloader (1.5 seconds)
        setTimeout(function () {
            preloader.classList.add('fade-out');

            // Remove preloader after fade out completes
            setTimeout(function () {
                preloader.style.display = 'none';
            }, 500); // Match this with the CSS transition time
        }, 1500);
    });

    // Fallback in case load event doesn't fire
    setTimeout(function () {
        preloader.classList.add('fade-out');
        setTimeout(function () {
            preloader.style.display = 'none';
        }, 500);
    }, 3000); // Maximum wait time of 3 seconds
});


// Scroll fade-up animation for sections (excluding experience)
function setupScrollAnimations() {
    // Select all sections except #experience
    const sections = document.querySelectorAll('section:not(#experience)');
    
    // Initially hide all sections except the first one
    sections.forEach((section, index) => {
        if (index > 0 || section.id === 'banner') {
            section.classList.add('section-fade');
        }
    });

    function checkScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // When the section is 20% from the top of the viewport
            if (sectionTop < windowHeight * 0.8) {
                section.classList.add('active');
            }
        });
    }

    // Run on initial load
    checkScroll();
    
    // Run on scroll
    window.addEventListener('scroll', checkScroll);
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupScrollAnimations();
});

// Highlight active nav link based on scroll position
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#nav-links a, #mobile-menu a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('text-orange-400');
            link.classList.add('hover:text-orange-400');
            
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('text-orange-400');
                link.classList.remove('hover:text-orange-400');
            }
        });
    });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    highlightActiveNavLink();
});