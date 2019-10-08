export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    },
    {
        item: 'Learn More about reducers',
        completed: false,
        id: 3892987580
    }
];

export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":

            console.log("i am here")
            return [
                ...state,
                {
                    item: action.todo,
                    completed: false,
                    id: Date.now()
                }
            ]
        case "TOGGLE_TODO":

            let todos = [...state];

            for (let todo of todos) {
                if (todo.id === action.todo.id) {
                    todo.completed = !todo.completed
                }
            }

        return todos
        default:
            return state;
    }
}