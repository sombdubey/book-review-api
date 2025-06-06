# 📚 Book Review API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that allows users to sign up, log in, add books, submit reviews, and perform book searches. Authentication is handled using **JWT (JSON Web Tokens)**.

---

## 🚀 Features

- User registration and login with secure password hashing and JWT-based authentication
- Add, view, and filter books
- Submit, update, and delete reviews (1 per user per book)
- Get book details with average rating and reviews
- Search books by title or author (partial & case-insensitive)
- Pagination on list and reviews

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JWT (jsonwebtoken)
- **Other Tools**: dotenv, bcryptjs, nodemon

---

## 🧪 API Endpoints

### 🔐 Authentication

| Method | Endpoint       | Description        |
|--------|----------------|--------------------|
| POST   | `/signup`      | Register new user  |
| POST   | `/login`       | Login and get token |

### 📚 Books

| Method | Endpoint        | Description                                       |
|--------|------------------|---------------------------------------------------|
| POST   | `/books`         | Add a book (auth required)                        |
| GET    | `/books`         | Get all books (pagination, filter by author/genre) |
| GET    | `/books/:id`     | Get book details + average rating + reviews       |
| GET    | `/search?q=...`  | Search books by title or author                   |

### ✍️ Reviews

| Method | Endpoint                 | Description                            |
|--------|---------------------------|----------------------------------------|
| POST   | `/books/:id/reviews`      | Add review to book (auth, 1/user/book) |
| PUT    | `/reviews/:id`            | Update your review                     |
| DELETE | `/reviews/:id`            | Delete your review                     |

---

## 🔧 Setup Instructions

### 1. Clone the repo
## 🔧 Setup
```bash
git clone https://github.com/sombdubey/book-review-api.git
cd book-review-api
npm install
cp .env.example .env
# Fill in .env values
node server.js

# Signup
curl -X POST http://localhost:5000/signup -d '{"username":"user","password":"1234"}' -H "Content-Type: application/json"

# Login
curl -X POST http://localhost:5000/login -d '{"username":"user","password":"1234"}' -H "Content-Type: application/json"

## 🧾 Database Schema

The API uses **MongoDB** with the following collections:

---

### 📘 Users

| Field     | Type     | Description              |
|-----------|----------|--------------------------|
| `_id`     | ObjectId | Unique user ID           |
| `username`| String   | Unique username          |
| `password`| String   | Hashed password (bcrypt) |
| `createdAt` | Date   | Timestamp of creation    |

---

### 📚 Books

| Field      | Type       | Description                          |
|------------|------------|--------------------------------------|
| `_id`      | ObjectId   | Unique book ID                       |
| `title`    | String     | Title of the book                    |
| `author`   | String     | Author name                          |
| `genre`    | String     | Genre/category                       |
| `createdBy`| ObjectId   | Reference to the user who added it   |
| `createdAt`| Date       | Timestamp of creation                |

---

### 📝 Reviews

| Field      | Type       | Description                                  |
|------------|------------|----------------------------------------------|
| `_id`      | ObjectId   | Unique review ID                             |
| `book`     | ObjectId   | Reference to the reviewed book               |
| `user`     | ObjectId   | Reference to the reviewing user              |
| `rating`   | Number     | Rating from 1 to 5                           |
| `comment`  | String     | Optional review comment                      |
| `createdAt`| Date       | Timestamp of creation                        |

---

