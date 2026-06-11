# ❄️ Ayesha Summaiyya — Interactive Portfolio

An immersive **portfolio-as-a-world experience** where users explore a snowy village to discover projects, resume, and contact — guided by an animated penguin 🐧

---

## 🌐 Live Demo

👉 https://portfolio-clean-sigma.vercel.app/

---

## ✨ Overview

This portfolio reimagines the traditional personal website as an **interactive environment** instead of a static page.

Users navigate through a **cartoon-style snowy village**, where each building represents a section:

* Projects
* Resume
* Contact
* About Me

A character-driven interaction (penguin) enhances engagement and creates a unique user journey.

---

## 🔥 Why This Portfolio Stands Out

* 🎮 Game-like navigation instead of scrolling
* 🐧 Character-based interaction system
* 🎨 Fully custom SVG UI (no templates used)
* ⚡ Smooth animations with Framer Motion
* 🧩 Clean and scalable component architecture
* 💡 Focus on **UX storytelling + creativity**

---

## 🎮 Interactions

| Action                     | Result                                    |
| -------------------------- | ----------------------------------------- |
| Click **Projects (Igloo)** | Penguin walks left → Opens Projects panel |
| Click **Resume (Shop)**    | Penguin moves to center → Opens Resume    |
| Click **Contact (Booth)**  | Penguin walks right → Opens Contact       |
| Click **Penguin**          | Opens About Me instantly                  |
| Hover buildings            | Scale + glow animation                    |
| Press **Escape**           | Close active panel                        |

---

## 🏗️ Tech Stack

* **Next.js 14** — App Router architecture
* **Tailwind CSS** — Utility-first styling
* **Framer Motion** — Smooth animations
* **TypeScript** — Type safety & scalability
* **Google Fonts (Nunito)** — Clean typography

---

## 📁 Project Structure

```
ayesha-portfolio/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Scene.tsx
│   ├── Building.tsx
│   ├── IglooSVG.tsx
│   ├── ShopSVG.tsx
│   ├── BoothSVG.tsx
│   ├── Penguin.tsx
│   ├── PenguinSVG.tsx
│   ├── Snowflakes.tsx
│   ├── Overlay.tsx
│   ├── PanelContent.tsx
│   └── data.ts
│
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

---

## ⚡ Getting Started

```bash
npm install
npm run dev
```

Open → http://localhost:3000

---

## 🚀 Production Build

```bash
npm run build
npm start
```

---

## ✏️ Customisation

* **Content:** `components/data.ts`
* **UI & Animations:** `app/globals.css`
* **Illustrations:** SVG files in `/components`
* **Character Logic:** `Penguin.tsx`

---

## 💡 Key Highlights

* Unique **portfolio-as-an-experience** concept
* Smooth character-driven navigation
* Clean separation of UI, logic, and data
* Modern frontend architecture using Next.js
* Focus on both **design + engineering quality**

---

## 📬 Contact

Feel free to connect for collaborations, internships, or opportunities.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

