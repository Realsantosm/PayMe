import { Link } from "react-router-dom";
import React from 'react'
import "./nav.css";

const Navigation = () => {
  return (
    <div className="navName">
      <Link to="/">Dashboard</Link>
      <Link to="/exercises">About</Link>
      <Link to="/foodItems">Resources</Link>
      <Link to="/goals">Terms & Conditions</Link>
    </div>
  )
}

export default Navigation