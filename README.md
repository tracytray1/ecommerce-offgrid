# OffGrid Project

A React-based web application built with **Vite**, **Firebase**, and **styled-components**, featuring authentication, a shopping cart, and category browsing.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Available Scripts](#available-scripts)  
- [Project Structure](#project-structure)  
- [Firebase Setup](#firebase-setup)  
- [Known Issues & Tips](#known-issues--tips)  
- [License](#license)

---

## Project Overview

OffGrid is an e-commerce demo application where users can:

- Browse products by category
- Sign in with Google (Popup or Redirect)
- Add/remove items from a shopping cart
- Persist cart state across sessions
- Navigate through a responsive UI with a global navigation bar

---

## Features

- **Authentication**
  - Google Sign-In (Popup & Redirect)
  - User documents created in Firestore after login

- **Product Management**
  - Products are grouped into categories (e.g., Hats, Jackets, Sneakers)
  - Preview of up to 4 items per category on the homepage

- **Shopping Cart**
  - Add/remove items from cart
  - Cart count and dropdown with selected products
  - Context API for global state management

- **Styling**
  - Reusable button components (base, Google, inverted)
  - Styled-components for scoped styling  

---

## Tech Stack

- **React 19**  
- **React Router DOM v6**  
- **Firebase Auth & Firestore**  
- **Styled Components**  
- **Vite**  

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/offgrid.git
cd offgrid
```
2. Install dependencies:

```bash
npm install
```
3. Create a .env file at the root with your Firebase config:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_APP_ID=your_app_id
```
4. Start the development server:

```bash
npm run dev
```
---

## Available Scripts
```bash
npm run dev — start local development server

npm run build — build the project for production

npm run preview — preview production build
```
---

## Project Structure
```php
src/
 ├─ assets/                  # Images, SVGs
 ├─ components/
 │   ├─ Button/               # Reusable button components
 │   ├─ CartIcon/             # Shopping cart icon component
 │   ├─ Directory/            # Category directory component
 │   ├─ DirectoryItem/        # Individual category item
 │   ├─ ProductCard/          # Product display card
 │   └─ Navigation/           # Persistent navigation bar
 ├─ contexts/                 # React Context for state management
 ├─ routes/                   # Page-level routes
 ├─ utils/                    # Firebase utils and helpers
 ├─ App.jsx                   # Root component
 └─ main.jsx                  # Entry point
```
## Firebase Setup

1. Create a Firebase project.

2. Enable Authentication (Google) and Firestore.

3. Add your Firebase config to .env as shown above.

4. Ensure Firebase utils (firebase.jsx) exports auth and functions like signInWithGooglePopup, createUserDocumentFromAuth.
