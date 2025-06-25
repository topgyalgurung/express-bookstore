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

## 🧪 Testing

- All routes are covered by integration tests using **Jest** and **Supertest**
- Unit tests exist for individual utility and business logic functions
- To run tests:

```bash
npm test
```