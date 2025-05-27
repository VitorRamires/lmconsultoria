import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <p>
        {t("helMsg")}
        <span>
          <a href="https://www.linkedin.com/in/lucasmramires/">LinkedIn</a>
        </span>
      </p>
    </footer>
  );
}
