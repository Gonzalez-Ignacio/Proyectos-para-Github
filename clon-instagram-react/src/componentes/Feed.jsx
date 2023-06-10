import React from 'react'
import "../styles/Feed.css"
// import Historias from './componentes/Historias';
import Publicaciones from "./Publicaciones"

function Feed() {
  return (
    <div className='feed-principal'>
      <Publicaciones 
        imagen={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2G7ci6uYEj0CwehwBe8r2q0tmAWCK8DCHObF0z-XkfR239vqZEJ8zeB_ChmnbhtvpJk&usqp=CAU"}
        nombre={"perfil._1"}
      />
    </div>
  )
}

export default Feed