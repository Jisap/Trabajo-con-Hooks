import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";


describe('Pruebas en useFetch', () => {
    
    test('Debe de retornar la información por defecto', () => {
        
        const { result } = renderHook(()=> useFetch('https://www.breakingbadapi.com/api/quotes/1'))
    
        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);
    
    });

    test('Debe de tener la info deseada, loading false, error false', async() => {

        //jest.setTimeout(10000);
        const { result, waitForNextUpdate } = renderHook(()=> useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        await waitForNextUpdate();
    
        const { data, loading, error } = result.current;

        expect(data.length).toBe(1);    // El registro obtenido es solo 1
        expect(loading).toBe(false);    // El loading cuando se recibe la data es false
        expect(error).toBe(null);       // El error debe ser null
    })
    
    test('Debe de manejar el error', async() => {

        //jest.setTimeout(10000);
        const { result, waitForNextUpdate } = renderHook(()=> useFetch('https://reqres.in/apid/users?page=2'))
        await waitForNextUpdate();                                      //url que da error
    
        const { data, loading, error } = result.current;

        expect(data).toBe(null);                               // El registro obtenido debe ser null
        expect(loading).toBe(false);                           // El loading debe ser false
        expect(error).toBe('No se pudo cargar la info');       // El error debe ser 'No se pudo cargar la info'
    })
    

});
