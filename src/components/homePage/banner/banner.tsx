import mainImage from "@/assets/images/lucas.webp";
import decorationMainImage from "@/assets/icons/main-image.svg";
import { BannerCards } from "./cards";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "motion/react";

export function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <>
      <div className="banner" id="home">
        <div className="banner-content">


          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.5, delay: 0.5 },
            }}
            className={`name-role ${isInView ? "view" : ""}`}
            ref={ref}
          >
            <div className="wrap-name-role">
              <p className="name">
                Lucas Martins <span>Ramires</span>
              </p>
              <p className="role">
                Gerente de Projetos e Delivery <span>Internacional</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "-3%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: .7, delay: 0.5 },
            }}
            className={`main-image ${isInView ? "view" : ""}`}
            ref={ref}
          >
            <img className="image" src={mainImage} alt="" />
            <img
              className="decoration-image"
              src={decorationMainImage}
              alt=""
            />
          </motion.div>
        </div>
        <div className="overlay"></div>
        <motion.div className="banner-bg"></motion.div>
      </div>

      <BannerCards />
    </>
  );
}
