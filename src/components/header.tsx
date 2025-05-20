//import BrasilFlag from "../assets/icons/br.svg";
//import EuaFlag from "../assets/icons/us.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
   const location = useLocation(); 
  const [activeSection, setActiveSection] = useState<string>(
    location.hash || "#home"
  );

  function handleMenuBehavior() {
    setOpenMenu(!openMenu);
  }

  function handleNavLinkClick() {
    setOpenMenu(false);
  }

  // Detecta a seção visível ao scrollar
  useEffect(() => {
    const sections = ["#home", "#about", "#services", "#contact"];
    function onScroll() {
      let found = "#home";
      for (const hash of sections) {
        const el = document.querySelector(hash);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 500 && rect.bottom > 500) {
            found = hash;
            break;
          }
        }
      }
      setActiveSection(found);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Atualiza ao trocar de rota (ex: vindo de outra página)
  useEffect(() => {
    setActiveSection(location.hash || "#home");
  }, [location.hash]);

  function isHashActive(hash: string) {
    return activeSection === hash && location.pathname === "/";
  }

  function isPathActive(path: string) {
    return location.pathname === path;
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
          <HashLink
            className="L"
            to="/#home"
            smooth={true}
            onClick={handleNavLinkClick}
          >
            <p>L</p>
          </HashLink>

          {/*
            <div className="languages">
              <img src={BrasilFlag} alt="" />
              <img src={EuaFlag} alt="" />
            </div>
          */}
        </div>
        <nav>
          <ul>
            <li>
              <HashLink
                to="/#about"
                smooth={true}
                className={isHashActive("#about") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                Sobre
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#services"
                smooth={true}
                onClick={handleNavLinkClick}
                className={isHashActive("#services") ? "active" : ""}
              >
                Serviços
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth={true}
                onClick={handleNavLinkClick}
                className={isHashActive("#contact") ? "active" : ""}
              >
                Contato
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/project"
                className={isPathActive("/project") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                Projetos
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/experience"
                className={isPathActive("/experience") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                Experiências
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/volunteer"
                className={isPathActive("/volunteer") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                Voluntário
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
