# CustomWear E-commerce

<div align="center">
  <a href="https://eimer.github.io/myTestByteex/#/">
    <img src="https://img.shields.io/badge/-Live%20Demo-brightgreen?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://github.com/Eimer/myTestByteex">
    <img src="https://img.shields.io/badge/-Source%20Code-blue?style=for-the-badge&logo=github&logoColor=white" alt="Source Code">
  </a>
</div>

---

## 📝 Description
**CustomWear** is a modern E-commerce platform that allows users to purchase and customize clothing. This project serves as a technical demonstration of building dynamic, content-driven interfaces using Angular and Headless CMS integration.

## 🔗 Links
* **Live Demo:** [https://eimer.github.io/myTestByteex/#/](https://eimer.github.io/myTestByteex/#/)
* **Source Code:** [https://github.com/Eimer/myTestByteex](https://github.com/Eimer/myTestByteex)

---

## 🚀 Technical Documentation

### Tech Stack
* **Framework:** Angular 19+
* **CMS (CRM):** [Contentful](https://www.contentful.com/) (Headless CMS for content management)
* **Styling:** SCSS (BEM Methodology)
* **Deployment:** GitHub Pages

### Project Architecture
The application follows a modular and scalable structure:

* **`src/app/core/services/api.service`** — Centralized service for Contentful API communication.
* **`src/app/features/`** — Main page sections and feature-specific business logic.
* **`src/app/layout/`** — Application shell components (Header, Footer, and global structure).
* **`src/app/shared/`** — Library of reusable UI components (e.g., Slider, Accordion, Buttons).

---

## 🛠 Installation & Setup


### Prerequisites
* Node.js & npm
* Angular CLI (`npm install -g @angular/cli`)

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/Eimer/myTestByteex.git](https://github.com/Eimer/myTestByteex.git)

### How to Run locally
- Install packages:
  ```bash
  npm install
- Use:
  ```bash
  ng serve --open