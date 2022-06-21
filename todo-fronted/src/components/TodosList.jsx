import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions/todosAction";

const TodosList = () => {
  const dispatch = useDispatch();
  const { isLoading, todos, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos);
  }, [dispatch]);

  console.log(todos);

  return (
    <div className="flex flex-col items-center justify-center w-[90%] md:w-[80%] lg:w-[50%] my-5">
      {/* Loading & Error Redux State */}
      {isLoading && <h2 className="text-white text-2xl font-bold my-2">Loading ... !!!</h2>}
      {error && <h2 className="text-red-500 text-2xl font-bold my-2">Error: {error.message}</h2>}

      <div className="bg-gray-100 w-full rounded-sm shadow-md p-5 my-2">
        <h2 className="text-black text-2xl font-bold my-2">
          <span className="text-blue-500 font-bold">Title: </span>Hello world
        </h2>

        <p className="text-black text-lg font-normal text-justify">
          <span className="text-blue-500 font-bold">Description: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iste atque deserunt placeat obcaecati minus ipsam doloribus nihil ipsum alias a cum distinctio unde eos, assumenda labore nulla aut quam!
        </p>

        <div className="flex flex-row items-center justify-center mt-2">
          <button className="bg-blue-500 text-white rounded-sm shadow-md w-full my-2 py-2 mr-2 transition-all duration-100 hover:bg-blue-600">Edit</button>
          <button className="bg-red-500 text-white rounded-sm shadow-md w-full my-2 py-2 ml-2 transition-all duration-100 hover:bg-red-600">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodosList;
