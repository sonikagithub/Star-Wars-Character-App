# 🌌 Star Wars Character App — Frontend Take-Home Assignment

This is my solution to the Frontend Take-Home Assignment.  
A fully responsive React application that fetches Star Wars characters from SWAPI and displays them with search, pagination, and detailed modals.

---

## 🚀 Tech Stack Used
- **React (Functional Components + Hooks)**
- **Tailwind CSS**
- **JavaScript (ES6)**
- **Axios**
- **React Router**
- **React Testing Library (structure only)**

---

## ⭐ Project Overview

A responsive Star Wars Characters Application that:

- ✔ Fetches all characters from SWAPI  
- ✔ Displays them in dynamic character cards  
- ✔ Allows searching, filtering, and pagination  
- ✔ Shows expanded details in a modal  
- ✔ Provides mocked login/logout  
- ✔ Works smoothly across all screen sizes  

---

## 🎯 Features Implemented

### ✅ 1. Fetch & Display Characters
- Fetches characters from SWAPI `/people`
- Combined **all pages** into one dataset
- Includes:
  - Loading state  
  - Error handling  
  - Pagination  

---

### ✅ 2. Character Cards
Each card displays:
- Character name  
- Random image (Picsum)  
- **Colored background based on species type**  
- Smooth hover animations  
- Responsive layout  

Clicking a card opens a modal with detailed info.

---

### ✅ 3. Character Details Modal
Shows:
- Name  
- Height (meters)  
- Mass (kg)  
- Birth year  
- Number of films  
- Added date (formatted `dd-MM-yyyy`)  

**Homeworld Info:**
- Name  
- Terrain  
- Climate  
- Population  

---

### ✅ 4. Searching (Bonus)
- Instant search (no Enter key needed)  
- Searches across:
  - Name  
  - Films  
  - Homeworld  
  - Species  
- Case-insensitive  
- Filters entire dataset  

---

## ⚙️ Additional Enhancements (Bonus)
- ✔ Combined search logic  
- ✔ Smooth UI animations  
- ✔ Dynamic placeholder text (rotates every 3 seconds)  
- ✔ Mocked Authentication (Login + Logout)  
- ✔ Persistent session via `localStorage`  
- ✔ Ready folder structure for testing  

---
## 🔐 Credentials (Mock Authentication)
Use these credentials when logging in:
- username admin 
- password 1234

## How to run the project
✔ npm install 

✔ npm start  

## 📌 Submission Includes

-Complete source code

-README documentation

-Required + bonus features


