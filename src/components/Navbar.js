import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      backgroundColor: "#333",
      padding: "15px",
      textAlign: "center"
    }}>
      <Link to="/" style={{ color: "white", marginRight: "20px" }}>Home</Link>

      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </div>
  );
}

export default Navbar;