import { experiences } from "../../utils/experiences";

export function ExperiencieList() {
  return (
    <div className="experiencias-box">
      <div className="center">
        <div className="lista-experiencias">
          {experiences.map((experience, index) => {
            return (
              <div className="experiencia" key={index}>
                <div className="dados-experiencia">
                  <article className="infos-expx">
                    <h2 className="cargo">{experience.role}</h2>
                    <h3 className="empresa">{experience.company}</h3>
                  </article>
                  <article className="descritivo">
                    <ul>
                      {experience.activitys.map((activity, index) => {
                        return (
                          <li className="atividade" key={index}>
                            {activity}
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
