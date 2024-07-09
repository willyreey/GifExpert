import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"
import PropTypes from 'prop-types'


export const GifGrid = ({category}) => {

  const { images, isLoanding } = useFetchGifs(category)

  return (
    <>
        <h3>{ category }</h3>
        {
          isLoanding && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {
            images.map( img => (
              <GifItem 
              key={img.id}
              {...img}/>
              
            ))
          }

        </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
