import Chart from "../charts/chart";

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
            <p>setores</p>
          </div>
          <div className="project-types activity-item">
            <p>Tipos e quantidade</p>
          </div>
        </div>
      </div>
    </>
  );
}
