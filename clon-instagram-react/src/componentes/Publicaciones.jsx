import React from 'react'
import "../styles/Publicaciones.css"
import CarouselPublicaciones from './CarouselPublicaciones'
import fotoPublicacion1 from "../imagenes/Publicaciones.png"

function Publicaciones({ imagen, nombre, }) {

  const imagenesCarousel = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuh6Ez-amLI0iaMDef9b4X24b6rYexoe5V3WwokBE7rT6Sk5vxmEIn5Fn4y5fDsxl8v4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2G7ci6uYEj0CwehwBe8r2q0tmAWCK8DCHObF0z-XkfR239vqZEJ8zeB_ChmnbhtvpJk&usqp=CAU",
    "https://i.blogs.es/66b2a4/photo-1511367461989-f85a21fda167/1366_2000.jpeg",
    "https://st3.depositphotos.com/1030334/18252/i/450/depositphotos_182526608-stock-photo-amazing-summer-morning-on-the.jpg",
    "https://e0.pxfuel.com/wallpapers/961/166/desktop-wallpaper-paisaje-love-natural.jpg",
    "https://www.dzoom.org.es/wp-content/uploads/2019/09/paisajes-expresivos-734x489.jpg",
    "https://st2.depositphotos.com/1781787/49063/i/450/depositphotos_490633290-stock-photo-a-field-with-blooming-sunflowers.jpg",
    "https://i.pinimg.com/236x/57/cf/d4/57cfd4c621f44c9b3c5c9204d4effff1.jpg",
    "https://i.pinimg.com/originals/64/1a/b7/641ab7fe44f7d1c46f18fed35f539dfc.png",
    "https://i.pinimg.com/originals/e0/70/69/e07069d69c5d303641ebfb65ff6e8c8e.jpg"
  ];



  return (
    <div className="contenedor-publicaciones">
      <div className='contenedor-perfil'>
        <img
          className='perfil-publicacion'
          src={imagen}
          alt='Foto de perfil'
        />

        <span className='nombre-publicacion'>{nombre}</span>
      </div>

      <div className='contenedor-carousel'>
        <div id="carouselExample" class="carousel ">
          
          <div className="carousel-inner">
            <CarouselPublicaciones imagenes={imagenesCarousel} />
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden"> Anterior </span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"> Siguiente </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Publicaciones