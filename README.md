# Arabic Fake Filler (معبئ البيانات)

A lightweight, 100% standalone Chrome extension that instantly populates web forms with realistic Arabic data for QA and development testing. 

Unlike traditional data generators, this extension runs entirely locally in your browser—requiring no backend server, Python scripts, or API keys.

## ✨ Key Features

* **Zero Dependencies:** Fully standalone execution in the browser. No backend required.
* **Smart Bilingual Detection:** Automatically maps data to fields using both English and Arabic attributes (e.g., `name` or `الاسم`).
* **Gender-Synchronized Form Filling:** Automatically aligns student first names with the appropriate option in gender dropdown menus (`ذكر` / `أنثى`, `Male` / `Female`).
* **Strict Paternal Lineage Logic:** Enforces male Arabic names for Father (`اسم الأب`) and Grandfather (`اسم الجد`) fields while preserving realistic full-name generation.
* **Dynamic Fallback Engine:** Intelligently handles custom or unrecognized fields by generating strings containing the field's actual HTML ID/Name for easy database traceability.
* **School Management Ready:** Pre-loaded with specific testing vocabularies for ERP/LMS dashboards (student IDs, parent professions, fee amounts, and report categories).
* **Safe Form Progression:** Selectively fills text inputs, numbers, localized dates, checkboxes, and `<select>` dropdowns while leaving radio buttons untouched to preserve manual form state transitions (e.g., New vs. Existing Student).

## 🚀 Installation

This extension is loaded locally for development and testing:

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked** and select the extension directory.

## 💻 Usage

1. Navigate to your target form or dashboard.
2. Click the extension icon in your Chrome toolbar.
3. Click **تعبئة جميع الحقول (Fill All Fields)** to populate the form.
4. Click **مسح جميع الحقول (Clear All Fields)** to instantly reset inputs.

## 📁 Project Structure

* `manifest.json`: Chrome extension configuration.
* `popup.html` / `popup.js`: Native RTL user interface and event listeners.
* `content.js`: Core data generation and DOM manipulation engine.

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.