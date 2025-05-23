import { useState } from "react";
import { aboutInformation } from "../../utils/about.ts";
import { motion } from "framer-motion";
import { Trans, useTranslation } from "react-i18next";

export function Sobre() {
  const [aboutOption, setAboutOption] = useState("resumo");
  const { t } = useTranslation();

  const age =
    new Date().getFullYear() -
    1993 -
    (new Date() < new Date(`${new Date().getFullYear()}-07-21`) ? 1 : 0);

  function handleAboutChanger(event: React.MouseEvent) {
    const targetOption = event.currentTarget.getAttribute("data-option") || "";
    setAboutOption(targetOption.toLowerCase());
  }

  return (
    <>
      <div className="about" id="about">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: "-100px", once: true }}
        >
          {t("aboutTitle")}
        </motion.h2>

        <div className="about-decoration"></div>
        <div className="about-panel">
          <div
            className={`resume ${aboutOption === "resumo" ? "optionOn" : ""}`}
            data-option="resumo"
          >
            <p>{t("aboutInfo.resume")}</p>
          </div>

          <div
            className={`results ${
              aboutOption === "resultados" ? "optionOn" : ""
            }`}
            data-option="resultados"
          >
            {aboutInformation.results.map((result, index) => (
              <p key={index}>{t(result)}</p>
            ))}
          </div>

          <div
            className={`skills ${aboutOption === "skills" ? "optionOn" : ""}`}
            data-option="skills"
          >
            <div className="all-skills">
              <div className="soft-skills">
                <h3>
                  <span>Soft</span> skills
                </h3>
                <div className="soft-skills-wrapper">
                  {aboutInformation.skills.softSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {t(skill)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hard-skills">
                <h3>
                  <span>Hard</span> skills
                </h3>
                <div className="hard-skills-wrapper">
                  {aboutInformation.skills.hardSkills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {t(skill)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="extra-details">
          <p>
            <Trans i18nKey="aboutInfo.extra.expDetail" components={{ span: <span /> }} />
          </p>
          <p>
            <Trans i18nKey="aboutInfo.extra.langDetail" components={{ span: <span /> }} />
          </p>
          <p>
            <Trans i18nKey="aboutInfo.extra.reach" components={{ span: <span /> }} />
          </p>
          <p>
            {t("aboutInfo.extra.yearsOld.age")}: <span>{age}  {t("aboutInfo.extra.yearsOld.year")}</span>
          </p>
        </div>

        <div className="change-buttons">
          <div
            onClick={handleAboutChanger}
            className={`resume-btn change-btn ${
              aboutOption === "resumo" ? "activated" : ""
            }`}
            data-option="resumo"
          >
            <p>{t("aboutInfo.buttons.btnResume")}</p>
          </div>
          <div
            onClick={handleAboutChanger}
            className={`results-btn change-btn ${
              aboutOption === "resultados" ? "activated" : ""
            }`}
            data-option="resultados"
          >
            <p>{t("aboutInfo.buttons.btnResults")}</p>
          </div>
          <div
            onClick={handleAboutChanger}
            className={`skills-btn change-btn ${
              aboutOption === "skills" ? "activated" : ""
            }`}
            data-option="skills"
          >
            <p>{t("aboutInfo.buttons.btnSkills")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
