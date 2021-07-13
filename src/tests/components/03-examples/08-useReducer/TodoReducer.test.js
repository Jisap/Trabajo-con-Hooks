import { TodoReducer } from "../../../../components/08-useReducer/TodoReducer";
import { demoTodos } from "../../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {
    
    test('Debe de retornar el estado por defecto', () => {

        const state = TodoReducer(demoTodos, {});           // State inicial
        expect( state ).toEqual(demoTodos);                 // esperamos que el state sea igual al demoTodos
    })
   
    test('Debe de agregar un todo', () => {

        const newTodo={id:3,                                // Nueva tarea
            desc: 'Aprender PHP',
            done: false};

        const action = {                                    // Tipo de acción y que se envia (nueva tarea)
            type: 'add',
            payload: newTodo
        }

        const state = TodoReducer(demoTodos, action);        // Usamos el TodoReducer       
        expect( state.length ).toBe(3);                      // Esperamos que el número de registros aumente en un elemento osea 3.
        expect( state ).toEqual([...demoTodos, newTodo]);    // Esperamos que el arreglo que contiene las tareas incluya la nueva   
    });

    test('Debe de borrar un todo ', () => {
        
        //const todoId = 1;

        const action = {
            type: 'delete',
            payload: 1                                          // Borramos el registro 1
        }

        const state = TodoReducer( demoTodos , action);         // del demoTodos
        expect( state.length ).toBe(1);                         // Esperamos que la longitud de demoTodos sea de 1
        expect( state ).toEqual([demoTodos[1]]);                // y que el state = demoTodos en la única posición que existe.

    });

    
    test('Debe de hacer el toggle del todo ', () => {
        
        const action = {
            type: 'toggle',
            payload: 1                                          
        }

        const state = TodoReducer( demoTodos , action);
        expect( state[0].done ).toBe(true);                     // Esperamos que la prop done = true en el elemento nº 0
        expect( state[1]).toEqual(demoTodos[1]);                // Esperariamos también que el 2º elemento no haya cambiado    

    });


    
});
