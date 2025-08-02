# 🏥 NirogGyan Frontend Assignment - Appointment Booking App

A responsive full-stack web application for booking doctor appointments, built using **React (TypeScript)** for the frontend and **Node.js + Express** for the backend. The application allows users to view a list of doctors, check their availability, and schedule appointments with an easy-to-use form.

---

## 🚀 Features

- View a searchable list of doctors with name, specialization, and availability
- Detailed doctor profile with availability schedule
- Book appointments by filling a form (Patient Name, Email, Date/Time)
- Confirmation message on successful booking
- Responsive design using Bootstrap
- Backend API for handling appointment submissions

---

## 🛠 Tools & Libraries Used

### Frontend
- **React.js** (with **TypeScript**): Core UI library
- **React Router**: For navigation between pages
- **Bootstrap 5**: Styling and layout
- **Axios**: API requests

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Backend framework
- **CORS**: Cross-origin middleware
- **body-parser**: Parsing incoming JSON

---

## 📈 Improvements with More Time

Given additional time, I would enhance the project with:

- 🔐 **Authentication**: Patient login & dashboard to manage bookings
- 📅 **Calendar Picker**: Integrate a calendar UI for selecting available dates/times
- 📡 **Real-time Backend Data**: Replace static doctor data with a connected database (e.g., MongoDB or PostgreSQL)
- 💬 **Notification System**: Send appointment confirmations via email
- 📱 **Mobile UI Enhancements**: Further optimize for mobile and tablet experience

---

## 🧠 Challenges Faced and Solutions

### 1. **Form Validation**
- **Challenge**: Form submission worked even when inputs were empty.
- **Solution**: Added manual validation using React `useState` and conditionally displayed error messages for each field.

### 2. **CORS Issues in API Integration**
- **Challenge**: Browser blocked API request due to CORS policy.
- **Solution**: Installed `cors` middleware in Express and enabled it globally.

### 3. **TypeScript Type Errors**
- **Challenge**: Type mismatches between props and API responses.
- **Solution**: Defined and reused consistent interfaces (`Doctor`, `AppointmentFormData`) throughout components.

---

## 📸 Screenshots

> src\assets\screenshots\landingPage.png  - [LandingPage]
>src\assets\screenshots\doctorProfile.png - [doctorProfile]
>src\assets\screenshots\BookAppointmentPage.png - [BookAppointmentPage]

---

## 📂 How to Run the Project


Install dependencies
# Frontend
  cd frontend
  npm install

# Backend
  cd ../backend
  npm install

# Run the App
# Backend (Node.js + Express)
cd backend
npm start
Runs on http://localhost:5000

# Frontend (React + Vite)
cd frontend
npm run dev

✅ Author
G Bhagya Sri Pushpa
Frontend-Focused Full Stack Developer Assignment