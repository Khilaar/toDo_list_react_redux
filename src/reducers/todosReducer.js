const todosReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter((_, index) => index !== action.payload);
        default:
            return state;
    }
};

export default todosReducer;