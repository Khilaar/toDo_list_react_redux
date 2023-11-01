export const todo = (nr) => {
    return {
        type: "ADD_TODO",
        payload: nr,
    }
}

export const deleteTodo = (index) => {
    return {
        type: "DELETE_TODO",
        payload: index,
    };
};



