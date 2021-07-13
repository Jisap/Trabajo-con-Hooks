
export const TodoReducer = (state=[], action) => {  // Función con un estado inicial vacio y una acción que modifica ese state
    
    switch (action.type) {                          // Si el boton que se pulsa 
        
        case 'add':                                 // es agregar...
            return [...state, action.payload]       // spread state y añadimos el action payload que contiene la nueva tarea
        
        case 'delete':                                                 // es borrar...
            return state.filter(todo => todo.id !== action.payload);   // filtraremos el state para que contenga solo las tareas cuyo id 
                                                                       // sea diferente del seleccionado->(action.payload). 
        
        case 'toggle':                              // es toggle...
            return state.map(todo =>                // mapeamos todo el state(todos)=>todo
                (todo.id === action.payload)        // si el todo.id pulsado en <p> se corresponde con el contenido en action.payload
                    ?{...todo, done: !todo.done}    // spread de sus props y sustituye done por su contrario 
                    :todo                           // En caso contrario devuelve el state sin modificar
            )
        
        
        case 'toggle-old':
            return state.map(todo => {              // es toggle-old ...cambiaremos una de la props del todo
                
                if(todo.id === action.payload){     // si el todo.id pulsado en <p> se corresponde con el contenido en action.payload
                    return{
                        ...todo, done: !todo.done   // spread de sus props y sustituye done por su contrario
                    }
                }else{
                    return todo;
                }
            })
        
        
                                                                       default:
            return state;// Siempre devuelve un state actualizado
    }}




