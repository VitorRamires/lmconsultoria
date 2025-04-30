import Chart from "../charts/chart";
import { sectors } from "../../utils/sectors";
import { ProjectType } from "./project_type";

export function Activity() {
  return (
    <>
      <div className="activity-area">
        <div className="title-activity">
          <h2>Atuação</h2>
        </div>
        <div className="activity-box">
          <div className="segments activity-item">
            <p>Segmentos</p>
            <Chart />
          </div>
          <div className="sectors activity-item">
            <p>Setores</p>
            <ul>
              {sectors.map((sector) => {
                return <li key={sector}>{sector}</li>;
              })}
            </ul>
          </div>
          <div className="project-types activity-item">
            <p>Tipos e quantidade</p>
            <ProjectType />
          </div>
        </div>
      </div>
    </>
  );
}
