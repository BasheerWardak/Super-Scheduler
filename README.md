# Super Scheduler (Offline Desktop Scheduling App)

🚧 Status: In Development / Prototype  
A privacy-focused **offline scheduling application** built with **HTML5, CSS3, and JavaScript**. Designed to work locally (no account required) and save events using **local JSON persistence** via the **File System Access API**.

## ✅ Key Features
- **Offline-first**: runs locally without a backend
- **Conflict Detection**: flags overlapping events to prevent double-booking
- **Recurring Events**: supports repeat scheduling patterns
- **Local Data Storage**: saves/loads events as **JSON** using the File System Access API
- **Maintainable Architecture**: organized using a **3-layer design**
  - Presentation (UI)
  - Business Logic (validation + scheduling rules)
  - Data Layer (read/write JSON)

## 🧰 Tech Stack
- **HTML5 / CSS3 / JavaScript**
- **File System Access API** (JSON import/export and local persistence)

## 🚀 Getting Started
### Option 1 — Run Locally (Quickest)
1. Download or clone the repo
2. Open `index.html` in your browser

> Note: Some browsers restrict local file access for saving/loading files. If saving/loading doesn’t work, use Option 2.

### Option 2 — Run with a Local Server (Recommended)
Using VS Code:
1. Install the **Live Server** extension
2. Right-click `index.html` → **Open with Live Server**

Or using Python:
```bash
python -m http.server 8000
