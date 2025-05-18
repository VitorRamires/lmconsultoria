import { volunteer } from "../../utils/volunteer";
import { motion } from "framer-motion";

export function VolunteerList() {
  return (
    <div className="volunteer-list-wrapper">
      <div className="center">
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
          className="recolocation"
        >
          <h3 className="volunteer-title">
            Mentoria de Recolocação no Mercado de Trabalho (TI)
          </h3>
          <div className="recolocation-box">
            <h4>
              Ajudo as pessoas a se recolocarem no mercado de TI, auxiliando em
              itens como:
            </h4>
            <div className="recolocation-list">
              <ul>
                {volunteer.map((item, index) => (
                  <li key={index}>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="leader-formation"
        >
          <h3 className="volunteer-title">Mentoria de Formação de Líderes</h3>
          <p>
            Realizo mentorias com outras pessoas para trocarmos ideias e
            experiências acerca da formação de uma liderança voltada à pessoas e
            ampliando a visão macro em responsabilidades mais gerenciais.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
