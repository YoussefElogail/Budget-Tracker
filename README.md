# 💰 Budget Tracker API

A professional, robust, and scalable RESTful API built with **Node.js**, **Express**, and **MongoDB**.  
This backend serves as the core of a financial management system, allowing users to track their incomes, expenses, and manage multiple wallets with automatic balance synchronization.

---

## 🚀 Key Features

- User Authentication & Authorization using JWT and BcryptJS
- Role-Based Access Control (RBAC)
- Multi-Wallet System
- Income & Expense Tracking
- Automatic Balance Logic using Mongoose Hooks
- Nested Routing
- Factory Pattern Handlers
- Robust Validation
- Global Error Handling

---

## 🛠️ Tech Stack

- Backend: Node.js, Express.js
- Database: MongoDB (Mongoose ODM)
- Security: JWT, BcryptJS
- Utilities: Morgan, Dotenv, Express Validator

---

## 📑 API Endpoints

### 🔐 Auth & Profile

| Method | Endpoint                    | Description         | Access           |
| ------ | --------------------------- | ------------------- | ---------------- |
| POST   | /api/v1/auth/register       | Register new user   | Public           |
| POST   | /api/v1/auth/signin         | User login          | Public           |
| GET    | /api/v1/auth/get-me         | Get my profile data | Protected (User) |
| GET    | /api/v1/auth/get-my-wallets | Get all my wallets  | Protected (User) |

---

### 👤 User Management

| Method | Endpoint                  | Description                  | Access                 |
| ------ | ------------------------- | ---------------------------- | ---------------------- |
| GET    | /api/v1/users             | Get all users                | Admin                  |
| POST   | /api/v1/users             | Create new user (manual)     | Admin                  |
| GET    | /api/v1/users/:id         | Get specific user by ID      | Admin                  |
| PUT    | /api/v1/users/:id         | Update user data             | Admin                  |
| DELETE | /api/v1/users/:id         | Delete user permanently      | Admin                  |
| POST   | /api/v1/users/:id/phone   | Add new phone number         | Protected (User/Admin) |
| DELETE | /api/v1/users/:id/phone   | Delete specific phone number | Protected (User/Admin) |
| POST   | /api/v1/users/:id/address | Add new address              | Protected (User/Admin) |
| DELETE | /api/v1/users/:id/address | Delete specific address      | Protected (User/Admin) |

---

### 💼 Wallets

| Method | Endpoint                  | Description                            | Access           |
| ------ | ------------------------- | -------------------------------------- | ---------------- |
| GET    | /api/v1/users/:id/wallets | Get wallets for specific user (Nested) | Protected        |
| GET    | /api/v1/wallets           | Get all wallets                        | Admin            |
| POST   | /api/v1/wallets           | Create new wallet                      | Protected (User) |
| GET    | /api/v1/wallets/:id       | Get wallet details                     | Protected        |
| PUT    | /api/v1/wallets/:id       | Update wallet data                     | Protected        |
| DELETE | /api/v1/wallets/:id       | Delete wallet                          | Protected        |

---

### 💰 Income

| Method | Endpoint            | Description                              | Access           |
| ------ | ------------------- | ---------------------------------------- | ---------------- |
| GET    | /api/v1/incomes     | Get all income records                   | Protected        |
| POST   | /api/v1/incomes     | Add new income (Increase wallet balance) | Protected (User) |
| GET    | /api/v1/incomes/:id | Get specific income transaction          | Protected        |
| PUT    | /api/v1/incomes/:id | Update income transaction                | Protected        |
| DELETE | /api/v1/incomes/:id | Delete income transaction                | Protected        |

---

### 💸 Expenses

| Method | Endpoint             | Description                               | Access           |
| ------ | -------------------- | ----------------------------------------- | ---------------- |
| GET    | /api/v1/expenses     | Get all expense records                   | Protected        |
| POST   | /api/v1/expenses     | Add new expense (Decrease wallet balance) | Protected (User) |
| GET    | /api/v1/expenses/:id | Get specific expense transaction          | Protected        |
| PUT    | /api/v1/expenses/:id | Update expense transaction                | Protected        |
| DELETE | /api/v1/expenses/:id | Delete expense transaction                | Protected        |

---

### 🗂️ Categories

| Method | Endpoint                   | Description             | Access           |
| ------ | -------------------------- | ----------------------- | ---------------- |
| GET    | /api/v1/income-categories  | Get income categories   | Public/Protected |
| POST   | /api/v1/income-categories  | Create income category  | Admin            |
| GET    | /api/v1/expense-categories | Get expense categories  | Public/Protected |
| POST   | /api/v1/expense-categories | Create expense category | Admin            |

---

## 🛡️ Security Features

- Environment Variables
- Input Sanitization
- JWT Protected Routes
