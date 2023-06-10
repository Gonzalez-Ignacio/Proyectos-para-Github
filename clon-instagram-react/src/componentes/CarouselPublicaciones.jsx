import React from 'react'
import "../styles/CarouselPublicaciones.css"

function CarouselPublicaciones({ imagenes }) {
  return (
    <div>

      {imagenes.map((imagen, key) => (
        <div className={key === 0 ? "carousel-item active" : "carousel-item"}>
        <img 
          src={imagen} 
          className="d-block imagen-carousel" 
          alt="Imagen"
        />
      </div>
      ))}

    </div>
  )
}

export default CarouselPublicaciones