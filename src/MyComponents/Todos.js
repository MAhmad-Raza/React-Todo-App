import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-4">Todo's List</h3>

      {props.todos.length === 0 ? (
        <div class="card">
          <div className="card-body">No Todo's To Display</div>
        </div>
      ) : (
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem
                todo={todo}
                key={todo.title}
                onDelete={props.onDelete}
              />{" "}
              <hr />
            </>
          );
        })
      )}
    </div>
  );
};

export default Todos;
