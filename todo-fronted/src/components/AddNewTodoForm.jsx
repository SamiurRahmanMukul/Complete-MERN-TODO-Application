import { useState } from "react";

const AddNewTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoTitle, todoDescription);
  };

  return (
    <div className="bg-gray-100 w-[90%] md:w-[80%] lg:w-[50%] h-[240px] p-5 rounded-sm shadow-md">
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={(e) => {
          handleSubmit(e);
        }}>
        {/* TODOS TITLE INPUT FIELD */}
        <input className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm my-2" type="text" placeholder="Add here todo title" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />

        {/* TODOS DESCRIPTION INPUT FIELD */}
        <textarea className="w-full border-2 border-gray-500 px-5 py-2 rounded-sm" cols="30" rows="3" placeholder="Add here todo description" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />

        {/* TODOS ADD BUTTON */}
        <button className="bg-blue-500 text-white rounded-sm shadow-md w-full my-2 py-2 transition-all duration-100 hover:bg-blue-600">Add Todo</button>
      </form>
    </div>
  );
};

export default AddNewTodoForm;
