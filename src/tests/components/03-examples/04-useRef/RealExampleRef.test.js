import React from 'react';
import { shallow } from "enzyme";
import { RealExampleRef } from "../../../../components/04-useRef/RealExampleRef";

describe('Pruebas en en<RealExampleRef />', () => {
    
    const wrapper = shallow(<RealExampleRef />);     // Contenedor wrapper tiene en su interior un clon de la app

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();                                // Esperamos que el clon app coincida con otra copia de la app original 
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false); // Estado por defecto false --> El componente al principio no exite
    });
    
    test('Debe de mostrar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');                         // Simulamos click en el boton   
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);  // Estado despues de dar en el boton true -> se muestra el componente
          
    })
    
});
