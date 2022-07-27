import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

const TodosList = ({ todos, setTodos, setEditTodo }) => {
    //complete button function
    const handleComplete = (todo) => {
       setTodos(
        todos.map((item) => {
            if (item.id === todo.id) {
                return {...item, completed: !item.completed};
            }
            return item;
        }));
    };

    //edit button function
    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    };

    //delete button function
    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    };


  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            value={todo.title}
            className={`list ${todo.completed ? "complete" : ""}`}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button className="button-complete task-button" onClick={() => handleComplete(todo)}>
              <BsCheckCircleFill />
            </button>
            <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
              <FaEdit />
            </button>
            <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
              <RiDeleteBin5Fill />
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
