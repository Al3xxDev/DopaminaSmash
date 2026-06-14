/* ==========================================================================
   INDEX.JS - DOPAMINA SMASH BURGER INTERACTIVITY
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================================================
    // 1. DYNAMIC 3D PARALLAX TILT ON HERO BURGER
    // ==========================================================================
    const heroSection = document.getElementById('hero');
    const heroBurger = document.getElementById('hero-burger');
    
    if (heroSection && heroBurger) {
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            // Calculate mouse coordinates relative to center (-0.5 to 0.5)
            const xVal = (clientX / innerWidth) - 0.5;
            const yVal = (clientY / innerHeight) - 0.5;
            
            // Degrees of rotation (max 15 deg)
            const rotateX = -yVal * 25;
            const rotateY = xVal * 25;
            
            // Translate offset (max 15px shift)
            const translateX = xVal * 20;
            const translateY = yVal * 20;
            
            // Apply transition transforms smoothly (floats and tilts with cursor)
            heroBurger.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)`;
        });
        
        // Reset translation on mouse leave
        heroSection.addEventListener('mouseleave', () => {
            heroBurger.style.transform = 'rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
            heroBurger.style.transition = 'transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)';
        });
        
        // Re-enable smooth tracking when mouse enters again
        heroSection.addEventListener('mouseenter', () => {
            heroBurger.style.transition = 'none';
        });
    }

    // ==========================================================================
    // 2. SCROLL SPY FOR HEADER NAV & MENU CATEGORY TABS
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const tabLinks = document.querySelectorAll('.tab-link');
    const menuCategories = document.querySelectorAll('.menu-category');

    function handleScrollSpy() {
        const scrollPosition = window.scrollY + 120; // offset header height

        // 2a. Header Links scrollspy
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // 2b. Menu categories sticky tabs scrollspy
        menuCategories.forEach(category => {
            const categoryTop = category.offsetTop;
            const categoryHeight = category.offsetHeight;
            const categoryId = category.getAttribute('id');

            if (scrollPosition >= categoryTop && scrollPosition < categoryTop + categoryHeight) {
                tabLinks.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.getAttribute('href') === `#${categoryId}`) {
                        tab.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Trigger immediately on load

    // ==========================================================================
    // 3. SMOOTH NAVIGATION FOR TABS (MENU TABS)
    // ==========================================================================
    tabLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('href');
            const targetCategory = document.querySelector(targetId);
            
            if (targetCategory) {
                // Smooth scroll directly to the category section
                const offsetPosition = targetCategory.offsetTop - 90;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Set active class
                tabLinks.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            }
        });
    });

    // ==========================================================================
    // 4. LEAFLET CUSTOM MONOCHROME MAP LOADING
    // ==========================================================================
    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        // Salerno Piazza Flavio Gioia coordinates
        const latitude = 40.67812;
        const longitude = 14.76051;
        
        // Initialize Leaflet map
        const map = L.map('map-container', {
            scrollWheelZoom: false,
            zoomControl: true
        }).setView([latitude, longitude], 17);
        
        // Add monochrome Dark Matter CartoDB tiles
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);
        
        // Custom red pulse pin icon
        const customIcon = L.divIcon({
            className: 'custom-map-pin',
            html: `
                <div style="
                    background-color: #E02020; 
                    width: 14px; 
                    height: 14px; 
                    border-radius: 50%; 
                    border: 2.5px solid #ffffff; 
                    box-shadow: 0 0 10px rgba(224, 32, 32, 0.8);
                    animation: pulseMarker 1.8s infinite;
                "></div>
                <style>
                    @keyframes pulseMarker {
                        0% { box-shadow: 0 0 0 0 rgba(224, 32, 32, 0.7); }
                        70% { box-shadow: 0 0 0 10px rgba(224, 32, 32, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(224, 32, 32, 0); }
                    }
                </style>
            `,
            iconSize: [14, 14],
            iconAnchor: [7, 7]
        });
        
        // Add marker to map
        L.marker([latitude, longitude], { icon: customIcon }).addTo(map)
            .bindPopup(`
                <div style="font-family: 'Space Mono', monospace; padding: 5px; color: #111111; text-align: center;">
                    <strong style="font-size: 14px; text-transform: uppercase; color: #E02020; display: block; margin-bottom: 2px;">Dopamina Smash</strong>
                    <span style="font-size: 11px; color: #555555; display: block; margin-bottom: 8px;">Piazza Flavio Gioia, 2 - Salerno</span>
                    <a href="https://maps.app.goo.gl/NZU2qP6i4Zhkw6R87" target="_blank" rel="noopener noreferrer" style="
                        display: inline-block;
                        background-color: #E02020;
                        color: #ffffff;
                        padding: 6px 12px;
                        font-size: 10px;
                        font-weight: 700;
                        text-transform: uppercase;
                        border-radius: 4px;
                        text-decoration: none;
                        transition: background-color 0.2s ease;
                    " onmouseover="this.style.backgroundColor='#C01010'" onmouseout="this.style.backgroundColor='#E02020'">
                        Apri in Google Maps
                    </a>
                </div>
            `)
            .openPopup();
    }

    // ==========================================================================
    // 5. LANGUAGE SWITCHER (ITALIANO <-> ENGLISH)
    // ==========================================================================
    const langSwitchBtn = document.getElementById('lang-switch');
    let currentLang = 'it';

    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            currentLang = currentLang === 'it' ? 'en' : 'it';
            
            // Toggle active state classes
            if (currentLang === 'en') {
                langSwitchBtn.classList.add('eng-active');
                langSwitchBtn.setAttribute('aria-label', 'Switch to Italian');
            } else {
                langSwitchBtn.classList.remove('eng-active');
                langSwitchBtn.setAttribute('aria-label', 'Switch to English');
            }

            // Update text for all elements with data-it and data-en
            const translatable = document.querySelectorAll('[data-it][data-en]');
            translatable.forEach(el => {
                const hasChildren = el.children.length > 0;
                // If it contains tags we want to translate or handle HTML structure
                if (hasChildren || el.innerHTML.includes('<')) {
                    el.innerHTML = el.getAttribute(`data-${currentLang}`);
                } else {
                    el.textContent = el.getAttribute(`data-${currentLang}`);
                }
            });
        });
    }

    // ==========================================================================
    // 6. MOBILE HAMBURGER MENU TOGGLE
    // ==========================================================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-nav-cta');
        
        const toggleMenu = () => {
            mobileMenuToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('mobile-menu-open');
        };
        
        mobileMenuToggle.addEventListener('click', toggleMenu);
        
        // Close menu and smooth scroll when clicking any link
        mobileLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                // If it's an external link let it behave normally
                if (href.startsWith('http')) {
                    toggleMenu();
                    return;
                }
                
                // If it is a dummy link (like order button trigger), don't attempt to scroll
                if (href === '#' || href.startsWith('javascript')) {
                    toggleMenu();
                    return;
                }
                
                e.preventDefault();
                toggleMenu();
                
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offsetPosition = targetElement.offsetTop - 70; // Offset mobile header height
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ==========================================================================
    // 7. DELIVERY PLATFORM SELECTOR MODAL
    // ==========================================================================
    const deliveryModal = document.getElementById('delivery-modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const orderTriggers = document.querySelectorAll('#header-ordina-cta, .mobile-nav-cta, #btn-hero-delivery, .mobile-cta-btn');

    if (deliveryModal && modalOverlay && modalClose) {
        const openModal = (e) => {
            e.preventDefault();
            deliveryModal.classList.add('modal-active');
            document.body.classList.add('modal-open');
        };

        const closeModal = () => {
            deliveryModal.classList.remove('modal-active');
            document.body.classList.remove('modal-open');
        };

        // Bind click events to all "Ordina" triggers
        orderTriggers.forEach(btn => {
            btn.addEventListener('click', openModal);
        });

        // Close events
        modalClose.addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', closeModal);

        // Also close when clicking a delivery card (so it doesn't stay open behind the new window)
        const deliveryCards = deliveryModal.querySelectorAll('.delivery-card');
        deliveryCards.forEach(card => {
            card.addEventListener('click', closeModal);
        });
        
        // Escape key close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && deliveryModal.classList.contains('modal-active')) {
                closeModal();
            }
        });
    }
});
