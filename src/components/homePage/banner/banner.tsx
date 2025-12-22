import mainImage from "@/assets/images/lucas.webp";
import decorationMainImage from "@/assets/icons/main-image.svg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Trans, useTranslation } from "react-i18next";
import bgImage from "../../../assets/images/banner-bg.webp";
import { t } from "i18next";

export function Banner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  useTranslation();

  return (
    <>
      <div className="banner" id="home">
        <div className="banner-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            className={`name-role ${isInView ? "view" : ""}`}
            ref={ref}
          >
            <div className="wrap-name-role">
              <p className="name">
                Lucas <span>Ramires</span>
              </p>
              <p className="role">{t("titleBanner")}</p>
              <p className="international-reach">
                <Trans i18nKey="titleBanner2" components={{ span: <span /> }} />
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "-3%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2, delay: 0.2 },
            }}
            className={`main-image ${isInView ? "view" : ""}`}
            ref={ref}
          >
            <img
              className="image"
              src={mainImage}
              alt="Lucas Ramires photo"
              fetchPriority="high"
            />
            <img
              className="decoration-image"
              src={decorationMainImage}
              alt="decoration image behing Lucas Ramires photo"
            />
          </motion.div>
        </div>
        <div className="overlay"></div>
        <img
          src={bgImage}
          className="banner-bg"
          fetchPriority="high"
          alt="background image fulled of buildings"
        />
      </div>

    </>
  );
}
