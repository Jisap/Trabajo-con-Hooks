
const initialState = [{
    id:1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = (state = initialState, action) => { //action modifica el state
    
    if(action?.type === 'agregar'){
        return [...state, action.payload]
    }


    return state;
}

let todos = todoReducer(); // Declaramos todos = todoReducer = state

const newTodo = {               // Nueva tarea
    id:2,
    todo: 'Comprar leche',
    done: false
}

const agregarTodoAction = {     // Action que contiene el nombre de la action 'agregar y lo que se quiere agregar 'payload'
    type: 'agregar',
    payload: newTodo,
}

todos = todoReducer(todos, agregarTodoAction); // state = state antiguo ,mas lo nuevo


console.log(todos);

