import React from 'react'
import "./Header.scss";
import videobg from './assets/video/codificar.mp4'

function  Video ()  {
 

 
    return (
  
      <div className='videoFondo' >
      
      <div className='videoFrame'>

      <video className='video' muted autoPlay loop src={videobg} >
     
     
      </video>
      </div>
      <div className='UbicarBoton'>
        <button className='botonProyect'>Mis Proyectos</button>
      </div>
      
     
      </div>
    );
  
}

export default Video;