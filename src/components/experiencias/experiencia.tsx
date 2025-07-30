import { useInView } from "motion/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <div
      className={`experiencia${isInView ? " experiencia-inview" : ""}`}
      ref={ref}
    >
      <div className="dados-experiencia">
        <article className="infos-exp">
          <h2 className="cargo">{t(experience.role)}</h2>
          <h3 className="empresa">{t(experience.company)}</h3>
        </article>
        <article className="descritivo">
          <ul>
            {experience.activitys.map((activity: string, idx: number) => (
              <li className="atividade" key={idx}>
                {t(activity)}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}
