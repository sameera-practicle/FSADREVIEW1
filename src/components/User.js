import React from "react";

function User({ workshops }) {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h2 style={{ color: "white" }}>Available Workshops</h2>

      <div className="grid">
        {workshops.map((w, i) => (
          <div key={i} className="workshop-card">
            <h3>{w.title}</h3>
            <p>{w.date}</p>
            <p>{w.trainer}</p>
            <button className="button">Register</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default User;