import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { t } from "i18next";

export function ProjectsHome() {
  return (
    <>
      <div className="projects-home">
        <div className="info-project-home">
          <h2>{t("homePageProject.title")}</h2>
          <div className="center">
            <p>{t("homePageProject.text")}</p>
          </div>
          <div className="see-projects">
            <NavLink className="to-projects" to="/project">
              {t("homePageProject.btn")}
            </NavLink>
          </div>
        </div>
        <div className="overlay"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          viewport={{ amount: 0.5, once: true }}
          className="project-home-bg"
        ></motion.div>
      </div>
    </>
  );
}
