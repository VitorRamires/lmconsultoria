import { useInView } from "motion/react";
import { useRef } from "react";

interface Experience {
  role: string;
  company: string;
  activitys: string[];
}

interface ExperienciaProps {
  experience: Experience;
}

export function Experiencia({ experience }: ExperienciaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <div
      className={`experiencia${isInView ? " experiencia-inview" : ""}`}
      ref={ref}
    >
      <div className="dados-experiencia">
        <article className="infos-expx">
          <h2 className="cargo">{experience.role}</h2>
          <h3 className="empresa">{experience.company}</h3>
        </article>
        <article className="descritivo">
          <ul>
            {experience.activitys.map((activity: string, idx: number) => (
              <li className="atividade" key={idx}>
                {activity}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
