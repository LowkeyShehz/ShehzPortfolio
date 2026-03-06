const projectsData = {
    "vtucgpa": {
        title: "VTU CGPA Calculator",
        subtitle: "A modern web app for VTU students to calculate their CGPA, visualise semester-wise performance, and auto-fetch results directly from the VTU portal.",
        tags: ["Next.js 15", "React 19", "Tailwind CSS", "Tesseract.js", "Zustand"],
        github: "https://github.com/LowkeyShehz/VTU-CGPA-Calculator",
        demo: "#",
        content: `
## Features

- **Auto-Fetch Results** — Automatically scrapes semester results from the VTU portal using your USN. Solves CAPTCHAs entirely in the browser using Tesseract OCR with client-side image preprocessing (scaling & thickening). Features an **Auto-Solve bypass toggle** for manual speed-entry and 5-retry automatic failure fallback loops.
- **Bulk USN Auto-Fetch & CSV Upload** — Enter a USN Range (e.g., \`1RV22CS001\` to \`1RV22CS084\`) or simply drag-and-drop a **raw \`.csv\` file**! The client-side parser scans your text document for valid VTU USNs and automatically queues the entire class for concurrent scraping.
- **Conditional Fetch Engine** — Multi-threaded queue orchestrator natively partitions VTU result URLs. If a student successfully passes all subjects during their primary \`regular\` examination, the engine instantly discards any deferred \`makeup\` exams to save immense server bandwidth and CAPTCHA computational time.
- **Admin Portal & Target Orchestrator** — The application runs strictly independently of active repositories. Moderators can log into \`/admin/dashboard\` to resolve community flags, correct Subject Credit errors in the global database, and completely manage the internal \`result-urls.json\` target endpoints on the fly. Admins can **Add**, **Edit**, or **Delete** live VTU endpoints directly from a JSON UI modal!
- **Revaluation & Makeup Grades** — Intelligently fetches and integrates Revaluation and Makeup/Summer examinations, merging overlapping subjects and highlighting upgraded grades with dedicated **RV/ME UI Badges**.
- **PDF & Excel Ranked Exports** — Download your entire profile portfolio directly from the dashboard. Profiles are intelligently sorted by CGPA in descending order natively within the browser, and output into beautifully structured \`jspdf\` or spreadsheet formats.
- **Strict VTU Pass/Fail Grading** — Enforces correct failure assignments when CIE or SEE logic rules drop below minimum VTU thresholds (e.g. 18 minimum marks for subjects > 2 credits).
- **Multi-File Bulk Upload & Carousel** — Drag and drop multiple VTU result PDFs simultaneously. The application automatically groups them by USN and creates independent profiles for accurate, isolated CGPA calculation. Transition sequentially through imported results using the unified Review Navigation Carousel!
- **CGPA & SGPA Calculation** — Accurate credit-weighted calculations supporting both 2018 and 2022 VTU schemes.
- **Semester Breakdown** — Detailed subject-level view with grades, credits, and credit points.
- **Performance Charts** — Radar and bar charts for visual SGPA/CGPA trends across semesters.
- **Dark Mode** — Full light/dark theme support.

## CAPTCHA Auto-Solve Pipeline

The Auto-Fetch feature uses a **client-side OCR pipeline** to solve CAPTCHAs efficiently without a Python backend:

\`\`\`text
Raw CAPTCHA via VTU
    │
    ▼
Client-side Canvas Preprocessing
    1. Grayscale & Contrast boost
    2. Dynamic Canvas Rescaling (3x)
    3. Stroke Thickening Filter
    4. Aggressive Watermark/Color Exclusion
    │
    ▼
Tesseract.js OCR (Worker + PSM 7/8/13)
    │
    ▼
Auto-submit via Next.js API
\`\`\`

If the OCR confidently isolates 6 characters, it's submitted to VTU. During the process, the user is presented with a real-time progress layout in the dashboard, with the option to manually enter the CAPTCHA if the automated attempts fail.

## Hosting & Deployment (Free Tier)

This application strictly requires an environment capable of running **Node.js** and **Python 3** (with \`OpenCV\`/Machine Learning binaries) side-by-side to solve VTU CAPTCHAs natively. Because of this heavy machine-learning requirement, Vercel Serverless Edge Functions are NOT supported. You MUST host this as a Docker container or on a Virtual Private Server (VPS) like Render.com or Railway.app.
        `
    },
    "adhkar": {
        title: "Adhkar",
        subtitle: "A dedicated application for daily Adhkar and spiritual reflection.",
        tags: ["Jetpack Compose", "Android", "Room", "Kotlin"],
        github: "https://github.com/LowkeyShehz/Adhkar",
        content: `
## Overview
An offline-first Jetpack Compose app providing authentic daily adhkar & dua with Arabic, transliteration, translation, references, reminders, tasbeeh counter, and favorites.

## Implemented Features
- Curated categories: Morning, Evening, After Prayer, Protection, General, etc.
- Arabic + transliteration + English translation + reference for each dua.
- Room database with seeded JSON assets; automatic backfill when content updates.
- Search across Arabic, transliteration, English text (LIKE + FTS scaffold).
- Favorites list with quick toggle & persistence.
- Daily progress tracking (morning/evening completion + after‑prayer counts).
- Custom & preset reminders (AlarmManager / WorkManager fallback) with recurrence (daily / weekday selections / one time) and silent mode.
- Tasbeeh counter with session persistence.
- Qibla direction calculation (basic compass implementation scaffold).
- Dark mode (default ON) + dynamic font scaling preference + Amiri Arabic font.
- Home dashboard with quick stats & shortcuts.
- Widget (Glance) to surface adhkar quickly.

## Tech Stack
| Layer | Tech |
|---|---|
| UI | Jetpack Compose Material 3 |
| DI-ish | Simple singleton graph (AppGraph) |
| Data | Room (entities, DAO, migrations), DataStore Preferences |
| Background | WorkManager, AlarmManager, BroadcastReceiver |
| Search | Room LIKE + FTS4 virtual table |
| Widgets | Glance AppWidget |
| Navigation | Navigation Compose (bottom bar + detail routes) |

## Data Integrity
All dua content is sourced from authentic compilations (Hisnul Muslim, Sahih collections). References are embedded per dua where available. Use responsibly and verify against trusted sources when in doubt.
        `
    },
    "arhistory": {
        title: "AR History Learning App",
        subtitle: "An Augmented Reality app that brings history to life — explore and walk inside full-scale 3D monuments anchored in the real world.",
        tags: ["Unity", "AR Core", "C#", "ARFoundation", "Education"],
        images: [
            { src: "assets/images/ar-1.png", caption: "Exploring a monument in AR" },
            { src: "assets/images/ar-2.png", caption: "Walking inside a historical structure" },
            { src: "assets/images/ar-3.png", caption: "Bromo Tower placed in real-world AR" },
            { src: "assets/images/ar-4.png", caption: "AR app in action" },
        ],
        content: `
## Overview

An immersive Augmented Reality application built in Unity that allows users to explore historical content through interactive, traversable 3D monuments anchored in the real world via AR Core. Users can physically walk inside monuments, listen to narrated audio descriptions, switch between historical landmarks, and manipulate objects in real-time — making history truly tangible.

Built for **Android** using **AR Core** for world-anchoring and plane detection.

## Featured Monuments
- 🏛 **Chichen Itza Pyramid** — Fully traversable interior and exterior
- 🗼 **Bromo Tower** — Detailed clock tower architecture placed at real-world scale
- 🔺 **Egyptian Pyramids** — Walk through ancient chambers in AR
- 🌉 **London Bridge** — Rendered at full AR-scale on flat surfaces
- ⛵ **Historical Ship** (Museum exhibit) — Explorable maritime history
- And more...

## Key Features

- **AR Object Interaction** — 3D monuments are placed in real-world space and repositioned along X, Y, and Z axes via UI controls
- **Traversable Models** — Walk inside monuments; models are fully enterable and explorable from within
- **Gaze-Based Info Panels** — A raycast gaze system detects when the user looks at a tagged object and smoothly animates contextual info panels open/closed with a billboard effect so they always face the camera
- **Dynamic Audio Narration** — Each 3D model has a mapped audio narration clip that plays automatically based on which prefab is currently active in the scene
- **Era / Period Switching** — UI buttons dynamically swap 3D models by tag, allowing users to switch between different historical landmarks or time periods
- **Scale Controls** — Resize AR objects in real time for better inspection
- **Full Audio Management** — Dynamic clip selection with a global stop function

## Technical Highlights

- **Gaze Raycasting** — \`Physics.Raycast\` from the camera forward vector to detect gaze focus on tagged scene objects, driving UI open/close animations
- **Smooth UI Animations** — Info panels use \`Vector3.Lerp\` for fluid scale-in/out transitions
- **Data-Driven Audio** — Prefab-to-AudioClip mapping via a serializable list; resolves the correct narration track at runtime by matching active scene object names to prefab references
- **Tag-Based Object Swapping** — Supports multiple buttons each mapped to sets of tag/prefab pairs, enabling seamless model replacement while preserving world position
- **Modular UI Controls** — Position and scale adjustments are fully decoupled from model logic, wired via Unity's \`Button.onClick\` listeners

## Tech Stack

| Layer | Technology |
|---|---|
| Engine | Unity (2022+) |
| Language | C# / .NET Framework 4.7.1 |
| AR Platform | AR Core (Android) |
| AR Framework | AR Foundation |
| Physics | Unity Raycasting / PhysX |
| UI | Unity UI (uGUI) |
| Audio | Unity AudioSource API |
        `
    },
    "survival": {
        title: "Third-Person Action RPG",
        subtitle: "A full third-person action RPG prototype built in Unity from scratch — featuring combat, enemy AI, inventory, survival stats, and mobile touch controls.",
        tags: ["Unity", "C#", "Game Dev", "NavMesh", "Android"],
        images: [
            { src: "assets/images/game-1.png", caption: "Gameplay screenshot" },
            { src: "assets/images/game-2.png", caption: "Enemy AI in action" },
            { src: "assets/images/game-3.png", caption: "Combat system" },
            { src: "assets/images/game-4.png", caption: "Mobile touch controls" },
            { src: "assets/images/game-5.png", caption: "Level environment" },
        ],
        content: `
## Overview

A third-person action RPG prototype built in Unity using C# 9.0 targeting .NET Framework 4.7.1. The project demonstrates a full gameplay loop including player movement, enemy AI, combat, animation, UI, inventory, survival stats, and mobile-friendly input — all written from scratch.

Designed for **mobile-first play** with on-screen touch controls while remaining fully playable on PC.

**Platform:** Android / PC &nbsp; | &nbsp; **Role:** Solo Developer (all systems)

## Core Systems

### Player System
- CharacterController-based locomotion with camera-relative directional movement
- Stamina system affecting movement speed
- Melee attack with cooldown, capsule overlap detection, and enemy targeting priority
- Yaw-constrained rotation prevents animation-induced drift
- Ray-based capsule-bottom snap prevents model sinking

### Enemy AI System
- NavMeshAgent-driven navigation with three behavior states: **Patrol**, **Chase**, **Attack**
- Physics overlap fallback ensures hits in edge cases
- Unstuck probe system: samples directional candidates and picks the best unobstructed path
- Robust player binding: searches by tag, parent, children, and SurvivalStats fallback

### Animation System
- Player: locomotion blend tree (Speed float + isWalking bool), attack trigger, death trigger
- Enemy: velocity/desiredVelocity driven Speed; walking bool from path+remainingDistance
- Footstep SFX driven by Animation Events with random clip selection and speed-scaled volume
- Attack SFX driven by OnAttackSFX Animation Event

### Input System (Mobile + PC)
- Custom on-screen joystick with camera-relative movement alignment
- Multi-touch support: joystick and camera swipe simultaneously using pointer ID tracking
- Continuous camera realignment while holding joystick
- Camera swipe (horizontal yaw only) ignores joystick touch to prevent conflict

### Survival & Inventory
- Health and stamina with thresholds, drain, regeneration, and death events (UnityEvent)
- Stamina-gated movement: slows player at low stamina, blocks attacks optionally
- Inventory system with ItemData assets and dynamic InventoryUI rendering
- StatsUI reflects live health and stamina values

## Tech Stack

| Layer | Technology |
|---|---|
| Engine | Unity (2022+) |
| Language | C# 9.0 / .NET Framework 4.7.1 |
| Navigation | Unity NavMesh |
| Physics | Unity PhysX (raycasts, OverlapCapsule, OverlapSphere) |
| Animation | Unity Animator (blend trees, triggers, animation events) |
| UI | Unity UI (Canvas, EventSystem) |
| Input | Custom mobile joystick + CameraSwipe |

## Key Technical Challenges Solved

| Challenge | Solution |
|---|---|
| Model sinking into ground | Capsule-bottom raycast snap; PlayerModelAlignment local position lock |
| Animation drift/rotation mismatch | Yaw-only rotation constraint; model child lock in LateUpdate |
| Enemy not attacking repeatedly | Simplified unified cooldown; face+nudge behavior during cooldown |
| Walk animation not triggering | desiredVelocity fallback; walking bool from path+remainingDistance |
| Multi-touch: joystick blocking camera | Pointer ID tracking; CameraSwipe ignores joystick's active touch |
| Footstep audio not playing | Switched to Animation Event method hooks (OnFootstep/Footstep) |
        `
    },
    "vectorprotocol": {
        title: "VectorProtocol",
        subtitle: "A gamified, tactical self-development tracking app.",
        tags: ["Dart", "Flutter", "Riverpod", "Isar"],
        images: [
            { src: "assets/images/vector-1.png", caption: "App overview" },
            { src: "assets/images/vector-2.png", caption: "Radar chart biometrics" },
            { src: "assets/images/vector-3.png", caption: "Habits & missions dashboard" },
            { src: "assets/images/vector-4.png", caption: "RPG-style XP progression" },
            { src: "assets/images/vector-5.png", caption: "Journal & reminders" },
            { src: "assets/images/vector-6.png", caption: "Achievements & streaks" },
        ],
        content: `
## Overview
A gamified, tactical self-development tracking app. Built with Flutter. The app uses a dark cyberpunk aesthetic with JetBrains Mono typography, a radar chart bio-metrics system and RPG-style progression. Fully local — no account required.

## Features
- **Habits**: Track daily/weekly good & bad habits, linked to Radar Chart attributes
- **Missions (Tasks)**: Create and manage tasks with due dates, priority, and image attachments
- **OCR Task Scan**: Use your camera to scan handwritten text — tasks are auto-created from the image
- **Reminders**: Schedule reminders with custom times and image attachments
- **Journal**: Write daily journal entries with optional image
- **Radar Chart**: Visual bio-metrics dashboard showing your progress across custom life-axes
- **Achievements**: Unlock XP-based achievements as you complete habits and tasks
- **Custom Notifications**: Schedule a personal daily "signal" with an attached image or video
- **XP & Level System**: Earn XP by completing habits and missions, level up over time
- **App Streak**: Tracks consecutive days of app usage
- **Light & Dark Theme**: Fully adaptive UI for both light and dark mode
- **Profile**: Configure username, radar axes, and notification preferences

## OCR Library (Task Scan)
The **camera scan button** in the Missions (Tasks) screen uses Google ML Kit Text Recognition.
- It captures an image from the camera using image_picker.
- ML Kit processes the image on-device using the Latin script recognizer.
- The recognized text is placed into the task's description field for review before saving.
- The captured image is also attached to the task as a visual reference.

## Tech Stack
| Layer | Library |
|---|---|
| Framework | Flutter (Dart) |
| State Management | Riverpod |
| Database | Isar (local, NoSQL) |
| Navigation | go_router |
| Fonts | Google Fonts (JetBrains Mono, Inter) |
| Charts | fl_chart |
| Animations | flutter_animate |
| Camera & Image | image_picker |
| OCR | google_mlkit_text_recognition |
        `
    },
    "shehzhytale": {
        title: "ShehzHytale Portfolio",
        subtitle: "An HTML-based portfolio built for the Hytale game community.",
        tags: ["HTML", "CSS", "Community Project"],
        content: `
## Overview
A passion project creating a themed portfolio and landing page specifically tailored for the Hytale online game community, utilizing custom CSS art styles to match the game's blocky aesthetic.
        `
    }
};

// Simple Markdown parser for our basic needs
function parseMarkdown(md) {
    if (!md) return '';

    let html = md.trim();

    // 1. Protect code blocks first
    const codeBlocks = [];
    html = html.replace(/```([\w]*)\n([\s\S]*?)```/g, (_, lang, code) => {
        const idx = codeBlocks.length;
        codeBlocks.push(`<div class="code-block-wrapper"><pre><code class="language-${lang}">${code.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre></div>`);
        return `\x00CODE${idx}\x00`;
    });

    // 2. Parse markdown tables
    html = html.replace(/((?:^\|.+\|[ \t]*(?:\n|$))+)/gm, (tableBlock) => {
        const rows = tableBlock.trim().split('\n');
        let out = '<table class="md-table"><thead><tr>';
        const headers = rows[0].split('|').filter((_, i, a) => i > 0 && i < a.length - 1);
        headers.forEach(h => { out += `<th>${h.trim()}</th>`; });
        out += '</tr></thead><tbody>';
        // skip separator row (row[1] contains |---|---|)
        for (let i = 2; i < rows.length; i++) {
            const cells = rows[i].split('|').filter((_, j, a) => j > 0 && j < a.length - 1);
            if (!cells.length) continue;
            out += '<tr>';
            cells.forEach(c => { out += `<td>${c.trim()}</td>`; });
            out += '</tr>';
        }
        out += '</tbody></table>';
        return out;
    });

    // 3. Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="md-h3">$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2 class="md-h2">$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1 class="md-h1">$1</h1>');

    // 4. Bold & inline code
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');

    // 5. Blockquotes
    html = html.replace(/^> (.*$)/gim, '<blockquote class="md-quote">$1</blockquote>');

    // 6. Lists
    html = html.replace(/^- (.*$)/gim, '<li>$1</li>');
    // Wrap consecutive <li> runs in a <ul>
    html = html.replace(/(<li>[\s\S]*?<\/li>)(\n<li>[\s\S]*?<\/li>)*/gm, match =>
        `<ul class="md-list">${match}</ul>`
    );

    // 7. Horizontal rules
    html = html.replace(/^---+$/gm, '<hr class="md-divider">');

    // 8. Paragraphs — lines not starting with a block-level tag
    html = html.replace(/^(?!<[hH\d]|<ul|<ol|<li|<bl|<table|<hr|<div|<blockquote|\x00CODE)(.*\S.*)$/gm, '<p>$1</p>');

    // 9. Clean up empty paragraphs & restore code blocks
    html = html.replace(/<p><\/p>/g, '');
    codeBlocks.forEach((block, idx) => {
        html = html.replace(`\x00CODE${idx}\x00`, block);
    });

    return html;
}


document.addEventListener('DOMContentLoaded', () => {
    // Get project ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');

    if (projectId && projectsData[projectId]) {
        const project = projectsData[projectId];
        const container = document.getElementById('project-details-content');

        if (container) {
            // Build the tags HTML
            const tagsHtml = project.tags.map(tag => `<span class="clay-pill tag-pill">${tag}</span>`).join('');

            // Build buttons HTML
            let buttonsHtml = '';
            if (project.github) {
                buttonsHtml += `<a href="${project.github}" target="_blank" class="clay-btn outline-btn"><i class="ph-fill ph-github-logo"></i> View Source</a>`;
            }
            if (project.demo) {
                buttonsHtml += `<a href="${project.demo}" target="_blank" class="clay-btn primary-btn"><i class="ph-fill ph-globe"></i> Live Demo</a>`;
            }

            // Build the gallery HTML (if images exist)
            let galleryHtml = '';
            if (project.images && project.images.length > 0) {
                const imgItems = project.images.map(img =>
                    `<div class="gallery-item" onclick="openLightbox('${img.src}', '${img.caption}')">` +
                    `<img src="${img.src}" alt="${img.caption}" loading="lazy" onerror="this.closest('.gallery-item').style.display='none'">` +
                    `<span class="gallery-caption">${img.caption}</span>` +
                    `</div>`
                ).join('');
                galleryHtml = `<div class="project-gallery clay-card"><h2 class="gallery-heading">Screenshots</h2><div class="gallery-grid">${imgItems}</div></div>`;
            }

            // Build the full HTML structure
            const contentHtml = `
                <div class="project-header clay-card text-center">
                    <h1 class="project-hero-title fade-in-title">${project.title}</h1>
                    <p class="project-subtitle">${project.subtitle}</p>
                    <div class="project-tags-container">
                        ${tagsHtml}
                    </div>
                </div>
                
                <div class="project-actions text-center">
                    ${buttonsHtml}
                </div>

                ${galleryHtml}
                
                <div class="project-body clay-card">
                    <div class="markdown-content">
                        ${parseMarkdown(project.content)}
                    </div>
                </div>
            `;

            container.innerHTML = contentHtml;
            document.title = `${project.title} | Shehzan Faqqih`;
        }
    } else {
        // Handle project not found
        const container = document.getElementById('project-details-content');
        if (container) {
            container.innerHTML = `
                <div class="project-header clay-card text-center">
                    <h1 class="project-hero-title">Project Not Found</h1>
                    <p class="project-subtitle">The project you are looking for does not exist or has been removed.</p>
                </div>
                <div class="text-center" style="margin-top: 2rem;">
                    <a href="index.html#projects" class="clay-btn primary-btn">Return to Portfolio</a>
                </div>
            `;
        }
    }
});

// ─── Lightbox ───────────────────────────────────────────────────────────────
function openLightbox(src, caption) {
    let lb = document.getElementById('lightbox-overlay');
    if (!lb) {
        lb = document.createElement('div');
        lb.id = 'lightbox-overlay';
        lb.innerHTML = `
            <div class="lightbox-inner">
                <button class="lightbox-close" onclick="closeLightbox()"><i class="ph ph-x"></i></button>
                <img class="lightbox-img" src="" alt="">
                <p class="lightbox-caption"></p>
            </div>`;
        lb.addEventListener('click', e => { if (e.target === lb) closeLightbox(); });
        document.body.appendChild(lb);
    }
    lb.querySelector('.lightbox-img').src = src;
    lb.querySelector('.lightbox-caption').textContent = caption;
    lb.classList.add('active');
    document.addEventListener('keydown', _lbKeyHandler);
}

function closeLightbox() {
    const lb = document.getElementById('lightbox-overlay');
    if (lb) lb.classList.remove('active');
    document.removeEventListener('keydown', _lbKeyHandler);
}

function _lbKeyHandler(e) {
    if (e.key === 'Escape') closeLightbox();
}
