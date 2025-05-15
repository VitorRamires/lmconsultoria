import { projectsInfos } from "../../utils/projects-infos";

interface ActualSlide {
  actualSlide: number;
  showFixedButtons: boolean;
}

export function Content({ actualSlide, showFixedButtons }: ActualSlide) {
  const actualProject = projectsInfos[actualSlide];
  const techsVerification = projectsInfos[actualSlide].techs.length > 0;

  return (
    <div className="content-project">
      <div
        className={`project-content-header ${
          showFixedButtons ? "hidden" : "show"
        }`}
      >
        <div className="center">
          <p>
            Core: <span> {actualProject.extras[0]}</span>
          </p>

          <p className="client-project">
            Cliente: <span> {actualProject.projeto}</span>
            <img src={actualProject.pais} alt="icon country" />
          </p>

          <p>
            Segmento: <span> {actualProject.extras[2]}</span>
          </p>
        </div>
      </div>
      <div className="center project-info">
        <div className="project-objectives">
          <h2 className="project-h2">Objetivos do projeto</h2>
          <ul>
            {actualProject.objetivos.map((objective, index) => {
              return <li key={index}>{objective}</li>;
            })}
          </ul>
        </div>
        <div className="separated-line"></div>
        <div className="project-description">
          <h2 className="project-h2">Sobre o projeto</h2>
          <p>{actualProject.descricao}</p>
        </div>
      </div>
      <div className="tecnologies-related">
        <div className="center">
          <p>Tecnologias relacionadas</p>
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
      <div
        className={`project-content-header-fixed ${
          showFixedButtons ? "show" : "hidden"
        }`}
      >
        <div className="center">
          <p>
            Core: <span> {actualProject.extras[0]}</span>
          </p>

          <p className="client-project">
            Cliente: <span> {actualProject.projeto}</span>
            <img src={actualProject.pais} alt="icon country" />
          </p>

          <p>
            Segmento: <span> {actualProject.extras[2]}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
