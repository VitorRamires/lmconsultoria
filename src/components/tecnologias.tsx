import { technologies } from "../utils/technologies";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Footer } from "./footer";

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
        staggerChildren: 0.1,
        delay: 0.3,
      },
    },
  };
  return (
    <>
      <section className="technologies">
        <div className="title-page">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {t("techTitleHome")}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="title-line"
          ></motion.div>
        </div>
        <motion.div
          className="tech-box"
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
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
      <Footer />
    </>
  );
}
