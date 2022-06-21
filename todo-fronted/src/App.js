import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bgImage from "./assets/bg.jpg";
import { getAllTodos } from "./redux/actions/todosAction";

function App() {
  const dispatch = useDispatch();
  const { isLoading, todos, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch]);

  console.log(isLoading, todos, error);

  return (
    <div
      className="w-[100vw] h-[100vh]"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-5 text-4xl font-bold text-white">Todo App</h1>
      </div>
    </div>
  );
}

export default App;
