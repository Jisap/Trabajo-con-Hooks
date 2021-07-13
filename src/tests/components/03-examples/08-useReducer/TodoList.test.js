import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../../fixtures/demoTodos';


describe('Pruebas en <TodoList />', () => {
    
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(                            // Clon de la app TodoList
        <TodoList
            todos={demoTodos}                           // Simulamos sus argumentos
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />)

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()               // Clon app = copia de app original
    })
    
    test('Debe de tener dos <TodoListItem />', () => {
        
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length); // Esperamos que la cantidad de TodoListItem = cantidad registros en demoTodos
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));  // Esperamos que del array de TodoListItem , 
                                                                                                        // el item en la posición 0 contenga una función.
    })
    
});
