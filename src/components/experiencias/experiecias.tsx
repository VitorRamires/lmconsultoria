import { Footer } from "../footer.tsx";
import { ExperiencieList } from "./experince-list.tsx";
import { motion } from "framer-motion";

export function Experiences() {
  return (
    <>
      <section className="experiencias" id="experience">
        <div className="page-banner experience-banner">
          <div className="title-page">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Experiências
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.2 }}
              className="title-line"
            ></motion.div>
          </div>
          <div className="overlay"></div>
          <div className="project-content">
            <div className="center">
              <ExperiencieList />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
