import { useState } from "react";
import { aboutInformation } from "../../utils/about.ts";
import { motion } from "framer-motion";

export function Sobre() {
  const [aboutOption, setAboutOption] = useState("resumo");

  const birthYear = 1993;
  const age = new Date().getFullYear() - birthYear;

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
          Sobre Mim
        </motion.h2>

        <div className="about-decoration"></div>
        <div className="about-panel">
          <div
            className={`resume ${aboutOption === "resumo" ? "optionOn" : ""}`}
            data-option="resumo"
          >
            <p>{aboutInformation.resume}</p>
          </div>

          <div
            className={`results ${
              aboutOption === "resultados" ? "optionOn" : ""
            }`}
            data-option="resultados"
          >
            {aboutInformation.results.map((result, index) => (
              <p key={index}>{result}</p> // Adiciona uma key única
            ))}
          </div>

          <div
            className={`skills ${aboutOption === "skills" ? "optionOn" : ""}`}
            data-option="skills"
          >
            <div className="all-skills">
              <div className="soft-skills">
                <h3><span>Soft</span> skills</h3>
                <div className="soft-skills-wrapper">
                  {aboutInformation.skills.softskills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hard-skills">
                <h3><span>Hard</span> skills</h3>
                <div className="hard-skills-wrapper">
                  {aboutInformation.skills.hardskills.map((skill, index) => (
                    <div className="skill" key={index}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="extra-details">
          <p>
            Expêriencia como gerente: <span>3 anos</span>
          </p>
          <p>
            Línguas: <span>Português e Inglês</span>
          </p>
          <p>
            Alcance: <span>Internacional</span>
          </p>
          <p>
            Idade: <span>{age} anos</span>
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
            <p>Resumo</p>
          </div>
          <div
            onClick={handleAboutChanger}
            className={`results-btn change-btn ${
              aboutOption === "resultados" ? "activated" : ""
            }`}
            data-option="resultados"
          >
            <p>Resultados</p>
          </div>
          <div
            onClick={handleAboutChanger}
            className={`skills-btn change-btn ${
              aboutOption === "skills" ? "activated" : ""
            }`}
            data-option="skills"
          >
            <p>Skills</p>
          </div>
        </div>
      </div>
    </>
  );
}
