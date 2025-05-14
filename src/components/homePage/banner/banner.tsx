import mainImage from "@/assets/images/lucas.webp";
import decorationMainImage from "@/assets/icons/main-image.svg";
import { BannerCards } from "./cards";
import { motion } from "framer-motion";

export function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-content">
          <motion.div
            initial={{ y: "-15%", opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: .5 },
            }}
            className="name-role"
          >
            <div className="wrap-name-role">
              <p className="name">
                Lucas Martins <span>Ramires</span>
              </p>
              <p className="role">
                Gerente de projetos <span>internacional</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: .8} }}
            className="main-image"
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
