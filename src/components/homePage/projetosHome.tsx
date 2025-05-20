import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export function ProjectsHome() {
  return (
    <>
      <div className="projects-home">
        <div className="info-project-home">
          <h2>Conheça os Projetos</h2>
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
              Visitar os Projetos
            </NavLink>
          </div>
        </div>
        <div className="overlay"></div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 2 } }}
          viewport={{ amount: 0.5, once: true }}
          className="project-home-bg"
        ></motion.div>
      </div>
    </>
  );
}
