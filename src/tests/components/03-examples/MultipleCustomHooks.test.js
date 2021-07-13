import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter2 } from '../../../hooks/useCounter2';
import { useFetch } from '../../../hooks/useFetch';


jest.mock('../../../hooks/useFetch'); // Con esto le decimos a test suit que solo nos interesan los resultados que proporciona
                                      // Cuando haga las pruebas no llamará a useFetch solo devolverá un state     
jest.mock('../../../hooks/useCounter2');

describe('Pruebas en MultipleCustomHooks', () => {
    
beforeEach( () =>  {
    useCounter2.mockReturnValue({
        counter: 10,
        increment: ()=>{}
    });
})

    test('Debe de mostrarse correctamente', () => {

        useFetch.mockReturnValue({      // Simulamos los valores de incialización del useFetch
            data: null,
            loading: true,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />); // Clon de la app
        expect(wrapper).toMatchSnapshot();                // Esperamos que el clon app coincida con otra copia de la app original
    })
   
    test('Debe de mostrar la información', () => {

        useFetch.mockReturnValue({      // Valores iniciales
            data: [{
                author: 'Fernando',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })

        const wrapper = shallow(<MultipleCustomHooks />);                       // Si la app obtiene información 
        
        expect(wrapper.find('.alert').exists()).toBe(false);                    // La clase alert no debería existir.
                                                                                  
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');         // Donde exista la clase '.mb-0' el texto debe ser 'Hola mundo'

        expect(wrapper.find('footer').text().trim()).toBe('Fernando');
        
    })
  

});
