import Chart from "../charts/chart";
import { sectors } from "../../utils/sectors";
import { ProjectType } from "./project_type";
import { MobileSegment } from "../charts/mobile-segment";
import { useEffect, useState } from "react";

export function Activity() {
  const [matchMediaSize, setMatchMediaSize] = useState<boolean>(false);
  const widthMedia = window.matchMedia("(max-width: 750px)");

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
          <h2>Atuação</h2>
        </div>
        <div className="activity-box">
          <div className="segments activity-item">
            <p className="activity-item-title">Segmentos e Quantidade</p>
            {matchMediaSize ? <MobileSegment /> : <Chart />}
          </div>
          <div className="sectors activity-item">
            <p className="activity-item-title">Setores</p>
            <ul>
              {sectors.map((sector) => {
                return <li key={sector}>{sector}</li>;
              })}
            </ul>
          </div>
          <div className="project-types activity-item">
            <p className="activity-item-title">Tipos e Quantidade</p>
            <ProjectType />
          </div>
        </div>
      </div>
    </>
  );
}
