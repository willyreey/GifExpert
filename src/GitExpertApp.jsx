import {useState} from 'react'
import { AddCategory,GifGrid } from './components/'


export const GitExpertApp = () => {

    const [categories, setCategories] = useState([])
    
    const onAddCategory = (newCategory) =>{
      if( categories.includes(newCategory) ) return
      setCategories([newCategory,...categories])
    }

    

    return (
      <>

      {/* Titulo */}
      <h1>GitExpertApp</h1>

      {/* Input */}
      <AddCategory 
      onNewCategory={onAddCategory}

      />

      {/* Listado de Gif */}
      {
        categories.map( (category) => (

          <GifGrid 
            key={category}
            category={category}
          />
        ))
      }

      </>
    )
  }