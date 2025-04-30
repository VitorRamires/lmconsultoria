import { Activity } from "./atuacao";
import { SliderProjects } from "./slider_projects";

export function Project() {
  return (
    <>
      <div className="page-banner">
        <div className="title-page">
          <h2>Projetos</h2>
          <div className="title-line"></div>
        </div>
        <div className="overlay"></div>
        <div className="project-content">
          <div className="center">
            <Activity />
          </div>
        </div>
      </div>
      <div className="all-projects">
        <div className="center">
          <SliderProjects />
        </div>
      </div>
    </>
  );
}
