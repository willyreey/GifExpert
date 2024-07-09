import { render } from "@testing-library/react"
import { GitExpertApp } from "../src/GitExpertApp"

describe('Probando GitExpertApp', () => { 
    
    test('Debe de hacer match con el snapshot', () => { 
        
        const { container } = render(<GitExpertApp/>)
        expect(container).toMatchSnapshot()

     })
    
 })