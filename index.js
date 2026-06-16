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

    // Helper function to calculate absolute offset top relative to the document
    const getAbsoluteOffsetTop = (element) => {
        let top = 0;
        let curr = element;
        while (curr) {
            top += curr.offsetTop;
            curr = curr.offsetParent;
        }
        return top;
    };

    // ==========================================================================
    // 2. SCROLL SPY FOR HEADER NAV & MENU CATEGORY TABS
    // ==========================================================================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    const tabLinks = document.querySelectorAll('.tab-link');
    const menuCategories = document.querySelectorAll('.menu-category');

    let isScrollingProgrammatically = false;
    let scrollTimeout = null;

    let cachedSectionPositions = [];
    let cachedCategoryPositions = [];
    let cachedHeaderHeight = 80;

    function cacheLayoutValues() {
        cachedHeaderHeight = document.querySelector('.sticky-header')?.offsetHeight || 80;
        
        cachedSectionPositions = Array.from(sections).map(section => ({
            id: section.getAttribute('id'),
            top: getAbsoluteOffsetTop(section),
            height: section.offsetHeight
        }));
        
        cachedCategoryPositions = Array.from(menuCategories).map(category => ({
            id: category.getAttribute('id'),
            top: getAbsoluteOffsetTop(category),
            height: category.offsetHeight
        }));
    }

    function handleScrollSpy() {
        if (isScrollingProgrammatically) return;
        const scrollPosition = window.scrollY + cachedHeaderHeight + 25;
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 15);

        // 2a. Header Links scrollspy
        if (isAtBottom && cachedSectionPositions.length > 0) {
            const lastSecId = cachedSectionPositions[cachedSectionPositions.length - 1].id;
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${lastSecId}`) {
                    link.classList.add('active');
                }
            });
        } else {
            cachedSectionPositions.forEach(sec => {
                if (scrollPosition >= sec.top && scrollPosition < sec.top + sec.height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sec.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }

        // 2b. Menu categories sticky tabs scrollspy
        if (isAtBottom && cachedCategoryPositions.length > 0) {
            const lastCatId = cachedCategoryPositions[cachedCategoryPositions.length - 1].id;
            tabLinks.forEach(tab => {
                tab.classList.remove('active');
                if (tab.getAttribute('href') === `#${lastCatId}`) {
                    tab.classList.add('active');
                }
            });
        } else {
            cachedCategoryPositions.forEach(cat => {
                if (scrollPosition >= cat.top && scrollPosition < cat.top + cat.height) {
                    tabLinks.forEach(tab => {
                        tab.classList.remove('active');
                        if (tab.getAttribute('href') === `#${cat.id}`) {
                            tab.classList.add('active');
                        }
                    });
                }
            });
        }
    }

    // Populate initial layout cache and bind updates to resize and resources load events
    cacheLayoutValues();
    window.addEventListener('load', cacheLayoutValues);
    window.addEventListener('resize', cacheLayoutValues);

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Trigger immediately on load

    // ==========================================================================
    // 2c. SMOOTH NAVIGATION FOR HEADER LINKS
    // ==========================================================================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    isScrollingProgrammatically = true;
                    const headerHeight = document.querySelector('.sticky-header')?.offsetHeight || 80;
                    const offsetPosition = getAbsoluteOffsetTop(targetElement) - headerHeight;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Update active nav link immediately
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');

                    if (scrollTimeout) clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        isScrollingProgrammatically = false;
                        handleScrollSpy();
                    }, 800);
                }
            }
        });
    });

    // ==========================================================================
    // 3. SMOOTH NAVIGATION FOR TABS (MENU TABS)
    // ==========================================================================
    tabLinks.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('href');
            const targetCategory = document.querySelector(targetId);
            
            if (targetCategory) {
                isScrollingProgrammatically = true;
                const headerHeight = document.querySelector('.sticky-header')?.offsetHeight || 80;
                // Scroll directly to the category section, offsetting header height plus a 20px padding gap
                const offsetPosition = getAbsoluteOffsetTop(targetCategory) - headerHeight - 20;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Set active class immediately and lock scrollspy temporarily
                tabLinks.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    isScrollingProgrammatically = false;
                    handleScrollSpy();
                }, 800);
            }
        });
    });

    // ==========================================================================
    // 4. LEAFLET CUSTOM MONOCHROME MAP LOADING
    // ==========================================================================
    // Helper to dynamically load external scripts and stylesheets
    const loadResource = (url, type) => {
        return new Promise((resolve, reject) => {
            if (type === 'css') {
                if (document.querySelector(`link[href="${url}"]`)) {
                    resolve();
                    return;
                }
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = url;
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            } else {
                if (document.querySelector(`script[src="${url}"]`)) {
                    resolve();
                    return;
                }
                const script = document.createElement('script');
                script.src = url;
                script.defer = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            }
        });
    };

    const mapContainer = document.getElementById('map-container');
    if (mapContainer) {
        const initializeMap = () => {
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
            const marker = L.marker([latitude, longitude], { 
                icon: customIcon,
                title: "Dopamina Smash Salerno"
            }).addTo(map);

            // Add aria-label and role for accessibility screen readers
            const markerElem = marker.getElement();
            if (markerElem) {
                markerElem.setAttribute('aria-label', 'Dopamina Smash Salerno Map Marker');
                markerElem.setAttribute('role', 'button');
            }

            marker.bindPopup(`
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
        };

        const loadMap = async () => {
            if (loadMap.loaded) return;
            loadMap.loaded = true;
            try {
                await Promise.all([
                    loadResource('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', 'css'),
                    loadResource('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', 'js')
                ]);
                initializeMap();
            } catch (err) {
                console.error("Failed to load Leaflet resources:", err);
                loadMap.loaded = false;
            }
        };

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        loadMap();
                        observer.unobserve(mapContainer);
                    }
                });
            }, {
                rootMargin: '200px'
            });
            observer.observe(mapContainer);
        } else {
            window.addEventListener('load', loadMap);
        }
    }

    // ==========================================================================
    // 5. LANGUAGE SWITCHER (ITALIANO <-> ENGLISH)
    // ==========================================================================
    const langSwitchBtn = document.getElementById('lang-switch');
    let currentLang = localStorage.getItem('dopamina_lang') || 'it';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('dopamina_lang', lang);
        document.documentElement.lang = lang;

        if (langSwitchBtn) {
            if (lang === 'en') {
                langSwitchBtn.classList.add('eng-active');
                langSwitchBtn.setAttribute('aria-label', 'Switch to Italian');
            } else {
                langSwitchBtn.classList.remove('eng-active');
                langSwitchBtn.setAttribute('aria-label', 'Switch to English');
            }
        }

        // Update text for all elements with data-it and data-en
        const translatable = document.querySelectorAll('[data-it][data-en]');
        translatable.forEach(el => {
            const hasChildren = el.children.length > 0;
            // If it contains tags we want to translate or handle HTML structure
            if (hasChildren || el.innerHTML.includes('<')) {
                el.innerHTML = el.getAttribute(`data-${lang}`);
            } else {
                el.textContent = el.getAttribute(`data-${lang}`);
            }
            
            // Handle aria-label translations if they exist in data attributes
            const ariaIt = el.getAttribute('data-aria-it');
            const ariaEn = el.getAttribute('data-aria-en');
            if (ariaIt && ariaEn) {
                el.setAttribute('aria-label', lang === 'en' ? ariaEn : ariaIt);
            }
        });
    }

    // Apply saved or default language on load
    applyLanguage(currentLang);

    if (langSwitchBtn) {
        langSwitchBtn.addEventListener('click', () => {
            const nextLang = currentLang === 'it' ? 'en' : 'it';
            applyLanguage(nextLang);
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
                    isScrollingProgrammatically = true;
                    const offsetPosition = getAbsoluteOffsetTop(targetElement) - 70; // Offset mobile header height
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    if (scrollTimeout) clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        isScrollingProgrammatically = false;
                        handleScrollSpy();
                    }, 800);
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
            openModal.focusedElementBeforeModal = document.activeElement;
            deliveryModal.removeAttribute('inert');
            deliveryModal.classList.add('modal-active');
            deliveryModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            setTimeout(() => modalClose.focus(), 50);
        };

        const closeModal = () => {
            if (openModal.focusedElementBeforeModal && openModal.focusedElementBeforeModal !== document.body) {
                openModal.focusedElementBeforeModal.focus();
            } else if (document.activeElement) {
                document.activeElement.blur();
            }
            deliveryModal.classList.remove('modal-active');
            deliveryModal.setAttribute('aria-hidden', 'true');
            deliveryModal.setAttribute('inert', '');
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

    // ==========================================================================
    // 8. PROMOTIONAL POPUP MODAL (WIN A FREE DOSE)
    // ==========================================================================
    const promoModal = document.getElementById('promo-modal');
    const promoOverlay = document.getElementById('promo-overlay');
    const promoClose = document.getElementById('promo-close');
    const promoCta = document.querySelector('.promo-cta-btn');

    if (promoModal && promoOverlay && promoClose) {
        const closePromo = () => {
            if (openPromo.focusedElementBeforeModal && openPromo.focusedElementBeforeModal !== document.body) {
                openPromo.focusedElementBeforeModal.focus();
            } else if (document.activeElement) {
                document.activeElement.blur();
            }
            promoModal.classList.remove('modal-active');
            promoModal.setAttribute('aria-hidden', 'true');
            promoModal.setAttribute('inert', '');
            // Only unlock scroll if delivery modal isn't also open
            if (!deliveryModal || !deliveryModal.classList.contains('modal-active')) {
                document.body.classList.remove('modal-open');
            }
        };

        const openPromo = () => {
            openPromo.focusedElementBeforeModal = document.activeElement;
            promoModal.removeAttribute('inert');
            promoModal.classList.add('modal-active');
            promoModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            setTimeout(() => promoClose.focus(), 50);
        };

        // Close events
        promoClose.addEventListener('click', closePromo);
        promoOverlay.addEventListener('click', closePromo);
        if (promoCta) {
            promoCta.addEventListener('click', closePromo);
        }

        // Escape key close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && promoModal.classList.contains('modal-active')) {
                closePromo();
            }
        });

        // Trigger after a 100ms delay on every page load
        setTimeout(() => {
            // Ensure we don't open it if the delivery modal is already active
            if (!deliveryModal || !deliveryModal.classList.contains('modal-active')) {
                openPromo();
            }
        }, 100);
    }

    // Defer hero video autoplay to decrease initial page weight
    const heroVideo = document.getElementById('hero-burger');
    if (heroVideo) {
        window.addEventListener('load', () => {
            heroVideo.play().catch((err) => {
                console.warn("Hero video playback postponed/prevented:", err);
            });
        });
    }
});
