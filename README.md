# 🐦 Twitter Clone

A simple **Twitter-like app** built with modern web technologies where users can ✍️ write tweets, 📜 view them, and 🗑️ delete them.

## ⚡ Tech Stack

* ⚛️ **React** – Frontend framework
* 🎨 **TailwindCSS** – Styling
* 🐻 **Zustand** – State management
* 🌐 **Axios** – API requests
* 🛡️ **NestJS** – Backend framework

---

## 📸 Features

* ✅ Add a tweet
* ✅ View all tweets
* ✅ Delete a tweet
* ✅ State management with **Zustand**
* ✅ Backend powered by **NestJS**

---

## 📂 Project Structure

```
/frontend
  ├── src/
  │   ├── components/
  │   │   ├── TweetForm.tsx
  │   │   └── TweetList.tsx
  │   ├── store/
  │   │   └── TweetStore.ts
  │   └── styles/
  │       ├── tweetform.css
  │       └── tweetlist.css

/backend
  ├── src/
  │   ├── tweets/
  │   │   ├── tweets.controller.ts
  │   │   ├── tweets.service.ts
  │   │   └── tweet.model.ts
  │   └── main.ts
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/twitter-clone.git
cd twitter-clone
```

### 2️⃣ Install dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### 3️⃣ Run the app

#### Start backend (NestJS)

```bash
npm run start:dev
```

#### Start frontend (React + Vite)

```bash
npm run dev
```

---

## 📬 API Endpoints

* `GET /tweets` → Get all tweets
* `POST /tweets` → Create a new tweet
* `DELETE /tweets/:id` → Delete a tweet

---

## 🎯 Future Improvements

* 🧑‍🤝‍🧑 User authentication
* ❤️ Like button
* 💬 Comments
* 📱 Responsive design improvements

---

## 🤝 Contributing

Pull requests are welcome! 🚀 If you have ideas or find bugs, open an issue.

---

## 📝 License

MIT License © 2025
