import { Model } from "../model";
import SingleTodo from "./SingleTodo";

interface Todos {
  todos: Model[];
  setTodos: React.Dispatch<React.SetStateAction<Model[]>>;
}

const TodoList: React.FC<Todos> = ({ todos, setTodos }) => {
  return <div className="todos">
    {
        todos.map((todo) => (
            <SingleTodo todo={todo} key={todo.id} todos={todos} setTodos={setTodos}/>
        ))
    }
  </div>;
};

export default TodoList;
