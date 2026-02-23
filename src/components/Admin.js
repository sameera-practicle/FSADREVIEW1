import React, { useState } from "react";

function Admin({ workshops, setWorkshops }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [trainer, setTrainer] = useState("");

  const addWorkshop = () => {
    if (!title || !date || !trainer) return;
    setWorkshops([...workshops, { title, date, trainer }]);
    setTitle("");
    setDate("");
    setTrainer("");
  };

  return (
    <div className="center">
      <div className="card">
        <h2>Add Workshop</h2>

        <input className="input" placeholder="Title"
          value={title} onChange={(e) => setTitle(e.target.value)} />

        <input className="input" type="date"
          value={date} onChange={(e) => setDate(e.target.value)} />

        <input className="input" placeholder="Trainer"
          value={trainer} onChange={(e) => setTrainer(e.target.value)} />

        <button className="button" onClick={addWorkshop}>
          Add Workshop
        </button>
      </div>
    </div>
  );
}

export default Admin;