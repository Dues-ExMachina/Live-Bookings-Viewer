# Live Bookings Viewer
This project is a comprehensive full-stack, real-time "Live Bookings" viewer. It is designed for administrators at partner venues to monitor and confirm incoming bookings as they happen. The application features a Node.js backend that simulates new bookings and a vanilla JavaScript frontend that displays them instantaneously without requiring a page refresh.


# Tech Stack
**Backend:** Node.js, Express.js, Socket.IO

**Frontend:** HTML, CSS, JavaScript (no frameworks)

**Database:** In-memory JavaScript array on the server


# Features
**Real-Time Updates:** New bookings are pushed from the server and appear at the top of the list instantly.
**Full-Stack Integration:** Demonstrates a clear and functional data flow between a Node.js backend and a frontend client.
**Mock Data Simulation:** The server automatically generates a new random booking every 5 seconds to simulate a live environment.
**No Page Refresh:** The user interface is updated dynamically using JavaScript and Socket.IO.


# Project Structure
```bash
.
├── backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── README.md
```


# Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
You must have Node.js installed on your machine.

# Installation and Execution
Follow these steps to run the application.
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/live-bookings-viewer.git
cd live-bookings-viewer
```
### 2. Install Backend Dependencies
```bash
cd backend
npm install
```
### 3. Start the Backend Server
```bash
node server.js
```
The server will start, and you should see the following confirmation message in your terminal. Keep this terminal window open.
```bash
Server is running on http://localhost:3000
A user connected
New booking generated: { ... }
```
### 4. Run the Frontend Application
- Open the frontend/index.html file in your web browser. Or simply use liveserver extention (Recommended) on VS-code.


Once you open the page, you will see the "Live Bookings" dashboard. The application will connect to the running backend server, and a new booking will appear at the top of the list every 5 seconds.

