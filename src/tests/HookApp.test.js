import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';


describe('Pruebas ebn <HookApp />', () => {

    test('debe mostrarse correctamente', ()=>{

        const wrapper = shallow(<HooksApp />); // Contenedor wrapper tiene en su interior un clon de la app
        expect(wrapper).toMatchSnapshot();     // Esperamos que el clon app coincida con otra copia de la app original 
    })
    
});
