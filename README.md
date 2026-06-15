# NovaTech Solutions Responsive Business Website

## Overview
NovaTech Solutions is a responsive business website built as a portfolio project for a tech startup concept. The website is designed with modern UX/UI principles, mobile-first responsiveness, and basic JavaScript form validation.

## Technologies
- HTML5
- CSS / Tailwind CSS (via CDN)
- JavaScript
- Git

## Pages
- `index.html` — Home page
- `about.html` — About page
- `services.html` — Services page
- `contact.html` — Contact page

## Project Structure
```
/Project_intern
  /css
    style.css
  /js
    script.js
  index.html
  about.html
  services.html
  contact.html
  README.md
```

## Setup
1. Clone the repository:
   ```bash
git clone https://github.com/Jayaraaj2006/Responsive_bussiness_website.git
cd Responsive_bussiness_website
```
2. Open the files in your browser:
   - `index.html`
   - `about.html`
   - `services.html`
   - `contact.html`

## Usage
- Navigate with the header menu on desktop and mobile.
- Submit the contact form on `contact.html` to see client-side validation.

## Deployment to GitHub Pages

### Step 1: Ensure all changes are committed to Git
```bash
git add .
git commit -m "Final version ready for deployment"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: Deploy from a branch
   - **Branch**: main (or master)
   - **Folder**: / (root)
4. Click **Save**

### Step 3: Access your live site
Your website will be available at:
```
https://Jayaraaj2006.github.io/Responsive_bussiness_website/
```

The deployment typically completes within 1-2 minutes.

## Notes
- The contact form includes frontend validation only (no backend processing).
- Tailwind CSS is loaded from CDN (cdn.tailwindcss.com) for development.
  - For production deployment with optimized CSS, follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).
- All pages are fully responsive and mobile-optimized.
- SEO-friendly with meta tags on all pages.
