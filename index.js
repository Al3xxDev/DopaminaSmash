// ==========================================
// DATA DICTIONARIES (Products, Reviews, Translations)
// ==========================================

const PRODUCTS = [
  // Smash Burgers
  {
    id: "burger-mono",
    category: "smash",
    price: 7.90,
    image: "assets/food/BurgerMono.png",
    badge: null,
    isSide: false,
    name_it: "Smash Monodose",
    name_en: "Smash Single",
    ingredients_it: "Potatoes Bun, Hamburger 120GR, Cheddar, Cipolla Rossa Marinata, Cetriolo Marinato, Insalata, Salsa Dopamina",
    ingredients_en: "Potatoes Bun, Hamburger 120G, Cheddar, Marinated Red Onion, Marinated Pickle, Salad, Dopamina Sauce"
  },
  {
    id: "burger-doppia",
    category: "smash",
    price: 10.90,
    image: "assets/food/BurgerDoppiaDose.png",
    badge: { it: "Più Venduto", en: "Best Seller" },
    isSide: false,
    name_it: "Smash Doppiadose",
    name_en: "Smash Double",
    ingredients_it: "Potatoes Bun, Hamburger 120GR x 2, Cheddar, Cipolla Rossa Marinata, Cetriolo Marinato, Insalata, Salsa Dopamina",
    ingredients_en: "Potatoes Bun, Hamburger 120G x 2, Cheddar, Marinated Red Onion, Marinated Pickle, Salad, Dopamina Sauce"
  },
  {
    id: "burger-overdose",
    category: "smash",
    price: 13.90,
    image: "assets/food/BurgerOverDose.png",
    badge: { it: "Sfida", en: "Challenge" },
    isSide: false,
    name_it: "Smash Overdose",
    name_en: "Smash Overdose",
    ingredients_it: "Potatoes Bun, Hamburger 120GR x 3, Cheddar, Cipolla Rossa Marinata, Cetriolo Marinato, Insalata, Salsa Dopamina",
    ingredients_en: "Potatoes Bun, Hamburger 120G x 3, Cheddar, Marinated Red Onion, Marinated Pickle, Salad, Dopamina Sauce"
  },
  {
    id: "jam-mono",
    category: "smash",
    price: 8.90,
    image: "assets/food/HotSmashJamMono.png",
    badge: { it: "Piccante", en: "Spicy" },
    isSide: false,
    name_it: "Hot Smash Jam Monodose",
    name_en: "Hot Smash Jam Single",
    ingredients_it: "Potatoes Bun, Hamburger 120GR, Cheddar, Bacon Jam, Jalapeño, Salsa Dopamina",
    ingredients_en: "Potatoes Bun, Hamburger 120G, Cheddar, Bacon Jam, Jalapeño, Dopamina Sauce"
  },
  {
    id: "jam-doppia",
    category: "smash",
    price: 11.90,
    image: "assets/food/HotSmashJamDoppia.png",
    badge: { it: "Piccante", en: "Spicy" },
    isSide: false,
    name_it: "Hot Smash Jam Doppiadose",
    name_en: "Hot Smash Jam Double",
    ingredients_it: "Potatoes Bun, Hamburger 120GR x 2, Cheddar, Bacon Jam, Jalapeño, Salsa Dopamina",
    ingredients_en: "Potatoes Bun, Hamburger 120G x 2, Cheddar, Bacon Jam, Jalapeño, Dopamina Sauce"
  },
  {
    id: "burger-baby",
    category: "smash",
    price: 6.00,
    image: "assets/food/BabyBurger.png",
    badge: { it: "Bimbi", en: "Kids" },
    isSide: false,
    name_it: "Baby Burger",
    name_en: "Kid Smash Burger",
    ingredients_it: "1x Smash Beef Patty (100g), American Cheddar, Ketchup",
    ingredients_en: "1x Smash Beef Patty (100g), American Cheddar, Ketchup"
  },

  // Chicken Burgers
  {
    id: "chicken-crispy",
    category: "chicken",
    price: 8.50,
    image: "assets/food/Chicken.png",
    badge: { it: "Croccante", en: "Crispy" },
    isSide: false,
    name_it: "Crispy Chicken",
    name_en: "Chicken",
    ingredients_it: "Petto di pollo super croccante, Insalata Coleslaw, Cetriolini artigianali, Cipolle in agrodolce, Salsa Mayo",
    ingredients_en: "Super crispy chicken breast, Coleslaw salad, homemade pickles, sweet & sour onions, Mayo sauce"
  },
  {
    id: "chicken-menu",
    category: "chicken",
    price: 11.50,
    image: "assets/food/ChcickenMenu.png",
    badge: { it: "Menu Completo", en: "Full Menu" },
    isSide: false,
    name_it: "Chicken Burger Menu",
    name_en: "Chicken Menu",
    ingredients_it: "Crispy Chicken burger servito con una porzione abbondante di Patatine fritte croccanti e bibita a scelta",
    ingredients_en: "Crispy Chicken burger served with a generous side of crispy French fries and your choice of soft drink"
  },

  // Veggie Burgers
  {
    id: "veggie-burger",
    category: "veggie",
    price: 9.90,
    image: "assets/food/Veggie.png",
    badge: { it: "Vegetariano", en: "Vegetarian" },
    isSide: false,
    name_it: "Veggie Burger",
    name_en: "Veggie",
    ingredients_it: "Potatoes Bun, Fungo Lion's Mane (Az. Leone Bianco), Pomodoro Arrosto, Cavolo Rosso Marinato, Insalata, Salsa Dopamina ai Funghetti",
    ingredients_en: "Potatoes Bun, Lion's Mane Mushroom (Leone Bianco Farm), Roasted Tomato, Marinated Red Cabbage, Salad, Mushroom Dopamina Sauce"
  },
  {
    id: "veggie-menu",
    category: "veggie",
    price: 9.90,
    image: "assets/food/veggieMenu.png",
    badge: { it: "Menu Completo", en: "Full Menu" },
    isSide: false,
    name_it: "Veggie Burger Menu",
    name_en: "Veggie Menu",
    ingredients_it: "Veggie Burger servito con una porzione abbondante di Patatine fritte croccanti e bibita a scelta (Con DopaCiock +3,00€)",
    ingredients_en: "Veggie Burger served with a generous side of crispy French fries and your choice of soft drink (With DopaCiock +3,00€)"
  },

  // Fried (Sides)
  {
    id: "fries-mono",
    category: "fried",
    price: 3.50,
    image: "assets/food/FriesMono.png",
    badge: null,
    isSide: true,
    name_it: "Patatine Fritte Mono",
    name_en: "French Fries Single",
    ingredients_it: "Patatine fritte con buccia, salate alla perfezione, servite calde e super croccanti",
    ingredients_en: "Skin-on French fries, perfectly salted, served hot and super crispy"
  },
  {
    id: "fries-doppia",
    category: "fried",
    price: 5.00,
    image: "assets/food/friesDoppiaDose.png",
    badge: { it: "Porzione Doppia", en: "Double Size" },
    isSide: true,
    name_it: "Patatine Fritte Dopiadose",
    name_en: "French Fries Double",
    ingredients_it: "Porzione generosa di patatine fritte croccanti con buccia, perfette da condividere",
    ingredients_en: "Generous portion of crispy skin-on French fries, perfect for sharing"
  },
  {
    id: "nuggets-mono",
    category: "fried",
    price: 6.00,
    image: "assets/food/NuggetsMono.png",
    badge: null,
    isSide: true,
    name_it: "Chicken Nuggets (6 Pz)",
    name_en: "Chicken Nuggets (6 Pcs) + Hot Dopamina",
    ingredients_it: "6 pepite di pollo dorate e croccanti, servite con l'iconica Salsa Dopamina artigianale",
    ingredients_en: "6 golden crispy chicken nuggets, served with our iconic homemade Dopamina Sauce"
  },
  {
    id: "nuggets-doppia",
    category: "fried",
    price: 10.00,
    image: "assets/food/NuggetsDouble.png",
    badge: { it: "Consigliato", en: "Recommended" },
    isSide: true,
    name_it: "Chicken Nuggets (12 Pz)",
    name_en: "Chicken Nuggets (12 Pcs) + Hot Dopamina",
    ingredients_it: "12 pepite di pollo dorate e croccanti, servite con l'iconica Salsa Dopamina artigianale",
    ingredients_en: "12 golden crispy chicken nuggets, served with our iconic homemade Dopamina Sauce"
  },

  // Dessert
  {
    id: "dessert-ciok",
    category: "dessert",
    price: 4.50,
    image: "assets/food/DopaCiok.png",
    badge: { it: "Dolce", en: "Sweet" },
    isSide: false,
    name_it: "DopaCiok",
    name_en: "DopaCiok",
    ingredients_it: "Soffice bun dorato ripieno di golosa crema spalmabile al cioccolato artigianale e granella di nocciole",
    ingredients_en: "Soft golden bun stuffed with delicious artisanal chocolate spread and chopped hazelnuts"
  },

  // Drinks
  {
    id: "drink-acqua-nat",
    category: "drink",
    price: 1.00,
    image: "assets/food/AcquaNaturale.png",
    badge: null,
    isSide: false,
    name_it: "Acqua Naturale 50cl",
    name_en: "Still Water 50cl",
    ingredients_it: "Acqua oligominerale naturale in bottiglia di vetro",
    ingredients_en: "Still mineral water served in a glass bottle"
  },
  {
    id: "drink-acqua-friz",
    category: "drink",
    price: 1.00,
    image: "assets/food/AcquzFrizzante.png",
    badge: null,
    isSide: false,
    name_it: "Acqua Frizzante 50cl",
    name_en: "Sparkling Water 50cl",
    ingredients_it: "Acqua oligominerale frizzante in bottiglia di vetro",
    ingredients_en: "Sparkling mineral water served in a glass bottle"
  },
  {
    id: "drink-coca",
    category: "drink",
    price: 3.00,
    image: "assets/food/Coca.png",
    badge: null,
    isSide: false,
    name_it: "Coca-Cola 33cl",
    name_en: "Coca-Cola 33cl",
    ingredients_it: "La classica bibita analcolica rinfrescante in lattina",
    ingredients_en: "Classic refreshing soft drink in a can"
  },
  {
    id: "drink-coca-zero",
    category: "drink",
    price: 3.00,
    image: "assets/food/cocaZero.png",
    badge: null,
    isSide: false,
    name_it: "Coca-Cola Zero 33cl",
    name_en: "Coca-Cola Zero 33cl",
    ingredients_it: "Il gusto inconfondibile di Coca-Cola con zero zuccheri e calorie",
    ingredients_en: "Unmistakable Coca-Cola taste with zero sugar and zero calories"
  },
  {
    id: "drink-fanta",
    category: "drink",
    price: 3.00,
    image: "assets/food/Fanta.png",
    badge: null,
    isSide: false,
    name_it: "Fanta 33cl",
    name_en: "Fanta 33cl",
    ingredients_it: "Bibita analcolica frizzante al gusto arancia",
    ingredients_en: "Sparkling orange-flavored carbonated soft drink in a can"
  },
  {
    id: "drink-sprite",
    category: "drink",
    price: 3.00,
    image: "assets/food/sprite.png",
    badge: null,
    isSide: false,
    name_it: "Sprite 33cl",
    name_en: "Sprite 33cl",
    ingredients_it: "Bibita gassata rinfrescante al gusto limone e lime",
    ingredients_en: "Refreshing lemon-lime carbonated soft drink in a can"
  },
  {
    id: "drink-heineken",
    category: "drink",
    price: 4.00,
    image: "assets/food/Heineken.png",
    badge: null,
    isSide: false,
    name_it: "Birra Heineken 33cl",
    name_en: "Heineken Beer 33cl",
    ingredients_it: "Birra lager chiara premium dal gusto equilibrato",
    ingredients_en: "Premium pale lager beer with a crisp and balanced taste"
  },

  // Extras
  {
    id: "ketchup",
    category: "extra",
    price: 0.50,
    image: "assets/menu/extra.png",
    badge: null,
    isSide: false,
    name_it: "Ketchup",
    name_en: "Ketchup",
    ingredients_it: "Ketchup",
    ingredients_en: "Ketchup"
  },
  {
    id: "mayo",
    category: "extra",
    price: 0.50,
    image: "assets/menu/extra.png",
    badge: null,
    isSide: false,
    name_it: "Mayo",
    name_en: "Mayo",
    ingredients_it: "Mayo",
    ingredients_en: "Mayo"
  },
  {
    id: "senape-mayo",
    category: "extra",
    price: 0.50,
    image: "assets/menu/extra.png",
    badge: null,
    isSide: false,
    name_it: "Senape Mayo",
    name_en: "Mustard Mayo",
    ingredients_it: "Senape Mayo",
    ingredients_en: "Mustard Mayo"
  },
  {
    id: "dopamina-sauce",
    category: "extra",
    price: 1.00,
    image: "assets/menu/extra.png",
    badge: null,
    isSide: false,
    name_it: "Salsa Dopamina",
    name_en: "Dopamine Sauce",
    ingredients_it: "Salsa Dopamina fatta in casa",
    ingredients_en: "Homemade Dopamina Sauce"
  },
  {
    id: "hot-dopamine-sauce",
    category: "extra",
    price: 1.00,
    image: "assets/menu/extra.png",
    badge: null,
    isSide: false,
    name_it: "Salsa Hot Dopamina",
    name_en: "Hot Dopamine Sauce",
    ingredients_it: "Salsa Hot Dopamina fatta in casa",
    ingredients_en: "Homemade Hot Dopamina Sauce"
  },
  {
    id: "cheese-cheddar",
    category: "extra",
    price: 0.80,
    image: "assets/menu/extra.png",
    badge: null,
    isSide: false,
    name_it: "Formaggio Cheddar",
    name_en: "Cheddar Cheese",
    ingredients_it: "Formaggio Cheddar",
    ingredients_en: "Cheddar Cheese"
  },
];

const REVIEWS = [
  {
    rating: 5,
    author: "Marco R.",
    text_it: "I burger migliori di tutta Salerno! La crosticina (reazione di Maillard) del Dopiadose è da impazzire. Servizio rapido e gentilissimo.",
    text_en: "The best burgers in Salerno! The crispy crust on the Dopiadose is insane. Super fast and very friendly service."
  },
  {
    rating: 5,
    author: "Giulia M.",
    text_it: "Posto piccolo ma accogliente. Il panino con il pollo croccante e la coleslaw è pazzesco, super saporito. Prezzi onestissimi.",
    text_en: "Small but cozy spot. The crispy chicken burger with coleslaw is awesome, super tasty. Extremely honest prices."
  },
  {
    rating: 5,
    author: "Luigi P.",
    text_it: "Hot Smash Jam pazzesco per chi ama il piccante! Atmosfera informale perfetta per una serata tra amici o in famiglia.",
    text_en: "Hot Smash Jam is crazy for those who love spicy food! Cozy informal atmosphere perfect for a night out with friends or family."
  },
  {
    rating: 5,
    author: "Sofia V.",
    text_it: "Lo staff è di una gentilezza disarmante. Le patatine fritte hanno una salatura e una croccantezza magiche. Diventerà una tappa fissa!",
    text_en: "The staff's kindness is disarming. The French fries have a magical crunch and saltiness. This is going to be a regular spot!"
  }
];

const TRANSLATIONS = {
  it: {
    nav_concept: "Concept",
    nav_menu: "Menu",
    nav_reviews: "Recensioni",
    nav_location: "Dove Siamo",

    hero_title: "START YOUR TRIP. SMASH YOUR BRAIN",
    hero_subtitle: "Il vero Smash Burger americano a Salerno.",
    hero_cta: "Scopri il menu",

    concept_title_prefix: "La scienza dello ",
    concept_p1: "La magia dello smash burger sta tutta nella reazione di Maillard. Quando la polpetta di manzo freschissima viene schiacciata con forza sulla piastra rovente, i succhi rimangono intrappolati all'interno mentre si forma una crosticina croccante, saporita e irresistibile all'esterno.",
    concept_p2: "Adagiamo questa prelibatezza in un morbidissimo bun artigianale al burro (potato roll), arricchendola con cetriolini fatti in casa e cipolle agrodolci bilanciate alla perfezione. Una vera e propria esplosione chimica di piacere per il tuo palato.",

    menu_main_title: "Il Menu",
    sides_title: "Contorni & Sfizi",

    reviews_title: "La dipendenza dei nostri clienti",

    hours_heading: "Orari",
    location_heading: "Dove Siamo",

    day_monday: "Lunedì",
    day_tue_thu: "Martedì - Giovedì",
    day_fri_sat: "Venerdì - Sabato",
    day_sunday: "Domenica",

    btn_call: "Chiama Ora",
    map_hint: "Apri Mappa",
    footer_copyright: "© 2026 Dopamina Smash Burger. Tutti i diritti riservati. P.IVA 0899767868.",

    gallery_title: "L'Esperienza Dopamina",
    caption_place: "Il Locale",
    caption_cooking: "Cucina a Vista",
    caption_burger: "Il Vero Smash",
    caption_packaging: "Pronto al Trip"
  },
  en: {
    nav_concept: "Concept",
    nav_menu: "Menu",
    nav_reviews: "Reviews",
    nav_location: "Find Us",

    hero_title: "START YOUR TRIP. SMASH YOUR BRAIN",
    hero_subtitle: "Authentic American Smash Burger in Salerno.",
    hero_cta: "Explore menu",

    concept_title_prefix: "The science of ",
    concept_p1: "The magic of a smash burger lies entirely in the Maillard reaction. When a fresh beef patty is pressed firmly onto a searing hot griddle, the juices lock inside while a crispy, deeply flavorful, and irresistible crust forms on the outside.",
    concept_p2: "We nestle this delicacy inside a pillowy-soft potato roll bun, layering it with homemade pickles and perfectly balanced sweet & sour onions. A chemical explosion of pure culinary joy.",

    menu_main_title: "Our Menu",
    sides_title: "Sides & Extras",

    reviews_title: "Our customers' addiction",

    hours_heading: "Hours",
    location_heading: "Find Us",

    day_monday: "Monday",
    day_tue_thu: "Tuesday - Thursday",
    day_fri_sat: "Friday - Saturday",
    day_sunday: "Sunday",

    btn_call: "Call Now",
    map_hint: "Open Map",
    footer_copyright: "© 2026 Dopamina Smash Burger. All rights reserved. VAT 0899767868.",

    gallery_title: "The Dopamina Experience",
    caption_place: "The Vibe",
    caption_cooking: "Open Kitchen",
    caption_burger: "The Real Deal",
    caption_packaging: "Ready to Trip"
  }
};

// ==========================================
// STATE VARIABLES
// ==========================================
let currentLanguage = "it";
let activeCategory = "smash";

// ==========================================
// CORE RENDERING FUNCTIONS (XSS-FREE)
// ==========================================

// Create a menu item card securely
function renderMenuCard(item, lang) {
  const card = document.createElement("div");
  card.className = "menu-card";
  card.setAttribute("id", `card-${item.id}`);

  // Image wrapper
  const imgWrapper = document.createElement("div");
  imgWrapper.className = "card-img-wrapper";

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = lang === "it" ? item.name_it : item.name_en;
  img.className = "card-img";
  img.loading = "lazy";
  imgWrapper.appendChild(img);

  // Badge (e.g. Best Seller / Piccante)
  if (item.badge) {
    const badgeText = lang === "en" ? item.badge.en : item.badge.it;
    if (badgeText) {
      const badge = document.createElement("span");
      badge.className = "card-badge";
      badge.textContent = badgeText;
      imgWrapper.appendChild(badge);
    }
  }
  card.appendChild(imgWrapper);

  // Title
  const title = document.createElement("h3");
  title.className = "card-title";
  title.textContent = lang === "it" ? item.name_it : item.name_en;
  card.appendChild(title);

  // Ingredients text
  const ingredients = document.createElement("p");
  ingredients.className = "card-ingredients";
  ingredients.textContent = lang === "it" ? item.ingredients_it : item.ingredients_en;
  card.appendChild(ingredients);

  // Price tag
  const price = document.createElement("span");
  price.className = "card-price";
  price.textContent = `€ ${item.price.toFixed(2)}`;
  card.appendChild(price);

  return card;
}

// Create a review card securely
renderReviewCard = function (review, lang) {
  const card = document.createElement("div");
  card.className = "review-card";

  const text = document.createElement("p");
  text.className = "review-text";
  text.textContent = `“${lang === "it" ? review.text_it : review.text_en}”`;
  card.appendChild(text);

  const meta = document.createElement("div");
  meta.className = "review-meta";

  const stars = document.createElement("div");
  stars.className = "review-stars";
  stars.textContent = "★".repeat(review.rating);
  meta.appendChild(stars);

  const author = document.createElement("span");
  author.className = "review-author";
  author.textContent = review.author;
  meta.appendChild(author);

  card.appendChild(meta);
  return card;
};

// ==========================================
// UI POPULATORS
// ==========================================

// Populates the menu grids depending on language and active category selection
function populateMenu(lang, category) {
  const mainGrid = document.getElementById("menu-items-grid");
  const sidesGrid = document.getElementById("menu-sides-grid");

  if (!mainGrid || !sidesGrid) return;

  // Clear existing items securely
  mainGrid.replaceChildren();
  sidesGrid.replaceChildren();

  // Filter items
  const mainItems = PRODUCTS.filter(p => p.category === category && !p.isSide);
  const sideItems = PRODUCTS.filter(p => p.isSide);

  // Append main items
  mainItems.forEach(item => {
    const cardNode = renderMenuCard(item, lang);
    mainGrid.appendChild(cardNode);
  });

  // Append sides items
  sideItems.forEach(item => {
    const cardNode = renderMenuCard(item, lang);
    sidesGrid.appendChild(cardNode);
  });
}

// Populates the reviews carousel slider
function populateReviews(lang) {
  const slider = document.getElementById("reviews-slider");
  if (!slider) return;

  slider.replaceChildren();

  REVIEWS.forEach(review => {
    const reviewNode = renderReviewCard(review, lang);
    slider.appendChild(reviewNode);
  });
}

// Swaps translation texts for statically typed markup elements with data-translate attributes
function translateStaticUI(lang) {
  const translatableElements = document.querySelectorAll("[data-translate]");
  const translationSet = lang === "en" ? TRANSLATIONS.en : TRANSLATIONS.it;

  translatableElements.forEach(elem => {
    const key = elem.getAttribute("data-translate");
    if (translationSet && translationSet[key]) {
      elem.textContent = translationSet[key];
    }
  });

  // Explicitly translate elements that need custom handling (e.g. copyright with symbols, elements with structural markers)
  const copyrightElem = document.getElementById("footer-copyright");
  if (copyrightElem && translationSet && translationSet.footer_copyright) {
    copyrightElem.textContent = translationSet.footer_copyright;
  }
}

// ==========================================
// EVENT LISTENERS & NAVIGATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial renders
  populateMenu(currentLanguage, activeCategory);
  populateReviews(currentLanguage);
  translateStaticUI(currentLanguage);

  // 2. Language Toggle Handler
  const langToggleBtn = document.getElementById("lang-toggle-btn");
  const langToggleText = document.getElementById("lang-toggle-text");
  const langToggleIcon = document.getElementById("lang-toggle-icon");

  if (langToggleBtn && langToggleText && langToggleIcon) {
    langToggleBtn.addEventListener("click", () => {
      // Toggle state
      currentLanguage = currentLanguage === "it" ? "en" : "it";

      // Update button aesthetics
      if (currentLanguage === "en") {
        // Switch toggle action indicator back to IT
        langToggleText.textContent = "IT";
        // Show Italian flag representation using standard emoji or text marker since it's the target toggle state
        langToggleIcon.setAttribute("src", "assets/menu/english-menu.png"); // keep standard representation or swap
        langToggleIcon.setAttribute("alt", "Italiano");
      } else {
        // Switch toggle action indicator back to EN
        langToggleText.textContent = "EN";
        langToggleIcon.setAttribute("src", "assets/menu/english-menu.png");
        langToggleIcon.setAttribute("alt", "English");
      }

      // Re-populate everything with the new language
      translateStaticUI(currentLanguage);
      populateMenu(currentLanguage, activeCategory);
      populateReviews(currentLanguage);
    });
  }

  // 3. Menu Category Switcher Handler
  const categoryContainer = document.getElementById("menu-categories");
  if (categoryContainer) {
    const buttons = categoryContainer.querySelectorAll(".tab-btn");
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        // Toggle active button CSS classes
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Swap selected category
        activeCategory = btn.getAttribute("data-category");

        // Fade effect transition
        const mainGrid = document.getElementById("menu-items-grid");
        if (mainGrid) {
          mainGrid.style.opacity = "0";
          setTimeout(() => {
            populateMenu(currentLanguage, activeCategory);
            mainGrid.style.opacity = "1";
          }, 200);
        }
      });
    });
  }

  // 4. Mobile Drawer Toggle Handler
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");

  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener("click", () => {
      const isOpen = mobileMenuBtn.classList.toggle("active");
      mobileNav.classList.toggle("active", isOpen);
      mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      mobileNav.setAttribute("aria-hidden", isOpen ? "false" : "true");
    });

    // Close mobile menu when clicking a link
    const mobileLinks = mobileNav.querySelectorAll(".nav-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        mobileNav.classList.remove("active");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("aria-hidden", "true");
      });
    });
  }

  // 5. Reviews Slider Navigation Controls
  const slider = document.getElementById("reviews-slider");
  const prevBtn = document.getElementById("slider-prev-btn");
  const nextBtn = document.getElementById("slider-next-btn");

  if (slider && prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      const cardWidth = slider.querySelector(".review-card")?.offsetWidth || 300;
      slider.scrollBy({ left: -(cardWidth + 20), behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      const cardWidth = slider.querySelector(".review-card")?.offsetWidth || 300;
      slider.scrollBy({ left: cardWidth + 20, behavior: "smooth" });
    });

    // Add dragging support for touch screen devices
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.style.cursor = "grabbing";
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.style.cursor = "grab";
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    });
  }
});
