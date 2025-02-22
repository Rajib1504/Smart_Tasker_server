# Smart Tasker Server

**Backend API:** [Live Server](https://todo-server-three-pi.vercel.app)

## 📂 Repositories

- **Client Repository:** [GitHub](https://github.com/Rajib1504/Smart_Tasker)
- **Server Repository:** [GitHub](https://github.com/Rajib1504/Smart_Tasker_server)

---

## 🚀 Project Overview

**Smart Tasker Server** is the backend system for Smart Tasker, providing RESTful APIs for user authentication, task management, and real-time task synchronization. The server is built using **Node.js** and **Express.js**, with a **MongoDB (No Mongoose)** database for data storage. It also supports **WebSockets** and **MongoDB Change Streams** for real-time task updates.

---

## ✨ Features

- **User Authentication:** Secure authentication via Firebase.
- **Task Management:** CRUD operations for tasks.
- **Real-time Updates:** WebSockets & MongoDB Change Streams for live task syncing.
- **Task Reordering:** API support for dynamic task arrangement.
- **Secure API:** CORS enabled, environment variables for sensitive configurations.

---

## 🛠 Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (No Mongoose)
- **Real-time:** WebSockets, MongoDB Change Streams
- **Security:** CORS, dotenv
- **Deployment:** Vercel

---

## 📦 Dependencies

Ensure **Node.js** and **npm** are installed before proceeding.

```bash
npm install express cors dotenv mongodb ws
```

---

## 🔧 Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Rajib1504/Smart_Tasker_server.git
   ```
2. **Navigate to Project Directory**
   ```bash
   cd Smart_Tasker_server
   ```
3. **Install Dependencies**
   ```bash
   npm install
   ```
4. **Setup Environment Variables**
   - Configure `.env` file with MongoDB connection string.
   - Enable CORS for API access.
5. **Run the Server**
   ```bash
   node index.js
   ```

---

## 📌 API Endpoints

| Method | Endpoint          | Description                      |
|--------|------------------|----------------------------------|
| GET    | `/tasks`         | Retrieve all tasks              |
| POST   | `/tasks`         | Create a new task               |
| PUT    | `/tasks/:id`     | Update a specific task          |
| DELETE | `/tasks/:id`     | Delete a specific task          |
| GET    | `/users`         | Get user information            |

---

## 📌 Future Improvements

- Implement user role-based access control.
- Enhance security with JWT authentication.
- Improve API documentation with Swagger.

---

## 🛠 Contributing

Contributions are welcome! Fork the repo, make your changes, and submit a pull request.

---

## 📜 License

This project is open-source and available under the MIT License.

---

🚀 **Developed by Rajib Sardar**

