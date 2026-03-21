# 🏨 HBS Hotel — Hotel Booking System

A fully functional, responsive **Hotel Booking & Reservation Web Application** built with pure HTML, CSS, and JavaScript — no frameworks, no build tools, just clean, production-ready front-end code.

---

## ✨ Live Features

| Feature | Description |
|---|---|
| 🏠 **Welcome Landing Page** | Full-screen hero with animated CTA buttons guiding users to Sign In or Register |
| 🔐 **Authentication Flow** | Login with mobile + password, protected routes via `localStorage` |
| 📝 **User Registration** | Form validation with password confirmation |
| 🛏️ **Room Browsing** | Standard, Deluxe, and Suite rooms with images and pricing |
| 📅 **Booking System** | Dynamic booking form with real-time payment calculation |
| 📬 **Contact Form** | Fully validated contact submission form |
| ℹ️ **About Page** | Hotel story, team culture, and brand identity |
| 🚪 **Logout** | Secure session clearing with redirect |

---

## 🖥️ Tech Stack

| Technology | Usage |
|---|---|
| **HTML5** | Semantic page structure across 8 pages |
| **CSS3** | Custom design system with CSS variables, gradients, transitions |
| **Vanilla JavaScript** | Auth flow, form validation, dynamic UI updates |
| **localStorage** | Client-side session persistence |

> Zero dependencies. Zero build steps. Runs directly in any browser.

---

## 🎨 Design System

The UI uses a cohesive luxury hotel color palette:

- 🔵 **Deep Navy** `#1b2a4a` — Primary brand color (navbar, headers)
- 🟡 **Rich Gold** `#c9a84c` — Accent & CTA buttons
- 🟢 **Teal** `#2e7d7d` — Secondary accent (prices, links, hover states)
- 🟤 **Warm Off-White** `#f5f1eb` — Background sections
- ⚫ **Soft Black** `#2c2c2c` — Body text

---

## 📁 Project Structure

```
hotel-reservation/
├── index.html          # Welcome / Landing page (entry point)
├── login.html          # User login page
├── register.html       # New user registration
├── home.html           # Main dashboard after login
├── rooms.html          # Browse available rooms
├── book-now.html       # Booking form with payment summary
├── about.html          # About the hotel
├── contact-us.html     # Contact form
├── styles.css          # Unified stylesheet (CSS variables + all page styles)
├── index.js            # Auth logic, form handlers, booking calculator
└── assets/             # Images: hero, rooms, about, logo, login background
```

---

## 🚀 Getting Started

No installation required.

```bash
# Clone the repository
git clone https://github.com/sonalidevloper/hotel-reservation.git

# Open the entry point in any browser
open index.html
```

Or simply drag `index.html` into your browser — it works instantly.

---

## 🔄 Application Flow

```
index.html (Welcome)
    ├── → login.html      (Sign In)  →  home.html (Dashboard)
    └── → register.html   (Sign Up)  →  login.html (after registration)

home.html (Dashboard)
    ├── rooms.html     → book-now.html  (Booking)
    ├── about.html
    └── contact-us.html
```

Protected pages automatically redirect unauthenticated users to `login.html`.

---

## 💡 Key Implementation Highlights

- **Route Protection**: `window.onload` in `index.js` guards all authenticated pages using `localStorage`
- **Dynamic Booking Calculator**: Computes total cost in real-time as users select room type and dates
- **CSS Custom Properties**: Entire color palette defined in `:root` — trivial to rebrand
- **Smooth Transitions**: All interactive elements have `transition` animations for a polished UX
- **Responsive Layout**: Flexbox-based grid works across desktop, tablet, and mobile viewports

---

## 📸 Pages Preview

| Page | Description |
|---|---|
| **Welcome** | Full-screen hero with navy-gold gradient overlay and CTA buttons |
| **Login / Register** | Centered card on blurred background image |
| **Home** | Hero banner + featured room cards + about section |
| **Rooms** | Room catalog with images, descriptions, and Book Now links |
| **Book Now** | Multi-field form with live payment detail summary |
| **Contact Us** | Clean contact form with validation |
| **About** | Image + text layout with brand story |

---

## 🧑‍💻 Author

**Sonali** — [@sonalidevloper](https://github.com/sonalidevloper)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

