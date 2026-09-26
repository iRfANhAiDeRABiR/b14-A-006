<div align="center">

# 🏋️ FitLog

### Train with intent. Log every set.

A modern workout library and daily training planner built with **Next.js**, **TypeScript**, and **Tailwind CSS**.

<br />

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)

<br />

[🌐 Live Site](https://fitlog.iabir.me) · [▲ Vercel Deployment](https://fitlog-snowy-eight.vercel.app/) · [💻 Repository](https://github.com/iRfANhAiDeRABiR/b14-A-006)

</div>

---

## ✨ Overview

**FitLog** is a dark-themed fitness application where users can explore workouts, view exercise details, build a daily workout plan, save exercises for later, and track basic workout totals.

The project focuses on a clean UI, simple workout planning, responsive design, and an easy-to-use experience across desktop and mobile devices.

---

## 🔗 Live Links

- **Custom Domain:** https://fitlog.iabir.me
- **Vercel Deployment:** https://fitlog-snowy-eight.vercel.app/
- **GitHub Repository:** https://github.com/iRfANhAiDeRABiR/b14-A-006

---

## 🚀 Features

- 📚 Browse a complete workout library
- 🔍 View detailed information for each workout
- ➕ Add exercises to **Today's Plan**
- 🔖 Save workouts for later
- 🚫 Prevent duplicate plan and saved items
- ✅ Mark planned workouts as completed
- 🗑️ Remove workouts from Plan or Saved
- 🔢 Live **Plan** and **Saved** counters in the navbar
- 📊 View workout summary:
  - Total exercises
  - Total minutes
  - Total calories
- ↕️ Sort workouts by:
  - Duration
  - Calories
  - Rating
- 🔔 Toast notifications for user actions
- ⏳ Loading states while fetching data
- 🚧 Custom 404 page
- 📱 Fully responsive layout

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Framework and App Router |
| **TypeScript** | Type-safe development |
| **React** | UI and state handling |
| **Tailwind CSS** | Styling and responsive design |
| **React Context API** | Global workout state |
| **Lucide React** | Icons |
| **React Hot Toast** | Notifications |
| **Vercel** | Deployment |
| **Cloudflare** | Custom domain / DNS |

---

## 📄 Pages

### 🏠 Home

Route:

```text
/
```

Includes:

- Navbar
- Hero section
- Workout Library
- Workout cards
- Footer

---

### 🏋️ Workout Details

Route:

```text
/workout/[id]
```

Example:

```text
/workout/1
```

Includes:

- Workout image
- Workout title
- Description
- Category
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Instructions
- Add to Today's Plan
- Save for Later

---

### 📋 My Plan

Route:

```text
/my-plan
```

Includes:

- Today's Plan tab
- Saved tab
- Workout summary
- Sorting
- View Details
- Mark as Done
- Remove workout
- Empty state

---

## 🌐 API

Workout data is loaded from:

```text
https://api.abcz.workers.dev/api/fitlog
```

Single workout:

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

Example:

```text
https://api.abcz.workers.dev/api/fitlog/1
```

---

## 📁 Project Structure

```text
b14-A-006/
│
├── app/
│   ├── my-plan/
│   │   └── page.tsx
│   │
│   ├── workout/
│   │   └── [id]/
│   │       ├── loading.tsx
│   │       └── page.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navbar.tsx
│   ├── PlanWorkoutCard.tsx
│   ├── WorkoutActions.tsx
│   └── WorkoutCard.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── public/
│
├── package.json
└── README.md
```

> The final structure may vary slightly depending on implementation.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/iRfANhAiDeRABiR/b14-A-006.git
```

### 2. Enter the project folder

```bash
cd b14-A-006
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

---

## 🧠 State Management

FitLog uses the **React Context API** to manage workout data globally.

The context manages:

```text
Today's Plan
Saved Workouts
```

Main actions include:

```text
Add to Plan
Save Workout
Mark as Done
Remove from Plan
Remove from Saved
```

Navbar counters and My Plan totals update automatically when the state changes.

---

## ↕️ Sorting

The My Plan page supports sorting by:

| Option | Order |
|---|---|
| **Duration** | Shortest first |
| **Calories** | Lowest first |
| **Rating** | Highest first |

---

## 🔔 Toast Messages

Examples of user feedback:

```text
Added to today's plan
Already in today's plan
Saved for later
Already saved
Workout completed!
Removed from today's plan
Removed from saved
```

---

## 📱 Responsive Design

FitLog is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

Layouts, workout cards, buttons, and navigation adapt based on screen size.

---

## 🚧 Error Handling

FitLog includes a custom **404 page** for:

- Invalid routes
- Invalid workout IDs
- Missing workout data

Users can return to the workout library using the **Back to Workouts** button.

---

## 🚀 Deployment

The project is deployed on **Vercel**.

- **Primary Live URL:** https://fitlog.iabir.me
- **Vercel URL:** https://fitlog-snowy-eight.vercel.app/

The custom domain is connected through **Cloudflare DNS**.

---

<div align="center">

### Built with Next.js, TypeScript & Tailwind CSS

**Programming Hero — B14 Assignment 6**

🌐 **https://fitlog.iabir.me**

</div>
