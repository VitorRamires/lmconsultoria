import { projectsInfos } from "../../utils/projects-infos";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface ActualSlide {
  actualSlide: number;
  showFixedButtons: boolean;
}

export function Content({ actualSlide, showFixedButtons }: ActualSlide) {
  const actualProject = projectsInfos[actualSlide];
  const techsVerification = projectsInfos[actualSlide].techs.length > 0;
  const { t } = useTranslation();

  return (
    <>
      <div className="content-project">
        <div
          className={`project-content-header ${
            showFixedButtons ? "hidden-btn" : "show-btn"
          }`}
        >
          <div className="center">
            <p>
              {t("techTitle")}: <span> {actualProject.extras[0]}</span>
            </p>

            <p className="client-project">
              {t("clientTitle")}: <span> {actualProject.projeto}</span>
              <img
                src={actualProject.pais}
                className="country"
                alt="icon country"
              />
            </p>

            <p>
              {t("segmentTitle")}: <span>{t(actualProject.extras[2])}</span>
            </p>
          </div>
        </div>

        <div
          className={`projects-counter ${
            showFixedButtons ? "hidden-btn" : "show-btn"
          }`}
        >
          <p>
            {actualSlide + 1} / {projectsInfos.length}
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={actualSlide}
            initial={{ opacity: 0, x: "-100px" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100px" }}
            className={`project-content-wrapper ${
              showFixedButtons ? "up" : "down"
            }`}
          >
            <div className={`center project-info ${actualSlide}`}>
              <div className="project-objectives">
                <h2 className="project-h2">
                  {t("projectsInfo.objectives.objectiveTitle")}
                </h2>
                <ul>
                  {actualProject.objetivos.map((objective, index) => (
                    <li key={index}>{t(objective)}</li>
                  ))}
                </ul>
              </div>
              <div className="separated-line"></div>
              <div className="project-description">
                <h2 className="project-h2">
                  {t("projectsInfo.description.titleDescription")}
                </h2>
                <p>{t(actualProject.descricao)}</p>
              </div>
            </div>

            <div className="tecnologies-related">
              <div className="center">
                <p>{t("projectsInfo.techTitle")}</p>
                <div className="tech-related-wrapper">
                  {techsVerification ? (
                    projectsInfos[actualSlide].techs.map((tech, index) => {
                      return (
                        <div className="related-tech" key={index}>
                          <img src={tech} alt="" />
                        </div>
                      );
                    })
                  ) : (
                    <p className="without-tech">
                      Nenhuma tecnologia está relacionada a este projeto
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div

                  
        className={`project-content-header-fixed ${
          showFixedButtons ? "show-btn" : "hidden-btn"
        }`}
      >

        <div className="center-header-fixed">
          <p>
            {t("techTitle")}: <span> {actualProject.extras[0]}</span>
          </p>

          <p className="client-project">
            {t("clientTitle")}: <span> {actualProject.projeto}</span>
            <img
              src={actualProject.pais}
              className="country"
              alt="icon country"
            />
          </p>

          <p>
            {t("segmentTitle")}: <span>{t(actualProject.extras[2])}</span>
          </p>
        </div>



      <div
        className={`projects-counter-fixed ${
          showFixedButtons ? "show-btn" : "hidden-btn"
        }`}
      >
        <p>
          {actualSlide + 1} / {projectsInfos.length}
        </p>
      </div>

      </div>


    </>
  );
}
