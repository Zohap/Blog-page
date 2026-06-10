# Blog CRUD Application

A simple and responsive Blog application built using Node.js, Express.js, and EJS templating engine. This project demonstrates full CRUD (Create, Read, Update, Delete) functionality without using a database, instead using an in-memory array to store blog posts.

## 🚀 Features

- Create new blog posts
- Read/view all posts
- View single post details
- Update existing posts
- Delete posts
- Responsive card-based UI
- Clean header and footer using EJS partials
- RESTful routing structure
- Method Override for PUT & DELETE requests

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- UUID (for unique IDs)
- Method-Override
- HTML, CSS

## 📂 Project Structure

views/
├── partials/
├── index.ejs
├── show.ejs
├── new.ejs
├── edit.ejs

public/
├── style.css

index.js
package.json

## ⚙️ Installation & Setup

1. Clone the repository:
   git clone https://github.com/Zohap/Blog-page.git

2. Install dependencies:
   npm install

3. Run the server:
   nodemon index.js

4. Open browser:
   http://localhost:8080

## 📌 Learning Purpose

This project is built for learning backend development fundamentals including REST APIs, routing, middleware, and server-side rendering using EJS.

## 📸 UI Features

- 3-column responsive blog layout
- Professional card design
- Clean form UI for create/edit
- Navigation header and footer
---
⭐ If you like this project, feel free to star the repository!
