import { useState } from "react";
import InputField from "./component/InputField";
import { Model } from "./model";
import TodoList from "./component/TodoList";
const Todo: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Model[]>([]);

  // console.log(todos);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="app">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Todo;
