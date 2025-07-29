import { t } from "i18next";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import eua from "@/assets/icons/us.svg";
import brasil from "@/assets/icons/br.svg";
import { useTranslation } from "react-i18next";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>(
    location.hash || "#home"
  );
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "ptBR");

  function handleMenuBehavior() {
    setOpenMenu(!openMenu);
  }

  function handleNavLinkClick() {
    setOpenMenu(false);
  }

  function handleChangeLanguage(lang: string) {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  }

  useEffect(() => {
    const sections = ["#home", "#about", "#contact"];
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

  // Atualiza ao trocar de rota
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

          <div className="languages">
            <img
              src={brasil}
              alt="brasil-flag"
              onClick={() => handleChangeLanguage("ptBR")}
              style={{
                opacity: language === "ptBR" ? 1 : 0.5,
                cursor: "pointer",
              }}
            />
            <img
              src={eua}
              alt="eua-flag"
              onClick={() => handleChangeLanguage("en")}
              style={{
                opacity: language === "en" ? 1 : 0.5,
                cursor: "pointer",
              }}
            />
          </div>
        </div>

        <nav>
          <ul>
            <li>
              <HashLink
                className={isHashActive("#home") ? "active" : ""}
                to="/#home"
                smooth={true}
                onClick={handleNavLinkClick}
              >
                {t("header.home")}
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth={true}
                className={isHashActive("#about") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                {t("header.about")}
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#contact"
                smooth={true}
                onClick={handleNavLinkClick}
                className={isHashActive("#contact") ? "active" : ""}
              >
                {t("header.contact")}
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/services"
                smooth={true}
                onClick={handleNavLinkClick}
                className={isHashActive("/services") ? "active" : ""}
              >
                {t("header.service")}
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/project"
                className={isPathActive("/project") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                {t("header.project")}
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/experience"
                className={isPathActive("/experience") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                {t("header.experience")}
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/volunteer"
                className={isPathActive("/volunteer") ? "active" : ""}
                onClick={handleNavLinkClick}
              >
                {t("header.volunteer")}
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
