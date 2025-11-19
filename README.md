# Portfolio Project

A modern, interactive portfolio website showcasing skills, projects, and contact information with stunning 3D animations.

## Features

- **3D Hero Animation**: Immersive 3D scene built with Three.js and React Three Fiber, featuring dynamic lighting and interactive elements.
- **Responsive Design**: Fully responsive layout using Tailwind CSS, ensuring optimal viewing on all devices.
- **Animated UI Components**: Smooth animations powered by Framer Motion for enhanced user experience.
- **Backend API**: RESTful API built with Node.js and Express, supporting contact forms and project management.
- **Database Integration**: MongoDB for storing project data and contact messages.
- **Modern Tech Stack**: Leveraging the latest web technologies for performance and scalability.

## Tech Stack

### Frontend
- React 18
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Three.js & React Three Fiber (3D graphics)
- React Router DOM (routing)

### Backend
- Node.js
- Express.js
- MongoDB (database)
- Mongoose (ODM)
- Passport.js (authentication)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhi-abhi86/Fire.git
   cd Fire
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `server` directory
   - Add your MongoDB connection string and other required variables

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm run dev
   ```
   The server will run on `http://localhost:5001`

2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173`

3. Open your browser and navigate to `http://localhost:5173` to view the portfolio.

## 3D Animation Details

The 3D hero section features:
- Interactive 3D models rendered in real-time
- Dynamic camera movements and lighting effects
- Smooth transitions and animations
- Optimized performance using React Three Fiber

## Project Structure

```
portfolio-project/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── home/       # Home page components
│   │   │   │   ├── Hero3D.jsx  # 3D hero animation component
│   │   │   │   └── ...
│   │   │   ├── ui/         # UI components
│   │   │   └── globals/    # Global components
│   │   ├── lib/            # Utility libraries
│   │   ├── pages/          # Page components
│   │   └── ...
│   ├── public/             # Static assets
│   └── ...
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── ...
└── README.md               # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## License

This project is licensed under the MIT License.
