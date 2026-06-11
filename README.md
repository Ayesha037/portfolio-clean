# Ayesha Summaiyya — Portfolio

A playful cartoon snowy village portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ayesha-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Root page (state orchestration)
│   └── globals.css       # Tailwind + custom animations
│
├── components/
│   ├── Scene.tsx         # Full village world (sky, mountains, ground, buildings, penguin)
│   ├── Building.tsx      # Clickable building wrapper (hover + click)
│   ├── IglooSVG.tsx      # "Projects" — illustrated igloo
│   ├── ShopSVG.tsx       # "Resume"   — illustrated shop building
│   ├── BoothSVG.tsx      # "Contact"  — illustrated booth
│   ├── Penguin.tsx       # Walking penguin with Framer Motion animation
│   ├── PenguinSVG.tsx    # Penguin SVG illustration
│   ├── Snowflakes.tsx    # Falling snowflake particles
│   ├── Overlay.tsx       # Animated modal panel
│   ├── PanelContent.tsx  # Content for About / Projects / Resume / Contact
│   └── data.ts           # All portfolio content (projects, skills, metadata)
│
├── public/               # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎮 Interactions

| Action | Result |
|--------|--------|
| Click **PROJECTS igloo** | Penguin walks left → opens Projects panel |
| Click **RESUME shop** | Penguin walks to center → opens Resume panel |
| Click **CONTACT booth** | Penguin walks right → opens Contact panel |
| Click **Penguin** | Opens About Me panel instantly |
| **Hover** any building | Scale up + glow effect |
| Press **Escape** | Close open panel |

## ✏️ Customisation

- **Content**: Edit `components/data.ts` — projects, skills, certs.
- **Building art**: Edit `IglooSVG.tsx`, `ShopSVG.tsx`, `BoothSVG.tsx` (plain SVG).
- **Colours / animations**: `app/globals.css` + Tailwind classes.
- **Penguin walk speed**: Adjust `duration` formula in `components/Penguin.tsx`.

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org) — App Router
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)
- Google Fonts — Nunito
