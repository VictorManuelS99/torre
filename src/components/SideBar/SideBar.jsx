import React from "react";
import { Link } from "react-router-dom";

import "./SideBar.css";

export const SideBar = () => {
  return (
    <div className="Sidebar">
      <p>Torre</p>
      <div className="Sidebar-links">
        <Link to="/people" className="Link">
          People
        </Link>
        <Link to="/jobs" className="Link">
          Jobs
        </Link>
      </div>
    </div>
  );
};
