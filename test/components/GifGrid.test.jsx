import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')


describe('Probando GifGrid', () => { 

    const category = 'Goku'
    
    test('Debe de mostrar el loanding inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoanding: true
        })
        
        render(<GifGrid category={category}/>)

        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))

     })

     test('Debe de mostrar items cuando cargan las imagenes useFecthGifs', () => {
        
        const gifs = [
            {
            id: '123',
            title: 'goku',
            url: 'https://anime.jpg'
            },
            {
                id: '124',
                title: 'vegeta',
                url: 'https://vegeta.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoanding: false
        })
        
        render(<GifGrid category={category}/>)
        expect(screen.getAllByRole('img').length).toBe(2)

       
        screen.debug()

      })

})
