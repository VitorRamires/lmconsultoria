import { technologies } from "../../utils/technologies";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Technologies() {
  const { t } = useTranslation();
  const techs = technologies;
  const animateStagger = {
    initial: { opacity: 0, y: "-15%" },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1, // tempo entre cada card
      },
    },
  };
  return (
    <>
      <section className="technologies">
        <div className="tech-title">{t("techTitle")}</div>
        <motion.div
          className="tech-box"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          {techs.map((tech, index) => {
            return (
              <motion.div
                className={`tech ${tech.name}`}
                variants={animateStagger}
                key={index}
              >
                <img src={tech.url} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </>
  );
}
