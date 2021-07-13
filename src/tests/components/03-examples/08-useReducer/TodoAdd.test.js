import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../../../components/08-useReducer/TodoAdd';


describe('Pruebas en <TodoAdd />', () => {

    const handleAddTodo = jest.fn();

    const wrapper = shallow(
            <TodoAdd
                handleAddTodo={handleAddTodo} 
            />)

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => { //Prevent default del submit
        
        const formSubmit = wrapper.find('form').prop('onSubmit');   // Identificamos el submit del formulario
        formSubmit({preventDefault(){}});                           // Le aplicamos el preventDefault como una función
        expect(handleAddTodo).toHaveBeenCalledTimes(0);             // Esperamos que el handleAddTodo se llame 0 veces.
    });
    
    test('Debe de llamar la función handleAddTodo', () => {
        
        const value = "Aprender React";                 // Valor de la caja del input
        wrapper.find('input').simulate('change', {      // Simulamos el cambio del input con ese value
            target: {
                value: value,
                name: 'description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');       // Identificamos el submit del formulario
        formSubmit({preventDefault(){}});                               // Le aplicamos el preventDefault como una función

        expect(handleAddTodo).toHaveBeenCalledTimes(1);                 // Esperamos que handleAddTodo se llamara 1 vez
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); // Esperamos que handleAddTodo se llamara 1 vez con un objeto por argumento
        expect(handleAddTodo).toHaveBeenCalledWith({                    // Podriamos definir que trae ese objeto    
            id: expect.any(Number), // Esperariamos aquí solo que sea un número
            desc: value,
            done: false,   
        });

        expect(wrapper.find('input').prop('value')).toBe(''); // Esperariamos que la app tuviera un input y su valor fuera ''
                                                              // Cuando se hace submit al final se llama al reset del input.
    })
    
    
    
});
