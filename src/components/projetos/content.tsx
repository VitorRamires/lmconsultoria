import { projectsInfos } from "../../utils/projects-infos";

interface ActualSlide {
  actualSlide: number;
}

export function Content({ actualSlide }: ActualSlide) {
  const actualProject = projectsInfos[actualSlide];

  return (
    <div className="content-project">
      <div className="project-content-header">
        <p>
          Core: <span> {actualProject.extras[0]}</span>
        </p>
        <div className="separated-line"></div>
        <p>
          Cliente: <span> {actualProject.projeto}</span>
        </p>
        <div className="separated-line"></div>
        <p>
          Segmento: <span> {actualProject.extras[2]}</span>
        </p>
      </div>
      <div className="center">
        <div className="project-objectives">
          <h2 className="project-h2">Objetivos do projeto</h2>
          <ul>
            {actualProject.objetivos.map((objective, index) => {
              return <li key={index}>{objective}</li>;
            })}
          </ul>
        </div>
        <div className="project-description">
          <h2 className="project-h2">Sobre o projeto</h2>
          <p>{actualProject.descricao}</p>
        </div>
      </div>
    </div>
  );
}
