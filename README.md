[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/YHSq4TPZ)

# To-Do App – Preliminary Assignment Submission

Students often struggle with time management and procrastination, especially when juggling multiple academic and personal responsibilities. This web app provides a centralized, intelligent to-do platform that helps students plan, prioritize, and track tasks effectively to improve productivity and focus.

## 🚀 Project Setup & Usage

**How to install and run your project:**  

### Prerequisites

- Node.js (v18.x or later recommended)
- pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd <your-project-directory>
```

2. Install dependencies for all workspaces:

```bash
pnpm install:all
```

3. Setup Environment Variables:
   The client requires a `.env` file for configuration. Create a file named `.env` inside the `/client` directory and add the necessary variables.

```bash
# client/.env
VITE_API_BASE_URL='backend-here'
```

## Development

To start the development servers for both the client and the server simultaneously, run the following command from the root directory:

```bash
pnpm dev
```

This will concurrently:

- Start the Vite development server for the React client (usually on http://localhost:3000).

## Available Scripts

Here is a list of the most important scripts available in the project.

### Root

- `pnpm dev`: Starts the Vite development server.

### Linting & Formatting

- `pnpm lint`: Lints all files in the project.
- `pnpm format`: Formats all files in the project with Prettier.
- `pnpm format:check`: Checks for formatting issues without modifying files.

## Testing Account

| Username   | Password    |
|------------|-------------|
| pennytel27 | P@ss123456  |

## 🔗 Deployed Web URL or APK file

Use this link to access website
[Website TodoTofu](https://my-todo-tofu-deploy.vercel.app/)

## 🎥 Demo Video

Use this link to access demo video
[Demo Video](https://youtu.be/HaBe8nYmrd4)

## 💻 Project Introduction

### a. Overview

**Todo Tofu** is a minimalist time management application specifically designed for Vietnamese university students who are beginning their journey into structured life planning. The application emphasizes simplicity and emotional wellness, providing a gentle introduction to productivity tools without the complexity or pressure often associated with enterprise-level solutions.

The name **"Tofu"** reflects the application's core philosophy: maintaining structure while remaining adaptable—firm enough to provide guidance, yet flexible enough to accommodate the dynamic nature of student life. This approach helps users develop sustainable planning habits that balance academic responsibilities, work commitments, social activities, and personal well-being.

---

### b. Key Features & Function Manual

<span style="color:#64B5F6"><strong>Task Management System</strong></span> <br/>
The application provides comprehensive CRUD operations for task management, allowing users to create, read, update, and delete tasks with intuitive controls. Each task can be configured with specific start times, duration estimates, and category assignments to ensure proper organization and time allocation.

<span style="color:#64B5F6"><strong>Category Management</strong></span> <br/>
Users have complete control over their organizational system through customizable categories and tags. The application supports full CRUD operations for categories, enabling users to create personalized classification systems such as "Academic Work," "Personal Care," "Social Activities," or "Professional Development."

<span style="color:#64B5F6"><strong>Calendar Integration</strong></span> <br/>
The calendar feature provides a comprehensive 24-hour daily view with drag-and-drop functionality for intuitive event scheduling. Users can create, modify, and manage calendar events through visual interaction, making schedule planning more engaging and accessible.

<span style="color:#64B5F6"><strong>Intelligent Reminder System</strong></span> <br/>
The application includes a contextual reminder system that provides daily notifications for upcoming events while offering motivational feedback based on user activity patterns. The system recognizes work-life balance trends and provides appropriate encouragement or gentle warnings when needed.

<span style="color:#64B5F6"><strong>Analytics Dashboard</strong></span> <br/>
The analytics module tracks time distribution across different categories, providing percentage breakdowns of weekly activities. Users can monitor work versus rest periods, compare current performance against previous timeframes, and track consistency streaks to maintain engagement with their planning practices.

<span style="color:#64B5F6"><strong>Application Interface Structure</strong></span> <br/>
The application is organized into focused pages including:
- A **Time Wallet** dashboard that visualizes available time as a resource
- **Daily task management** interfaces
- **Historical review** capabilities for incomplete tasks
- **Comprehensive calendar** views
- **Detailed analytics** insights

Theme management options support both **light and dark modes** for comfortable planning at any time.

---

### c. Unique Features (What’s special about this app?)

<span style="color:#64B5F6"><strong>Tofu Philosophy Implementation</strong></span> <br/>
Unlike conventional productivity applications that emphasize rigid scheduling and maximum efficiency, Todo Tofu adopts a balanced approach that prioritizes user well-being alongside productivity. The application encourages sustainable habits rather than intensive work patterns, making it particularly suitable for students developing their first systematic approach to time management.

<span style="color:#64B5F6"><strong>Beginner-Friendly Design</strong></span> <br/>
The application specifically targets users who are new to structured planning, avoiding the feature complexity that can make established productivity tools overwhelming. Interface elements and workflows are designed with learning curves in mind, providing clear guidance without sacrificing functionality.

<span style="color:#64B5F6"><strong>Forgiving Task Management</strong></span> <br/>
Todo Tofu recognizes that student schedules are inherently unpredictable, offering flexible rescheduling options and non-punitive progress tracking. Users can easily manage incomplete tasks from previous days, choosing to reschedule or archive items based on current priorities and circumstances.

<span style="color:#64B5F6"><strong>Motivational Intelligence</strong></span> <br/>
The application provides contextual encouragement through system-generated insights that recognize positive patterns and gently address concerning trends. This approach maintains user engagement while promoting healthy planning habits without creating additional stress or pressure.

<span style="color:#64B5F6"><strong>Time Wallet Concept</strong></span> <br/>
By visualizing time as a finite resource similar to financial budgeting, users develop a more tangible understanding of their daily capacity. This metaphor helps students make informed decisions about time allocation while maintaining awareness of their limits and available resources.

---

### d. Technology Stack and Implementation Methods

<span style="color:#64B5F6"><strong>Frontend Development</strong></span> <br/>
- React (via Vite)
- TailwindCSS
- FullCalendar (drag-and-drop scheduling)

<span style="color:#64B5F6"><strong>Backend Infrastructure</strong></span> <br/>
- Node.js (Express.js)
- MongoDB (data storage)
- REST API (authentication, task management, etc.)

<span style="color:#64B5F6"><strong>State and Data Management</strong></span> <br/>
- Zustand (state management)
- date-fns (date utilities)

---

### e. Service Architecture & Database Structure

<span style="color:#64B5F6"><strong>Architectural Overview</strong></span> <br/>
Todo Tofu follows a **client-server** architecture:
- Frontend: React SPA
- Backend: Express.js REST API
- JSON-based data exchange
- Secure token-based authentication

<span style="color:#64B5F6"><strong>MongoDB Collections</strong></span> <br/>
- **Users**: Credentials, preferences, settings
- **Tasks**: Title, description, duration, category, status
- **Categories**: Labels, colors, organizational tags
- **Events**: Calendar items with recurrence options
- **Analytics**: Weekly stats, trends, streaks

---

## 🧠 Reflection

### a. If you had more time, what would you expand?

- Allow users to **import their academic timetables** directly into the calendar system for **comprehensive schedule management**.  
- Add **collaborative features** like shared to-do lists or peer check-ins for **group projects** to better reflect university life dynamics.  
- **Polish the UI** animations and transitions for **smoother user experience** and **enhance mobile responsiveness** across different devices.  
- Implement **weekly and monthly planning views** with multi-device syncing capabilities for **broader schedule perspective**.  
- Provide **detailed control** over **reminders and notification** settings, including do-not-disturb blocks and custom encouragement messages.  
- Develop smart scheduling features that **dynamically allocate tasks** based on **user routines** and preferred **focus hours**.

### b. If you integrate AI APIs more for your app, what would you do?

I would focus on **three main areas**:

- **Smart Time Recommendations**: Using past task completion patterns and Google Calendar context through API integration, the application could **suggest realistic time slots** for task completion, especially beneficial for users who tend to underestimate required time for activities.

- **Balance Detection & Advice**: AI could analyze category breakdown and streak trends to provide **personalized life-balance feedback** with contextual suggestions such as "You've spent 80% of time on work this week. Consider adding a rest or social task."

- **Natural Language Task Entry**: Integrate simple NLP functionality to allow users to **input tasks using natural language** like "Finish design report tomorrow at 3pm for 2 hours" and **automatically** convert that input into **scheduled tasks** with appropriate **reminders** and **calendar** entries.


## ✅ Checklist

- [x] Code runs without errors
- [x] All required features implemented (add/edit/delete/complete tasks)
- [x] All ✍️ sections are filled
