# WordPress + Elementor Implementation Blueprint

This guide maps the existing HTML design to WordPress + Elementor so you can rebuild the same look and conversion flow quickly.

## 1) WordPress Setup

1. Install WordPress on your hosting.
2. Install theme: Hello Elementor.
3. Install plugins:
- Elementor
- Elementor Pro (recommended for Form widget)
- LiteSpeed Cache (or WP Rocket)
- Rank Math SEO (or Yoast SEO)
- Smush (image optimization)
- WP Mail SMTP (optional)

## 2) Global Design System (Elementor Site Settings)

Colors:
- Primary: #0b4f9c
- Secondary: #0f67c6
- Heading: #083b73
- Text: #4d6a8f
- Background Light: #f4f9ff
- Border: #cde2fb
- WhatsApp CTA: #1fb65b

Typography:
- Headings: Sora (600-800)
- Body: Manrope (400-700)

Buttons:
- Radius: 12px
- Primary Gradient: #0f67c6 to #0b4f9c
- Hover: move up 2px with soft shadow

Container width:
- 1160px

Spacing system:
- Section vertical padding: 80px desktop, 60px tablet, 50px mobile
- Internal card padding: 16px to 22px

## 3) Page Structure (Single Landing Page)

Create one page: Home (or Landing) and Edit with Elementor.

### Section A: Sticky Header
Widgets:
- Icon + text logo (left)
- Nav Menu (center)
- Language switcher (right, custom buttons)
- WhatsApp button (right)

Notes:
- Make header sticky and semi-transparent (glass effect).
- Mobile: collapsible menu.

### Section B: Hero
Widgets:
- Eyebrow/tag line with globe icon
- H1 headline
- Paragraph
- Two CTA buttons (WhatsApp + Rooms anchor)
- Bullet trust points with check icons
- Right column image with floating mini-card

Animation:
- Fade-up on load
- Floating card subtle up/down motion

### Section C: About
Widgets:
- Left: Title + 2 paragraphs
- Right: 3 stacked stat cards

### Section D: Rooms Overview
Widgets:
- Section heading
- 3 cards in columns (desktop), 1 column mobile
- Each card: image, title, short copy, icon bullet amenities

### Section E: Gallery
Widgets:
- Heading + subtitle
- Image gallery/masonry style (6 images)

### Section F: Reviews
Widgets:
- Heading
- 3 testimonial cards with star icon and guest origin

### Section G: Location
Widgets:
- Left: location copy + transport help button
- Right: Google Maps embed

### Section H: Booking Inquiry Form (Conversion Section)
Widgets:
- Form fields:
  - Full Name
  - Email
  - Check-In
  - Check-Out
  - Guests
  - Preferred Room
  - Notes
  - Consent checkbox
- Submit button text: Send Inquiry via WhatsApp

Logic options:
- Option 1 (easy): Submit triggers thank-you popup with WhatsApp button.
- Option 2 (best): Use custom JS snippet to compose WhatsApp message from field values and open wa.me link.

### Section I: Final CTA
Widgets:
- Strong headline
- Short trust copy
- WhatsApp button (large)

### Section J: Footer
Widgets:
- Brand line
- Email
- Phone

## 4) WhatsApp Conversion Setup

Use this link pattern for all CTA buttons:
- https://wa.me/6281234567890?text=Hi%20Oseda%20Nias%20Surfhouse%2C%20I%20want%20to%20book%20my%20stay

Replace number with your real WhatsApp number in international format.

Recommended CTA labels:
- Book Now via WhatsApp
- Check Availability
- Ask for Transport Help

## 5) Bilingual Toggle (EN/ID)

Approach A (no-code):
- Create two duplicate pages (EN and ID).
- Add switch buttons linking to each page.

Approach B (plugin):
- Use TranslatePress or Polylang and assign EN/ID content.

Approach C (custom JS):
- Keep one page and map text keys using custom JS (like current HTML version).

## 6) Basic SEO Setup (Bonus)

In Rank Math/Yoast:
- Title: Oseda Nias Surfhouse | Surf Accommodation in Nias
- Meta description focused on world-class surf + direct WhatsApp booking
- Open Graph image from hero
- Add schema type: LodgingBusiness

On-page SEO:
- One H1 only
- Descriptive H2 for each section
- Alt text on all gallery and room images
- Compress all images to WebP where possible

## 7) Speed Optimization

- Use WebP images and max width around 1600px for hero
- Lazy-load below-the-fold media
- Minify CSS/JS with cache plugin
- Enable CDN if available
- Avoid heavy animation libraries; use CSS animations

## 8) Conversion Improvements (Suggested)

- Add sticky mobile bottom bar with WhatsApp button
- Add urgency copy near CTA (limited rooms in peak swell months)
- Add trust badges (verified reviews, secure booking, direct host)
- Add FAQ accordion above final CTA

## 9) Content Checklist Before Publish

- Replace placeholder photos with your real property/surf images
- Update exact map pin/location
- Replace email/phone/WhatsApp number
- Validate all buttons and anchor links
- Test iPhone and Android responsiveness
- Test page speed in Lighthouse/PageSpeed Insights

## 10) Match to Current HTML Files

Reference implementation in this folder:
- index.html
- assets/css/styles.css
- assets/js/main.js

These files already include:
- EN/ID toggle behavior
- Animated UI and icon-rich sections
- Booking form to WhatsApp message handoff
- Mobile responsive layout
