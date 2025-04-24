import { NavLink } from "react-router-dom";
import BrasilFlag from "../assets/images/brasil.png";
import EuaFlag from "../assets/images/estados-unidos.png";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenuBehavior() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <div
        className={`btn-button-header ${openMenu ? "show" : "hidden"}`}
        onClick={handleMenuBehavior}
      >
        <div className="center">
          <div className="btn-menu">
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="header-extras">
          <div className="L">
            <p>L</p>
          </div>
          <div className="languages">
            <img src={BrasilFlag} alt="" />
            <img src={EuaFlag} alt="" />
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Sobre</NavLink>
            </li>
            <li>
              <NavLink to="/">Serviços</NavLink>
            </li>
            <li>
              <NavLink to="/">Contato</NavLink>
            </li>
            <li>
              <NavLink to="/project">Projetos</NavLink>
            </li>
            <li>
              <NavLink to="/experience">Experiências</NavLink>
            </li>
            <li>
              <NavLink to="/volunteer">Voluntário</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
