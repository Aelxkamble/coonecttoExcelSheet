Feedback Form with Backend
This project consists of a simple feedback form built with React.js (Frontend) and an Express.js (Backend) server. The form collects user details (name, phone number, and preference to receive updates on WhatsApp) and stores the data in an Excel file.

Features
Frontend built using React.js to handle form submissions.
Backend server powered by Express.js to receive form data and store it in an Excel file.
Form submission posts data to the backend API, which saves the feedback data into an xlsx file.
The backend API checks if an Excel file exists, updates the file, or creates a new one if it doesn't.
Technologies Used
Frontend:

React.js
Axios (for HTTP requests)
Backend:

Express.js
Body-Parser
CORS
XLSX (for handling Excel file operations)
Other:

Nodemon (for auto-reloading during development)
Getting Started
Follow the steps below to get the project up and running on your local machine.

Prerequisites
You need to have Node.js installed on your machine. You can download it from here.

1. Clone the repository
bash
Copy code
git clone https://github.com/yourusername/feedback-form.git
cd feedback-form
2. Install Dependencies
Frontend (React.js)
Navigate to the frontend folder and install the dependencies:

bash
Copy code
cd frontend
npm install
Backend (Express.js)
Navigate to the backend folder and install the dependencies:

bash
Copy code
cd backend
npm install
3. Run the Backend Server
To run the backend, you can use npm or yarn:

bash
Copy code
npm start
This will start the server at http://localhost:5000. Ensure this server is running before you test the form.

4. Run the Frontend Application
In another terminal window, navigate to the frontend folder and run:

bash
Copy code
npm start
This will start the React application at http://localhost:3000.

5. Test the Application
Open your browser and visit http://localhost:3000 to view the feedback form. Fill out the form and click "FREE QUOTE" to submit the feedback. The backend will store the data in an xlsx file.

6. View Feedback Data
The feedback data will be stored in the feedback_data.xlsx file in the backend directory.

File Structure
bash
Copy code
feedback-form/
│
├── frontend/               # React frontend code
│   ├── src/                # React components and assets
│   └── package.json        # React dependencies
│
├── backend/                # Express backend code
│   ├── server.js           # Express server file
│   ├── feedback_data.xlsx  # Excel file for storing feedback
│   └── package.json        # Backend dependencies
│
└── README.md               # Project documentation
API Endpoints
POST /submit
Description: Submits feedback data.

Request Body:

json
Copy code
{
  "name": "John Doe",
  "phone": "1234567890",
  "sendUpdates": true
}
Response:

Status 200:
json
Copy code
{
  "message": "Data saved successfully!"
}
Status 500:
json
Copy code
{
  "message": "Error saving data to Excel."
}
GET /
Description: A simple health check endpoint to verify if the server is running.
Troubleshooting
Error: "Backend server is not running"
Ensure the backend server is running on http://localhost:5000 before submitting the form.
Error: "Failed to save data"
Check if the feedback_data.xlsx file has the proper read/write permissions.
Ensure the backend API is correctly handling file operations.
