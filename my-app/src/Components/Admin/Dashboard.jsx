import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './admin.css';

const Dashboard = () => {
  const handleLogout = () => {
    // Add logout logic here if needed
    // For now, just navigate back to the login page
    window.location.href = '/'; // Redirect to the login page
  };

  return (
    <div className="dashboard-wrapper">
      <h1>Welcome to the Dashboard</h1>
      <p>This is your admin dashboard.</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Use Link component to navigate back to login */}
      <Link to="/"></Link>
    </div>
  );
};

export default Dashboard;
