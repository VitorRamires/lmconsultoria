import { t } from "i18next";
import { projectTypes } from "../../utils/projectTypes";

export function ProjectType() {
  return (
    <>
      <div className="project-types-wrapper">
        {projectTypes.map((project, index) => {
          return (
            <div className="type" key={index}>
              <div className="type-name">
                <p>{project.tipo}</p>
              </div>
              <div className="Quantity">
                <p>{project.quantidade} <span>{t("axisX")}</span></p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
