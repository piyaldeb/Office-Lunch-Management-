# Office Lunch Menu Management System

## Technologies Used
- Backend: Node.js with Express.js
- Frontend: React.js
- Database: MongoDB [ i feel comfortable with working with Mongodb]

## Features
- Admin Interface:
  - Add Daily Menu Options
  - View Employee Choices
- Employee Interface:
  - View Daily Menu
  - Select Lunch Choice
## Project Structure
```html
/OfficeLunchMenuManagement
├── /client
│   ├── /public
│   ├── /src
│   │   ├── /components
│   │   │   ├── Menu.js
│   │   │   ├── UserChoice.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── /server
│   ├── /controllers
│   │   ├── menuController.js
│   │   ├── userController.js
│   ├── /models
│   │   ├── Menu.js
│   │   ├── User.js
│   ├── /routes
│   │   ├── menu.js
│   │   ├── user.js
│   ├── app.js
│   ├── package.json
├── README.md
```
## Database Schema

### Menu
- date: String
- options: [String]

### User
- name: String
- lunchChoice: String

## Setup Instructions

### Backend
1. Navigate to the backend directory.
2. Install dependencies: npm install
3. Start the server: node app.js

### Frontend
1. Navigate to the frontend directory.
2. Install dependencies: npm install
3. Start the application: npm start

## How to Run the Projects
1. Start the backend server.
2. Start the frontend application.
3. Open your browser and navigate to http://localhost:3000.
