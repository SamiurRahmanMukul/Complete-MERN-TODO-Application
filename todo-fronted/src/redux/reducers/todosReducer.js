import { GET_TODOS_FAILURE, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, POST_TODOS_FAILURE, POST_TODOS_REQUEST, POST_TODOS_SUCCESS } from "../constants/todosConstant";

const initialState = {
  // initialState for get all todos
  isLoading: false,
  todos: [],
  error: null,

  // initialState for create a todo
  isLoadingPost: false,
  successPost: null,
  errorPost: null,
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };

    case GET_TODOS_FAILURE:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    case POST_TODOS_REQUEST:
      return {
        ...state,
        isLoadingPost: true,
      };

    case POST_TODOS_SUCCESS:
      return {
        ...state,
        isLoadingPost: false,
        successPost: action.payload,
        errorPost: null,
      };

    case POST_TODOS_FAILURE:
      return {
        ...state,
        isLoadingPost: false,
        successPost: null,
        errorPost: action.payload,
      };

    default:
      return state;
  }
};

export default todosReducer;
