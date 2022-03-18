import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title And Description Cannot Be Blank");
    } else {
      props.addTodo(title, description);
      setTitle = "";
      setDescription = "";
    }
  };
  return (
    <div className="container my-4">
      <h3 className="text-center">Add A Note</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            className="form-control"
            id="description"
            cols="20"
            rows="4"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
