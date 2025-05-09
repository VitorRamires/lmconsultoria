import { technologies } from "../../utils/technologies";

export function Technologies() {
  const techs = technologies;

  return (
    <>
      <section className="technologies">
        <div className="tech-title">Tecnologias</div>
        <div className="tech-box">
          {techs.map((tech) => {
            return (
              <div className={`tech ${tech.name}`}>
                <img src={tech.url} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
