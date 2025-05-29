import { useTranslation } from "react-i18next";
import React from "react";

export function Footer() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <footer>
        <p>
          {t("helMsg")}
          <span>
            <a href="https://www.linkedin.com/in/lucasmramires/">LinkedIn</a>
          </span>
        </p>
      </footer>
      <div className="development-by">
        <p>Desenvolvido por Vitor Ramires. <a href="https://github.com/VitorRamires">Confira o Github</a></p> 
      </div>
    </React.Fragment>
  );
}
