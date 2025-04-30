import { projectTypes } from "../../utils/projectTypes";

export function ProjectType() {
  return (
    <>
      <div className="project-types-wrapper">
        {projectTypes.map((project) => {
          return (
            <div className="type">
              <div className="type-name">
                <p>{project.tipo}</p>
              </div>
              <div className="quantities">
                <p>{project.quantidade}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
