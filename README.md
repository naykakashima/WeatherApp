# 🌦️ Weather App

A simple weather application built with React + Vite on the frontend and Express + MongoDB on the backend. It uses the WeatherAPI to fetch real-time weather data.

## 🚀 Features

- Search for current weather by city name

- Display temperature, condition, and weather icon

- User authentication (JWT + bcrypt)

- Responsive and fast UI built with Tailwind CSS + DaisyUI

- State management via Zustand

## 🧩 Tech Stack

Frontend: React, Vite, TailwindCSS, DaisyUI, Zustand, Axios
Backend: Node.js, Express, MongoDB, Mongoose, JWT
API: WeatherAPI.com

⚙️ Setup
1. Clone the repository
```
git clone <your-repo-url>
cd weather-app
```

2. Backend setup
```
cd backend
npm install
cp .env.example .env  # add your MongoDB URI and WeatherAPI key
npm run dev
```

3. Frontend setup
```
cd ../frontend
npm install
npm run dev
```

## 🌍 Environment Variables

Your .env file (in the backend) should include:
```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
WEATHER_API_KEY=your_weatherapi_key
```