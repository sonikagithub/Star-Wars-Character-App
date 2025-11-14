🌌 Star Wars Character App — Frontend Take-Home Assignment

This project is my solution to the Frontend Take-Home Assignment, focusing on building a responsive, interactive UI using modern frontend tools. The app fetches and displays Star Wars characters from the SWAPI API, supports search, modals, pagination, and more.

🚀 Tech Stack Used

React (Functional Components + Hooks)

Tailwind CSS

JavaScript (ES6)

Axios for API calls

React Router

React Testing Library (structure prepared)

⭐ Project Overview

A responsive Star Wars Characters Application that:

✔ Fetches all characters from SWAPI
✔ Displays them in dynamic character cards
✔ Allows searching, filtering, and pagination
✔ Shows a modal with expanded character details
✔ Includes simple mocked login/logout
✔ Works smoothly across all screen sizes

🎯 Features Implemented
✅ 1. Fetch & Display Characters

Integrated /people endpoint from SWAPI

Combined all pages of the API into a unified dataset

Included:

Loading state

Error handling

Pagination support

✅ 2. Character Cards

Each card includes:

Character Name

Random Image (via Picsum)

Colored background based on species type

Smooth hover animations & responsive design

Click → Opens a modal with detailed info

✅ 3. Character Details Modal

The modal displays:

Name (Header)

Height (converted to meters)

Mass (kg)

Birth year

Number of films

Date added (formatted dd-MM-yyyy)

Homeworld details:

Name

Terrain

Climate

Population

✅ 4. Searching (Bonus Implemented)

Live search as you type

Partial case-insensitive matching

Searches across:

Name

Films

Species

Homeworld

⚙️ Additional Enhancements (Bonus)

✔ Combined search logic
✔ Clean UI animations
✔ Dynamic placeholder that rotates every 3 seconds
✔ Mocked Authentication (Login + Logout)
✔ User stays logged in via localStorage
✔ Ready structure for integration testing