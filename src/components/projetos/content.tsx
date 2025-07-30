import { projectsInfos } from "../../utils/projects-infos";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface ActualSlide {
  actualSlide: number;
  showFixedButtons: boolean;
}

export function Content({ actualSlide, showFixedButtons }: ActualSlide) {
  const actualProject = projectsInfos[actualSlide];
  const segmentosArray = Object.entries(actualProject.segmentos || {});
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
              <div className="about-client">
                <h2 className="project-h2">
                  {t("projectsInfo.description.titleDescriptionClient")}
                </h2>
                <p>{t(actualProject.descricaoCliente)}</p>
              </div>

              <div className="separated-line"></div>

              <div className="project-wrapper">
                <div className="custom-pagination"></div>
                {Object.keys(actualProject.segmentos || {}).length > 0 ? (
                  <div className="two-segs">
                    <Swiper
                      slidesPerView={1}
                      loop={false}
                      effect="fade"
                      fadeEffect={{ crossFade: true }}
                      modules={[EffectFade, Pagination]}
                      simulateTouch={false}
                      autoHeight={true}
                      pagination={{
                        clickable: true,
                        el: ".custom-pagination",
                        renderBullet: (index, className) => {
                          const nomeSegmento =
                            segmentosArray[index]?.[1]?.nome ||
                            `Segmento ${index + 1}`;
                          return `<button type="button" class="${className} custom-bullet">${nomeSegmento}</button>`;
                        },
                      }}
                    >
                      {Object.entries(actualProject.segmentos || {}).map(
                        ([key, segmento]) => (
                          <SwiperSlide key={key}>
                            <div className="project-objectives">
                              <h2 className="project-h2">
                                {t("projectsInfo.objectives.objectiveTitle")}
                              </h2>
                              <ul>
                                {segmento.objetivos?.map(
                                  (objective: string[], index: number) => (
                                    <li key={index}>{t(objective)}</li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div className="about-project">
                              <h2 className="project-h2">
                                {t(
                                  "projectsInfo.description.titleDescriptionProject"
                                )}
                              </h2>
                              <p>{t(segmento.descricaoProjeto)}</p>
                            </div>

                            <div className="tecnologies-related">
                              <div className="center">
                                <p>{t("projectsInfo.techTitle")}</p>
                                <div className="tech-related-wrapper">
                                  {segmento.techs?.map(
                                    (tech: string, index: number) => {
                                      return (
                                        <div
                                          className="related-tech"
                                          key={index}
                                        >
                                          <img src={tech} alt="" />
                                        </div>
                                      );
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        )
                      )}
                    </Swiper>
                  </div>
                ) : (
                  <>
                    <div className="project-objectives">
                      <h2 className="project-h2">
                        {t("projectsInfo.objectives.objectiveTitle")}
                      </h2>
                      <ul>
                        {actualProject.objetivos?.map((objective, index) => (
                          <li key={index}>{t(objective)}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="about-project">
                      <h2 className="project-h2">
                        {t("projectsInfo.description.titleDescriptionProject")}
                      </h2>
                      <p>{t(actualProject.descricaoProjeto ?? "")}</p>
                    </div>

                    <div className="tecnologies-related">
                      <div className="center">
                        <p>{t("projectsInfo.techTitle")}</p>
                        <div className="tech-related-wrapper">
                          {projectsInfos[actualSlide].techs?.map(
                            (tech, index) => {
                              return (
                                <div className="related-tech" key={index}>
                                  <img src={tech} alt="" />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
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
