# iMax — Software & IT Services Website

A premium, high-performance, conversion-oriented corporate website built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**. 

This website features custom premium aesthetics such as glassmorphism, responsive navigation, scroll reveal animations, tilt cards, and a dark mode configuration.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (configured with `@tailwindcss/postcss`)
- **Animations:** Custom CSS transitions, scroll reveal wrapper, dynamic spotlight mouse tracking, and 3D tilt effects.

---

## ✨ Features & Architecture

- **Responsive Header & Footer:** Fixed header with desktop navigation, mobile overlay drawer, automatic path detection, scroll checking (adds blur/background color on scroll), and dynamic scroll lock logic.
- **Conversion-Optimized Flow:** Prominent Calls-To-Action (CTAs) guiding visitors to `/contact` from every page.
- **Interactive UI Components:**
  - `Reveal`: Smooth entrance animation for sections on scroll.
  - `Spotlight`: Radial gradient hover effect following user cursor.
  - `TiltCard`: Dynamic 3D tilt rotation card based on cursor movement.
  - `StatCounter`: Smooth incrementing number counters.
  - `LogoMarquee`: Infinite horizontal moving row of partner logos.
  - `ContactForm`: Client-validated contact form with fields for project details.

---

## 📂 Project Structure

```
iMax_website/
├── app/                  # Next.js App Router root
│   ├── components/       # Reusable layout and interactive elements
│   │   ├── Header.tsx    # Responsive navigation bar
│   │   ├── Footer.tsx    # Sitefooter with directory links
│   │   ├── ContactForm.tsx
│   │   ├── Reveal.tsx    # Intersection Observer animations
│   │   ├── Spotlight.tsx # Custom cursor light tracker
│   │   ├── TiltCard.tsx  # Interactive 3D tilt cards
│   │   └── ...           
│   ├── about/            # Page: Company narrative, values, and team
│   ├── contact/          # Page: Interactive client questionnaire 
│   ├── portfolio/        # Page: Project success case studies
│   ├── services/         # Page: Detailed lists of software capability
│   ├── globals.css       # Core global style sheet with Tailwind declarations
│   ├── layout.tsx        # Global root layout wrapping navigation
│   └── page.tsx          # Homepage view & sections
├── public/               # Static assets (images, icons)
├── package.json          # Node dependencies & commands
├── tsconfig.json         # TypeScript configuration
└── next.config.ts        # Next.js configuration
```

---

## 🛠️ Development Setup

Follow these steps to run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.17.0 or higher recommended).

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd d:/Freelance/iMax_website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   - **Local:** [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

In the project directory, you can run the following npm commands:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode at `localhost:3000`. |
| `npm run build` | Builds the optimized production application in the `.next` directory. |
| `npm run start` | Runs the built application in production mode. |
| `npm run lint` | Runs ESLint analysis to identify code quality issues. |