# Shop-Now 
## Overview

Shop-Now is a full-stack e-commerce platform designed to simulate real-world online retail systems.
The project focuses on clean architecture, secure APIs, scalable data modeling, and production-ready patterns, rather than just UI replication.

It supports both customer-facing commerce flows and admin-level product management, making it suitable as a real business foundation.


## Key Features

- Realistic order lifecycles

- Secure authentication and authorization

- Modular backend architecture

- Scalable product querying and filtering

## User Features

- User authentication and authorization

- Product browsing with search, filter, and sorting

- Cart management and checkout flow

- Order placement and order history

- Secure API access using JWT

## Admin Features

- Product creation and inventory management

- Order status management

- Role-based access control (Admin vs User)

- Dashboard-ready API endpoints

## System Architecture

### Frontend

- Component-driven UI

- Centralized state management

- API-driven rendering

### Backend

- RESTful API design

- Layered architecture (Controller → Service → Repository)

- Stateless authentication using JWT

- Centralized error handling and validation

### Database

- Normalized schema design

- Indexed queries for performance

- Relational integrity between users, products, orders

## Tech Stack

### Frontend

- React.js

- HTML5, CSS3

- JavaScript (ES6+)

### Backend

- Node.js

- Express.js

### Database

- MongoDB

- Mongoose ODM

- Authentication

- JWT-based authentication

- Role-based authorization

### API Design (High-level)

    POST /auth/register
    
    POST /auth/login
    
    GET /products
    
    GET /products/:id
    
    POST /orders
    
    GET /orders/user
    
    POST /admin/products
    
    PUT /admin/orders/:id

**All APIs follow:**

- Proper HTTP status codes

- Input validation

- Secure access control

## Security Considerations

- Password hashing using industry standards

- JWT expiration and verification

- Protected routes for admin actions

- Input sanitization to prevent injection attacks

- Performance & Scalability

- Indexed queries for frequently accessed fields

- Pagination for large product datasets

- Stateless backend to support horizontal scaling

- Separation of concerns for maintainability

