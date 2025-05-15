import { NavLink } from "react-router-dom";
import BrasilFlag from "../assets/images/brasil.png";
import EuaFlag from "../assets/images/estados-unidos.png";
import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenuBehavior() {
    setOpenMenu(!openMenu);
  }

  function handleNavLinkClick() {
    setOpenMenu(false);
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
              <NavLink to="/" onClick={handleNavLinkClick}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/#" onClick={handleNavLinkClick}>
                Serviços
              </NavLink>
            </li>
            <li>
              <NavLink to="#" onClick={handleNavLinkClick}>
                Contato
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" onClick={handleNavLinkClick}>
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" onClick={handleNavLinkClick}>
                Experiências
              </NavLink>
            </li>
            <li>
              <NavLink to="/volunteer" onClick={handleNavLinkClick}>
                Voluntário
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
