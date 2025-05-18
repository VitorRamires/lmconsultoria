import { Footer } from "../footer";
import { Activity } from "./atuacao";
import { SliderProjects } from "./slider_projects";
import { motion } from "framer-motion";

export function Project() {
  return (
    <>
      <div className="page-banner project-banner" id="project">
        <div className="title-page">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Projetos
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.2 }}
            className="title-line"
          ></motion.div>
        </div>
        <div className="overlay"></div>
        <motion.div
          initial={{ y:"-35px", opacity: 0 }}
          whileInView={{ opacity: 1, y:0 }}
          transition={{ delay: 0.3 }}
          className="project-content"
        >
          <div className="center">
            <Activity />
          </div>
        </motion.div>
      </div>
      <div className="all-projects">
        <SliderProjects />
      </div>
      <Footer />
    </>
  );
}
