import Chart from "../charts/chart";
import { sectors } from "../../utils/sectors";
import { ProjectType } from "./project_type";
import { MobileSegment } from "../charts/mobile-segment";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function Activity() {
  const [matchMediaSize, setMatchMediaSize] = useState<boolean>(false);
  const widthMedia = window.matchMedia("(max-width: 750px)");
  const { t } = useTranslation();

  useEffect(() => {
    setMatchMediaSize(widthMedia.matches);

    window.addEventListener("resize", () => {
      setMatchMediaSize(widthMedia.matches);
    });
  }, []);

  return (
    <>
      <div className="activity-area">
        <div className="title-activity">
          <h2>{t("project.mainTitle")}</h2>
        </div>
        <div className="activity-box">
          <div className="segments activity-item">
            <p className="activity-item-title">{t("project.titleSegments")}</p>
            <p className="chart-title quant-chart">{t("axisY")}</p>
            {matchMediaSize ? <MobileSegment /> : <Chart />}
            <p className="chart-title proj-chart">{t("axisX")}</p>
          </div>
          <div className="sectors activity-item">
            <p className="activity-item-title">{t("project.titleSectors")}</p>
            <ul>
              {sectors.map((sector) => {
                return <li key={sector}>{t(sector)}</li>;
              })}
            </ul>
          </div>
          <div className="project-types activity-item">
            <p className="activity-item-title">{t("project.titleTypes")}</p>
            <ProjectType />
          </div>
        </div>
      </div>
    </>
  );
}
