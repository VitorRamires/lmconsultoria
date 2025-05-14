import { NavLink } from "react-router-dom";


export function ProjectsHome() {
  return (
    <>
      <div className="projects-home">
        <div className="info-project-home">
          <h2>Conheça os projetos</h2>
          <div className="center">
            <p>
              Convido você a conhecer um pouco mais do meu trabalho em linhas
              práticas, onde apresento os diversos clientes dos quais atuei com
              gestão de projetos e consultoria em transformação digital, bem
              como um resumo das atividades realizadas em cada um deles.
            </p>
          </div>
          <div className="see-projects">
            <NavLink className="to-projects" to="/project">
              Visitar os projetos
            </NavLink>
          </div>
        </div>
        <div className="overlay"></div>
        <div className="project-home-bg"></div>
      </div>
    </>
  );
}
