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
                image: "./assets/images/projects/belyfted.png",
                link: "https://belyfted.com/"
            },
            {
                title: "EventLab",
                description: "Event Ticket Booking System",
                image: "./assets/images/projects/eventlab.png",
                link: "https://script.viserlab.com/eventlab"
            },
            {
                title: "PromptLab",
                description: "AI Prompt Marketplace",
                image: "./assets/images/projects/promptlab.png",
                link: "https://script.viserlab.com/promptlab"
            },
            {
                title: "TreeVest",
                description: "Tree Plantation Based Investment Platform",
                image: "./assets/images/projects/treevest.png",
                link: "https://script.viserlab.com/treevest"
            },
            {
                title: "HungryHub",
                description: "On Demand Food Ordering Platform",
                image: "./assets/images/projects/hungryhub.png",
                link: "https://script.viserlab.com/hungryhub"
            },
            {
                title: "Agrivest",
                description: "Agriculture and Livestock Investment Platform",
                image: "./assets/images/projects/agrivest.png",
                link: "https://script.viserlab.com/agrivest"
            },
            {
                title: "ServiceHUB",
                description: "On Demand Service Provider Marketplace",
                image: "./assets/images/projects/servicehub.png",
                link: "https://script.viserlab.com/servicehub"
            },
            {
                title: "ClipLab",
                description: "Professional Clipping Path Service Platform",
                image: "./assets/images/projects/cliplab.png",
                link: "https://script.viserlab.com/cliplab"
            },
            {
                title: "btcRR",
                description: "Bitcoin Investment Platform",
                image: "./assets/images/projects/btcrr.png",
                link: "https://script.viserlab.com/btcrr"
            },
            {
                title: "Kothay",
                description: "Sales Team with Real Time Tracking",
                image: "./assets/images/projects/kothay.png",
                link: "https://kothay.app/"
            },
            {
                title: "Html CSS JS Template",
                description: "Web Template",
                image: "./assets/images/projects/html_bbq.png",
                link: "https://tinyurl.com/jhb6fxbn"
            },
            {
                title: "iMentor",
                description: "Tutor Hiring Platform",
                image: "./assets/images/projects/imentor.png",
                link: "https://script.viserlab.com/imentor"
            },
            {
                title: "Ladies Market",
                description: "Ecommerce Website",
                image: "./assets/images/projects/ladiesmarket.png",
                link: "http://ladiesmarket.com.bd/en"
            },
            {
                title: "Ladies Market Mobile App",
                description: "Android/iOS Mobile App (React Native)",
                image: "./assets/images/projects/ladiesmarket_mobile_app.png",
                link: "#"
            },
            {
                title: "Python Desktop Software",
                description: "Desktop Software and Profit Analysis",
                image: "./assets/images/projects/Python_Desktop_Software.png",
                link: "#"
            },
            {
                title: "NodeJS Real-Time Chat App",
                description: "Chat Application (friend request, accept/reject/remove)",
                image: "./assets/images/projects/NodeJSChatApp.png",
                link: "#"
            },
            {
                title: "Python Selenium",
                description: "Webscraping and Automation",
                image: "./assets/images/projects/selenium.png",
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


function createProjectCard(item) {
    const card = document.createElement('div');
    card.className =
                    'bg-dark-700/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition hover:scale-105 duration-300 project-card';

                // Determine href
                const href = item.link !== "#" ? item.link : "javascript:void(0)";

                // Only show button if link is not "#"
                const viewButton = item.link !== "#"
                    ? `<a href="${item.link}" target="_blank" rel="noopener noreferrer"
            class="inline-block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded transition">
            View Project
        </a>`
                    : '';

                card.innerHTML = `
    <a href="${href}" ${item.link !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ''}>
        <div class="image-container bg-dark-600">
            <img src="${item.image}" alt="${item.title}" class="w-full object-cover">
        </div>
    </a>
    <div class="p-6">
        <a href="${href}" ${item.link !== "#" ? 'target="_blank" rel="noopener noreferrer"' : ''} class="text-xl font-bold mb-2 inline-block hover:text-orange-400">
            ${item.title}
        </a>
        <p class="text-gray-400 mb-4">${item.description}</p>
        ${viewButton}
    </div>
    `;

    return card;
}



document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    navToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
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