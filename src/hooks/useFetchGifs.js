import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (category) => {
    
  const [images, setImages] = useState([])
  const [isLoanding, setIsLoanding] = useState(true)

  const getImages = async() =>{
    const newImages = await getGifs(category)
    setImages(newImages)
    setIsLoanding(false)
  }

  useEffect( () => {
    getImages()
  }, [])
  
  return {
    images: images,
    isLoanding: isLoanding
  }
}
