import React from "react";
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-main-nav">
        <h2>Dashboard</h2>
        <div className="dashboard-main-links">
          <a href={"/register"}>Sign up</a>
          <a href={"/login"}>Log in</a>
        </div>
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="dashboard-side-nav">
        <a href={"/events"}>Events</a>
        <div className="dashboard-side-nav-dropdown">
          <a href={"#"}>Event Types</a>
          <div className="dashboard-side-nav-dropdown-content">
            <a href={"#"}>Wedding events</a>
            <a href={"#"}>College events</a>
            <a href={"#"}>DJ Parties</a>
          </div>
        </div>
        <div className="dashboard-side-nav-bottom">
          <a href={"/logout"}>Logout</a>
        </div>
      </div>
      <div className="dashboard-main-content">
        {/* Your main content area goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
