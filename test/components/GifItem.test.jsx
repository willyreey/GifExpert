const { render, screen, getByAltText } = require("@testing-library/react")
const { GifItem } = require("../../src/components/GifItem")

describe('Probando componente GifItem', () => { 
    
    const title = 'Goku'
    const url = 'https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177'

    
    
    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(<GifItem title={title} url={url}/>)

        expect(container).toMatchSnapshot()
     })

     test('Debe de mostrar la img con el texto y el ALT indicados', () => { 
        render(<GifItem title={title} url={url}/>)

        const {src, alt} = screen.getByRole('img')

        expect(src).toBe( url )
        expect(alt).toBe( title )

      })

      test('Debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByAltText(title)).toBeTruthy()
        
       })
 })