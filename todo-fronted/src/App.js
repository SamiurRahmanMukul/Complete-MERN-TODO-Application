import AddNewTodoForm from "./components/AddNewTodoForm";
import TodosList from "./components/TodosList";

function App() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        {/* APP HEADING / TITLE */}
        <h1 className="my-5 text-4xl font-bold text-black">Todo App</h1>

        {/* ADD NEW TODOS FORM COMPONENT */}
        <AddNewTodoForm />

        {/* TODOS LIST COMPONENTS */}
        <TodosList />
      </div>
    </div>
  );
}

export default App;
