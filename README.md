# Tally-U
## Freelancer Invoicing System
>> A MERN stack application.

### Description
-----------
The Freelancer Invoicing System is a MERN application designed to help clients with multiple freelancers, to add, manage, and send invoices. It is built using the MERN (MongoDB, Express, React, Node.js) stack, providing a full-stack solution for efficient invoicing and managing.


### Features
---------
- User Authentication: Register, login, and manage your account securely.
- Client Management: Keep track of your clients' (or freelancers) information and contact details.
- Invoices : Easily create professional invoices with customizable templates ( can be updated).
- Dashboard: Get an overview of your financial data and performance.
- Notifications: Receive alerts for upcoming payments and overdue invoices.


### Installation
-------------
* Navigate to the server folder: cd freelancer-invoicing-system/server
* Install backend dependencies: npm install
* Set up environment variables in .env file (see .env.example for reference).
* Start the backend server: npm start
* Open a new terminal and navigate to the frontend folder: cd ../frontend
* Install frontend dependencies: npm install
* Start the frontend development server: npm start


### Technologies Used
-----------------
* Frontend:
  * React
     * Functional components for effective User interface
     * React Router for navigation
  
* Backend:
  * MongoDB for defining database
  * Mongoose for object modeling
  * ExpressJs for middleware 
  * Node.js for define backend connections
  

### Folder Structure
-----------------
* `/frontend` : Contains the React frontend code.
* `/backend/config` : Contains the Express backend code and API routes.
* `/backend/models` : Defines Mongoose models for MongoDB.
* `/backend/middlewares` : Implements route handlers and business logic.
* `/backend/routes` : Defines API routes and endpoints.


### Usage
-----
* Register or log in to your account.
* Add clients' details in the Clients section.
* Create invoices for your projects in the Invoices section.
* Monitor your earnings and invoice status on the Dashboard.
