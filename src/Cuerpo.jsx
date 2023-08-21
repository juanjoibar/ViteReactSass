import React  from "react";
//import { GlobalContext } from './Provider/Provider'
import { GlobalContext } from './Provider/ModoContext'
import imagen from "./assets/main/webMain.jpg";

import { useContext } from "react";


function Cuerpo() {
  const { bbdd , boton} = useContext(GlobalContext);
  const {hero} = bbdd 
  const { tools } = hero; 
  
  return (
    <div>
      Cuerpo
      <div 
      className={`Cuerpo-Wrapper${boton ? "" : "isActive"} `}
      >
        {/* <img className='Cuerpo-img' src= {imagen} alt="web" /> */}
      </div>
      <div className="Test">Desarrollos de aplicaciones web</div>
      <div className="dividerLeft"></div>
      <div className="container">
        <div className="left-panel">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui in culpa
        recusandae pariatur odit tempore molestias deserunt exercitationem,
        labore commodi, vitae porro quam deleniti modi excepturi. In aut dolore
        optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
        pariatur porro, nam quaerat numquam et dolores illo iure consectetur
        sequi, maiores aut voluptate perspiciatis quod eveniet? Dolores neque
        modi in!lorem Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Sit eveniet ipsam fuga magni impedit quod, nihil totam assumenda ducimus
        culpa adipisci modi earum consectetur harum ullam quia ipsa eos
        voluptatem!
      </div>
      <div className="divider"></div>
      <div className="Main-Container">
      <div className="tool-container">
        <h3 className="tool-title">Tecnologias</h3>
        <ul className="Tecnologias-ul">
      
         { tools.map( ({id,title, href,resumen}) =>(
           
           <li key={id} className="Tecnologias-il">
            <div className="card">
              <div className="card-photo">
                <img src={href} alt={href}  />
              </div>
              <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">
                  This is the description of the card.
                </p>
              </div>
            </div>
          </li>
        ))} 
         
        </ul>
      </div>
      </div>
      </div>
        <button>Ver mis ult. Proyectos</button>
    </div>
  );
}

export default Cuerpo;
