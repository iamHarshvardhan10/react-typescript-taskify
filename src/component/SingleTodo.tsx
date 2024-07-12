import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Model } from "../model";
import {  MdDone } from "react-icons/md";
import "./styles.css";
// import TodoList from "./TodoList";
import { useState } from "react";
type Props = {
  todo: Model;
  todos: Model[];
  setTodos: React.Dispatch<React.SetStateAction<Model[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todos_single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          title="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos_single_text"
        />
      ) : todo.isDone ? (
        <s className="todos_single_text">{todo.todo}</s>
      ) : (
        <span className="todos_single_text">{todo.todo}</span>
      )}
      <div className="todos_list">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          {!todo.isDone ? <MdDone /> : null}
          {/* <MdDone /> */}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
