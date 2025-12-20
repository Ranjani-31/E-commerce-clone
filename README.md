# Shopora 
 Shopora is a full-featured e-commerce webapplication built using MERN stack.
 The platform enables users to browse products, manage carts, place orders, and securely complete purchases, while providing admins with product and order management capabilities.

 ## 📌 Overview

This project demonstrates the implementation of a real-world E-commerce system with authentication, authorization, product management, cart handling, order processing, and responsive UI design.
The focus is on clean architecture, scalability, and professional frontend & backend practices.

## 👤 User Features

- User registration and login (JWT authentication)

- Browse products by category

- Product search and filtering

- Product details page

- Add to cart / remove from cart

- Quantity management

- Secure checkout process

- Order history tracking

##  Cart & Orders

- Persistent cart (database/session based)

- Price calculation (subtotal, tax, total)

- Order placement

- Order status tracking (Pending, Shipped, Delivered)

## 🛠 Admin Features

- Admin authentication

- Add / update / delete products

- Manage categories

- View and manage orders

- Update order status

- User management (optional)

  ## 🎨 UI & UX

- Fully responsive design

- Clean product grid layout

- Loading states & error handling

- Toast notifications

- Optimized navigation flow

## ⚙️ Installation & Setup
### 1️⃣ Clone the Repository
    git clone https://github.com/your-username/ecommerce-mern.git
### 2️⃣ Install Backend Dependencies
    cd server
    npm install
    npm start

### 3️⃣ Install Frontend Dependencies
    cd client
    npm install
    npm run dev

## 🔑 Environment Variables

Create a .env file in the server directory:
    
    PORT=5000
    MONGO_URI=your_mongodb_connection
    JWT_SECRET=your_secret_key

### 🔐 Authentication & Security

- Passwords are hashed using bcrypt

- JWT tokens used for secure authentication

- Protected routes for users and admins

- Role-based authorization

 - Key Concepts Implemented

- RESTful API design

- MVC backend architecture

- Protected routes in React

- Global state management (Redux)

- Secure authentication & authorization

- Scalable database schema
