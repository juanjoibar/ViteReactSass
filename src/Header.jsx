import React, { useContext ,useState} from "react";
import { GlobalContext } from './Provider/Provider'
import "./Header.scss";

export const  Header=() => {


  const Logo = () => {
    return (
      <h1 className="Header-h1">
        <a href="#" title="Avatar" className="Header-logo">
          <img
            src="assets/icons/react.svg"
            alt="Avatar"
            className="Header-img"
          />
        </a>
      </h1>
    );
  };
  const Nav = () => {
    const { header } = useContext(GlobalContext);
    const { menu } = header;
    const [activeLink, setActiveLink] = useState("Home");
    const handleLinkMouseOver = (title) => {
      setActiveLink(title); // Actualizar el enlace activo cuando el cursor pasa por encima
    };
    
    return (
      <nav className="Header-nav">
        <ul className="Header-ul">
          {menu.map(({ id, title, href }) => (
            <li key={id} className="Header-il">
              <a
                href={href}
                className={`Header-a ${title === activeLink ? "isActive" : ""} `}
                onMouseOver={() => handleLinkMouseOver(title)}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  const Rrss = () => {
    const { header } = useContext(GlobalContext);
    const { rrss } = header;
    return (
      <ul className="Header-rrss">
        {rrss.map(({ id, title, href, icono }) => (
          <li key={id} className="Header-li">
            <a className="Header-rs" href={href} title={title}>
              <Icono clase="Hearder-Social" nombre={icono} />
            </a>
          </li>
        ))}
      </ul>
    );
  };

  const Hamburger = () => {
    return (
      <button className="Header-btn">
        <img className="Header-svg" src="assets/icons/react.svg" alt="menu" />
      </button>
    );
  };
  const Icono = ({ nombre, clase = "" }) => {
    return (
      <>
        {nombre === "facebook" && (
          <svg
            className={clase}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        )}
      </>
    );
  };
  return (
    <header className="Header">
      <div className="Wrapper">
        <Logo/>
        <Nav />
        <Rrss />
      </div>
    </header>
  );
}

export default Header;
