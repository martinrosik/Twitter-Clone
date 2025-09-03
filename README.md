# 🐦 Twitter Clone

🚀 A simple **Twitter-like** app where users can:
* ✍️ Write tweets
* 📜 View tweets from all users
* 🗑️ Delete only their own tweets

🔐 Authentication is included — users can register and log in, and their session is handled securely.

## ⚡ Tech Stack

* ⚛️ **React** – Frontend framework
* 🛡️ **NestJS** – Backend framework
* 🍃 **MongoDB** - Database

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/martinrosik/Twitter-Clone.git
cd Twitter-Clone
```

### 2️⃣ Install dependencies

#### Frontend

```bash
cd front-end
npm install
```

#### Backend

```bash
cd back-end
npm install
```

### 3️⃣ Setup MongoDB

1. Install and run [MongoDB](https://www.mongodb.com/try/download/community).
2. Make sure MongoDB is running locally (default: `mongodb://localhost:27017`).

Example connection string for this project:  
`mongodb://localhost:27017/YOUR_DATABASE_NAME`

### 4️⃣ Run the app

#### Start backend (NestJS)

```bash
npm run start:dev
```

#### Start frontend (React + Vite)

```bash
npm run dev
```
