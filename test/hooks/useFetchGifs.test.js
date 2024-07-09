import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Probando useFetchGifs', () => { 
    
    test('Debe de regresar el estado inicial', () => { 

        const {result} = renderHook(() => useFetchGifs('Goku'))
        const {images, isLoanding} = result.current
        
        expect(images.length).toBe(0)
        expect(isLoanding).toBeTruthy()     

     })

    test('Debe retornar un arreglo de imagenes', async() => { 
        const {result} = renderHook(() => useFetchGifs('Goku'))

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        const {images, isLoanding} = result.current
        
        expect(images.length).toBeGreaterThan(0)
        expect(isLoanding).toBeFalsy() 
    

    })    

 })