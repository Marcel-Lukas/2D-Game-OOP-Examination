<div align="center">

# 🛸 Desert Alien Invasion

**An action-packed 2D side-scrolling shooter, built entirely with Vanilla JavaScript and the HTML5 Canvas API.**

Developed in March 2025 as part of the training programme at the **Developer Academy Munich**, with the goal of gaining a deeper, practical understanding of object-oriented programming. [🚀 Live Demo](https://desert-alien-invasion.marcel-lukas.com/)


[![👽 Play Now](https://img.shields.io/badge/👽_Play_Now-desert--alien--invasion-brightgreen?style=for-the-badge)](https://desert-alien-invasion.marcel-lukas.com/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Canvas](https://img.shields.io/badge/HTML5_Canvas-FF6F00?style=flat&logo=html5&logoColor=white)
![No Dependencies](https://img.shields.io/badge/dependencies-none-success?style=flat)

</div>

---

## 📑 Table of Contents

- [🎮 Preview](#-preview)
- [🕹️ Controls](#️-controls)
- [✨ Features](#-features)
- [⚡ Performance & Loading](#-performance--loading)
- [🏗️ Technical Architecture](#️-technical-architecture)
- [🧠 What I Learned](#-what-i-learned)

---

## 🎮 Preview

**Defend the world against a ruthless alien invasion! Arm yourself with a pistol and grenades and fight for survival in this action-packed browser game.**

[![Desert Alien Invasion – Start Screen](img/start-screen.webp)](https://desert-alien-invasion.marcel-lukas.com/)

---

## 🕹️ Controls

| Action | Keyboard | Mobile |
|---|---|---|
| Move left | `A` / `←` | Touch button |
| Move right | `D` / `→` | Touch button |
| Jump | `W` / `Space` / `↑` | Touch button |
| Shoot (pistol) | `R` | Touch button |
| Throw grenade | `F` | Touch button |

> 💡 The game also supports **touch controls** on mobile devices as well as a **fullscreen mode**. On mobile, a landscape hint appears automatically when the device is held in portrait orientation.

---

## ✨ Features

- 🎯 **Side-scrolling action** on an HTML5 Canvas (720 × 480 px)
- 🔫 **Two weapon systems** – Pistol (single shot) & Grenades (area-of-effect explosion)
- ❤️ **Collectibles** – Pistol ammo, grenades, and health packs scattered across the map
- 🌅 **Parallax background** with three independent layers plus clouds
- 📱 **Responsive & mobile-friendly** – automatic landscape hints + touch controls
- 🔊 **Full sound design** with a toggle mute button (preference saved in `localStorage`)
- 🖥️ **Fullscreen support**
- 🏆 **Win & Game Over screen** with instant restart
- ⏳ **Loading screen with progress bar** – all assets are preloaded before the game starts

---

## ⚡ Performance & Loading

The game ships with a dedicated, framework-free **asset-loading layer** that makes the
experience smooth and responsive – even on slow or throttled connections.

| Technique | What it does | Benefit |
|---|---|---|
| **Parallel asset preloading** | Loads all ~289 unique images and 19 audio files in parallel before the game starts. | No missing graphics in the first frames. |
| **Loading screen + progress bar** | Shows real loading progress (0–100 %) styled to match the game. | Clear feedback instead of a frozen screen. |
| **Shared image cache** | A single class-wide cache (`DrawableObject.sharedImageCache`) reuses identical sprites across all instances. | ~730 → ~289 image objects; far less memory & fewer requests. |
| **Deferred scripts** | All scripts use `defer`, so they download in parallel without blocking the first paint. | The start screen appears almost instantly. |
| **`preload` hints** | Critical screens (e.g. the start screen) are hinted via `<link rel="preload">`. | Instant first paint. |
| **Lazy audio loading** | Audio is set to `preload="none"` on page load and only buffered on game start. | Faster initial page load. |
| **Viewport culling** | Only objects inside the visible camera area are drawn each frame. | Fewer draw calls on the wide ~7 000 px level. |

> All optimisations are **purely additive** – the original game logic is untouched, and the
> game falls back to immediate start if the preloader is unavailable.

---

## 🏗️ Technical Architecture

The project uses exclusively **Vanilla JavaScript**, **HTML5 Canvas**, and **CSS** – no external frameworks or libraries.

### Class Hierarchy (OOP)

```
DrawableObject                 – Base: image loading, drawing, shared cache
└── MovableObject              – Movement, gravity, collision, animation
    ├── Character              – Player character
    ├── GreenAlien             – Standard enemy
    ├── BrainAlien             – Enemy with ranged attack
    ├── Endboss                – Final boss with dash attack
    ├── ThrowableObject        – Thrown grenade
    ├── ShootableObject        – Fired projectile
    ├── Explosion              – Grenade explosion
    ├── Health                 – Health pack collectible
    ├── GrenadeAmmunition      – Grenade collectible
    └── PistolAmmunition       – Pistol ammo collectible

World                          – Game world & main render loop
Level                          – Level setup & objects
Keyboard                       – Keyboard input handler
StatusBar                      – Player health bar
BossStatusBar                  – End boss health bar
CollectedGrenades              – Grenade HUD
CollectedPistolAmmunition      – Ammo HUD
```

### Project Structure

```
📁 2D Game
├── index.html              – Entry point, UI, overlays & loading screen
├── style.css               – Main styles
├── responsiv.css           – Mobile & responsive styles
├── fonts.css               – Custom fonts
├── 📁 js/
│   ├── game.js             – Game logic, start/restart, loading flow, fullscreen
│   ├── sounds.js           – Sound objects & mute logic
│   ├── preloader.js        – Parallel asset preloader with progress reporting
│   └── asset-manifest.js   – Auto-collected list of animation image paths
├── 📁 models/              – All game classes (OOP)
├── 📁 levels/
│   └── level1.js           – Level config (enemies, items, backgrounds)
├── 📁 img/                 – Sprites, backgrounds, UI icons
└── 📁 audio/               – Sound effects & background music
```

---


## 🧠 What I Learned

This project was a hands-on deep dive into **object-oriented programming** and
**game development fundamentals** with plain web technologies:

- Designing a clean **class hierarchy** with inheritance (`DrawableObject` → `MovableObject` → game objects)
- Building a **game loop** with `requestAnimationFrame` and interval-based logic
- Implementing **collision detection**, gravity, and sprite animations from scratch
- Managing **game state**, sound, and persistent settings via `localStorage`
- Optimising **loading performance** with preloading, caching, and viewport culling


