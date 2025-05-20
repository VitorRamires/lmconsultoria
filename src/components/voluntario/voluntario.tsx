import { Footer } from "../footer";
import { VolunteerList } from "./voluntario-list";
import { motion } from "framer-motion";

export function Volunteer() {
  return (
    <>
      <div className="page-banner volunteer-banner" id="volunteer">
        
        <div className="title-page">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Trabalho Voluntário
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.2 }}
            className="title-line"
          ></motion.div>
        </div>
        <div className="overlay"></div>
        <div className="center">
          <VolunteerList />
        </div>
        <Footer />
      </div>
    </>
  );
}
