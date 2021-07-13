import { act, renderHook } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'Fernando',
        email: 'Fernando@gmail.com'
    }
    
    test('Debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );        // Clonamos useForm y le pasamos un estado incicial del formulario
        const [formValues, handleInputChange, reset] = result.current;      // Extraemos de usefForm todo lo que devuelve    

        expect( formValues).toEqual(initialForm)                            // Esperamos que los valores del formulario sean al princpio = initialForm
        expect( typeof handleInputChange).toBe('function')                  // Esperamos que la función para cambiar el estado sea una 'función    
        expect( typeof reset).toBe('function')                              // Esperamos que la función de reseteo del estado sea también una 'función'
    })
   
    test('Debe de regresar el valor del formulario', () =>{

        const { result } = renderHook( () => useForm(initialForm) );        // Clonamos el useForm
        const [, handleInputChange] = result.current;                       // Extramos solo el handleInputChange

        act( () =>{

            handleInputChange({                                             // Esta función recibe un evento e al pulsar submit
                target:{                                                    // Nosotros lo simulamos recibiendo los campos del formulario
                    name: 'name',
                    value: 'Melissa'
                }
            });
        });

        const [formValues] = result.current;                                // Extraemos los formValues una vez simulamos el handleinputChange

        expect( formValues ).toEqual({...initialForm, name: 'Melissa'});    // Esperariamos que los valores del formulario tuvieran el campo name con el nombre Melissa

    })

    test('Debe de re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm) );        // Clonamos el useForm
        const [, handleInputChange, reset] = result.current;                // Extramos solo el handleInputChange y el reset

        act( () =>{

            handleInputChange({                                             // Esta función recibe un evento e al pulsar submit
                target:{                                                    // Nosotros lo simulamos recibiendo los campos del formulario
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();
        });

        const [formValues] = result.current;                                // Extraemos los formValues una vez simulamos el handleinputChange y el reset

        expect( formValues ).toEqual(initialForm);                          // Esperamos que los valores del formulario = initialForm
    })
    
});
