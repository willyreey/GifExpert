const { render, screen, fireEvent } = require("@testing-library/react")
const { AddCategory } = require("../../src/components/AddCategory")

describe('Probando AddCategory', () => { 

    const inputValue = 'Goku'
    
    test('Debe de cambiar el valor de la caja de texto', () => { 

       render(<AddCategory onNewCategory={ () => {}}/>)

       const input = screen.getByRole('textbox')

       fireEvent.input( input,{target:{value: inputValue}} )

       expect(input.value).toBe(inputValue)     

     })

     test('debe de llamar onNewCategory si el input tiene un valor ', () => { 

        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={ onNewCategory }/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input,{target:{value: inputValue}} )
        fireEvent.submit( form )

        expect( input.value ).toBe('')
        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

      })

      test('no debe de llamar onNewCategory si el input esta vacio', () => { 
        const onNewCategory = jest.fn()
        
        render(<AddCategory onNewCategory={ onNewCategory }/>)
        
        const form = screen.getByRole('form')

        fireEvent.submit( form )
        expect(onNewCategory).toHaveBeenCalledTimes(0)

       })

 })