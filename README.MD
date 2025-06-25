# 🛒 Express Bookstore & Shopping List API

A simple Node.js + Express JSON API project where we:

- Store books in a PostgreSQL database
- Store shopping list items in an in-memory array
- Validate input using JSONSchema
- Test routes with Jest & Supertest
- Include both unit and integration tests
- Add a frontend using Axios for AJAX requests

---

## 📦 Features

### 📚 Book API
- Create, read, update, and delete books from a PostgreSQL database
- JSONSchema validation for book creation and updates
- Support for **partial updates** — only pass fields you want to change
- Integration & unit tests with Jest and Supertest

### 🛍 Shopping List API
- Simple API using an in-memory **array** to store shopping items
- Each item has `name` (string) and `price` (number)
- Full CRUD support

---

## 🚀 How to Run the App

This project includes a backend (Node.js + Express) and a frontend that interacts with it via Axios. Follow these steps to get everything up and running.

### 🛠 Backend Setup

1. **Add your database URI**

   Open the `config.js` file and set your PostgreSQL connection string:

   ```js
   DB_URI = "postgresql://username:password@localhost:5432";
    ```
2. Install backend dependencies
In the root directory of the project (where package.json is located), run:
```bash
    $ npm install
```

3. Start backend server 
npm start

This will run node server.js and start the Express API at http://localhost:3000

--- 

🌐 Frontend Setup
	1.	Navigate to the frontend directory (frontend/), install dependencies and run frontend
```bash
    $ cd frontend
    $ npm install  
    $ npm run dev
```
This typically starts the frontend on http://localhost:5173.



## 🧪 Testing

- All routes are covered by integration tests using **Jest** and **Supertest**
- Unit tests exist for individual utility and business logic functions
- To run tests:

```bash
npm test
```