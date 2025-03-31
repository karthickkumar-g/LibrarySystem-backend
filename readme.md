# Library System API

## Overview
This is a RESTful API for a simple library system that allows users to:
- Manage books (Add, update, delete, and list books)
- Manage authors (Add, update, delete, and list authors)
- Track borrowed books by users
- Fetch books by author and authors by book

## Tech Stack
- **Node.js** (TypeScript)
- **Express.js**
- **MongoDB** (Mongoose ODM)
- **Docker**
- **express-async-handler** (Error handling)

---
## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16+ recommended)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/) (if using Docker for deployment)
- [Git](https://git-scm.com/)

### Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/LibrarySystem-backend.git
   cd LibrarySystem-backend
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/libraryDB
   ```

4. **Run the Server**
   ```sh
   npm run dev  # Starts the development server with nodemon
   ```

5. **Run with Docker**
   ```sh
   docker-compose up --build
   ```

---
## API Endpoints

### **Authors**
- `POST /api/authors` - Add an author
- `GET /api/authors` - List all authors
- `PUT /api/authors/:id` - Update an author
- `DELETE /api/authors/:id` - Delete an author

### **Books**
- `POST /api/books` - Add a book
- `GET /api/books` - List all books
- `PUT /api/books/:id` - Update a book
- `DELETE /api/books/:id` - Delete a book

### **Users**
- `POST /api/users` - Add a user
- `GET /api/users` - List all users

### **Borrowed Books**
- `POST /api/borrow` - Borrow a book
- `PUT /api/borrow/:id/return` - Return a borrowed book
- `GET /api/borrow/user/:userId` - Get all borrowed books of a user

---
## Testing the API
Use **Postman** or **cURL** to test the endpoints.

Example request using `cURL`:
```sh
curl -X GET http://localhost:4000/api/books
```


