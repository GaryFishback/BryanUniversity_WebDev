import React from "../../node_modules/@types/react";
import { Link } from "../../node_modules/react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
    </div>
  );
}
