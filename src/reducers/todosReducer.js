const todosReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          {
            text: action.payload,
            completed: false,
          },
        ];
      case "DELETE_TODO":
        return state.filter((_, index) => index !== action.payload);
      case "TOGGLE_TODO":
        return state.map((todo, index) =>
          index === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };
  
  export default todosReducer;