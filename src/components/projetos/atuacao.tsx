import Chart from "../charts/chart";
import { sectors } from "../../utils/sectors";

export function Activity() {
  return (
    <>
      <div className="activity-area">
        <div className="title-activity">
          <h2>Atuação</h2>
        </div>
        <div className="activity-box">
          <div className="segments activity-item">
            <h2>Segmentos</h2>
            <Chart />
          </div>
          <div className="sectors activity-item">
            <h2>Setores</h2>
            <ul>
              {sectors.map((sector) => {
                return <li key={sector}>{sector}</li>;
              })}
            </ul>
          </div>
          <div className="project-types activity-item">
            <p>Tipos e quantidade</p>
          </div>
        </div>
      </div>
    </>
  );
}
