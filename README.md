# Dopamina Smash Burger - Official Website

[![Licence: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-supported-orange.svg)](#)
[![CSS3](https://img.shields.io/badge/CSS3-vanilla-blue.svg)](#)
[![JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow.svg)](#)

A premium, highly interactive, and SEO-optimized single-page web application designed for **Dopamina Smash Burger** (`dopaminaburger.it`), an artisanal smash burger establishment based in Salerno, Italy.

This landing page was built using pure vanilla technologies (HTML5, CSS3, ES6 JavaScript) to achieve near-instantaneous load times, smooth transitions, and premium visual aesthetics without the weight of modern framework overhead.

---

## 🚀 Key Features

### 🍔 1. Premium Visual Experience & Parallax Effects
- **Interactive 3D Hero Parallax**: The hero burger video floats and tilts dynamically in response to mouse movement on desktop, creating a tactile, high-end 3D depth effect.
- **Custom CSS Typography**: Standardized on high-quality web-safe typography and custom local font-face implementations (`Sink` and `Space Mono`) to ensure consistent design language across all viewports.
- **Smooth Animations**: Tailored micro-interactions, custom transition curves, and floating image animations (utilizing hardware-accelerated CSS properties) ensure the site feels alive and responsive.

### 🇮🇹 🇬🇧 2. Instant Client-Side Multilingual Localization
- Real-time language switching (Italian and English) without page reloads, external translation APIs, or heavy framework libraries.
- Powered by native HTML `data-it` and `data-en` attributes combined with a lightweight JavaScript localization engine.

### 🗺️ 3. Integrated Monochrome Leaflet Map
- A fully integrated, custom-styled monochrome vector map using Leaflet.js.
- Clean design alignment with a grayscale, high-contrast style filter matching the dark/white aesthetic of the brand, complete with custom marker popups.

### 📋 4. Sticky Receipt-Style Menu Navigation & Scrollspy
- An intuitive, responsive sticky tab bar for the menu sections.
- An advanced, custom-written **Scrollspy** script handles active class switching on scroll events for both header navigation links and menu category tabs.
- Includes special mobile boundary detection (`isAtBottom`) to correctly highlight the final categories (like `Extra` or `Drink`) that cannot physically scroll to the top of the viewport.

### ♿ 5. Accessible Modal Windows & Focus Management
- Interactive overlay modals for delivery choices (Glovo vs. Deliveroo integration) and promotional offers.
- Implements strict web accessibility (WAI-ARIA) patterns:
  - Focus trapping inside modals.
  - Keyboard listeners for dismissing modals (`Escape` key support).
  - Proper attributes (`aria-hidden`, `role="dialog"`, `inert`) to prevent screen-reader bleeding.

---

## 📈 SEO & Structured Data (Search Engine Optimization)
Built from the ground up for maximum visibility when customers search for *"dopamina smash burger"* or local burger spots in Salerno.

- **LocalBusiness Structured Data**: Complete Schema.org JSON-LD integration including NAP data (Name, Address, Phone), exact opening hour blocks, coordinate location, menu link, and direct Action links for delivery.
- **Semantic HTML & Screen Reader Support**: Correct hierarchy starting with a single visually hidden `<h1>` pointing to search keywords (`Dopamina Smash Burger Salerno`), clean layout landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), and alt text attributes on all visual assets.
- **URL Standardization**: Standard `<link rel="canonical">` tags and matching OpenGraph URL declarations pointing to the official domain `https://dopaminaburger.it/`.
- **Sitemap & Robots**: Pre-configured `sitemap.xml` mapping and customizable `robots.txt` configuration for both staging/testing and production modes.

---

## 🛠️ Build Pipeline & Asset Optimization

The project includes an automated Python compilation and minification script to bundle CSS and JS assets before shipping to production.

- **Minification Engine (`minify.py`)**: A utility script that strips code comments, handles whitespace reduction, and serializes assets to compress file sizes and reduce network load.
- **Output Files**:
  - `index.css` compiles to `index.min.css` (~30% size reduction)
  - `index.js` compiles to `index.min.js` (~42% size reduction)
- **Responsive Media**: Fully utilizes modern `WEBP` formats for high-resolution images with very low byte weight, alongside custom-encoded MP4 files for the background video.

---

## 📦 Project Structure

```bash
DopaminaSmash/
├── assets/                 # Image, video, logo, and custom font assets
│   ├── food/               # High-res burger and menu items
│   ├── menu/               # Icons and ui illustrations
│   ├── video/              # Hero loop video files
│   └── fonts/              # Custom brand woff2 fonts
├── index.html              # Main landing page
├── contest.html            # Social contest / promotion page
├── privacy.html            # GDPR/Privacy policy compliant page
├── index.css               # Development CSS file (source)
├── index.min.css           # Production minified stylesheet
├── index.js                # Development JS file (source)
├── index.min.js            # Production minified Javascript
├── minify.py               # Compilation / minification script
├── robots.txt              # Search engine crawling rules
├── sitemap.xml             # Sitemap for search index crawlers
└── README.md               # Project documentation
```

---

## ⚙️ Getting Started

### Running Locally
To run the project locally, you only need a simple web server to serve the static assets.

**Using Python:**
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

**Using Node.js (http-server):**
```bash
npx http-server -p 8000
```

### Compiling Assets
Whenever you make changes to the source files (`index.css` or `index.js`), run the minification script to update the production bundles:

```bash
python3 minify.py
```

---

## 📝 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
