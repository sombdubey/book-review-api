# 📚 Book Review API

A RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that allows users to sign up, log in, add books, submit reviews, and perform book searches. Authentication is handled using **JWT (JSON Web Tokens)**.

---

## 🚀 Features

- JWT-based authentication
- Add, view, and search books
- Submit, update, and delete reviews (1/user/book)
- Book details include average rating and paginated reviews

---

## 🛠️ Tech Stack

- Node.js, Express.js
- MongoDB + Mongoose
- JWT for Authentication
- bcrypt, dotenv, nodemon

---

## 🧪 API Endpoints

### 🔐 Authentication

| Method | Endpoint  | Description         |
|--------|-----------|---------------------|
| POST   | `/signup` | Register new user   |
| POST   | `/login`  | Login and get token |

### 📚 Books

| Method | Endpoint       | Description                                         |
|--------|----------------|-----------------------------------------------------|
| POST   | `/books`       | Add a book (auth required)                          |
| GET    | `/books`       | Get all books (pagination + optional filters)       |
| GET    | `/books/:id`   | Get book details with average rating + reviews      |
| GET    | `/search`      | Search books by title or author                     |

### ✍️ Reviews

| Method | Endpoint              | Description                            |
|--------|------------------------|----------------------------------------|
| POST   | `/books/:id/reviews`  | Add review to a book (auth)            |
| PUT    | `/reviews/:id`        | Update your own review                 |
| DELETE | `/reviews/:id`        | Delete your own review                 |

---

## 🔧 Setup Instructions

```bash
# Clone the repository
git clone https://github.com/sombdubey/book-review-api.git
cd book-review-api

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# (Edit .env with your MongoDB URI and secret)

# Run the server
node server.js
```

---

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
