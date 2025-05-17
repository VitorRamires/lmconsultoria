import { experiences } from "../../utils/experiences";
import { Experiencia } from "./experiencia";

export function ExperiencieList() {
  return (
    <div className="experiencias-box">
      <div className="center">
        <div className="lista-experiencias">
          {experiences.map((experience, index) => {
            return (
              <Experiencia experience={experience} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
