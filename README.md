Notice Management System

About

This is a simple project where I created a notice system.
User can add notice and see all notices.

I used Node.js and Express for backend and HTML, Bootstrap, JavaScript for frontend.
Data is stored in MySQL.

=================

Features

 1- Add notice
 2- View notices
 3- Data saved in database

=================

 Tech Used

1 HTML, CSS, Bootstrap
2 JavaScript
3 Node.js, Express
4 MySQL

=================

Folder Structure

backend → API and database connection
frontend → UI and JavaScript

=================

How to Run

1. Go to backend folder

cd backend

2. Install packages

npm install

3. Run server

node server.js

4. Open frontend

Open index.html in browser

=================

Database Setup

Create database and table:

CREATE DATABASE notice_db;

USE notice_db;

CREATE TABLE notices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


=================

APIs

POST /notice/add → add notice
GET /notice/show → get all notices

=================

My Approach

First I created backend APIs and tested them on postMan app.
Then I connected frontend using fetch and displayed data and added the deta.
Simple Notice Management System using Node.js and MySQL
