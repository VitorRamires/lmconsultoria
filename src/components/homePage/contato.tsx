import contactBG from "@/assets/images/contato-bg.jpg";
import linkedin from "@/assets/icons/linkedin.svg";
import email from "@/assets/icons/email.svg";
import phone from "@/assets/icons/phone.svg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function Contact() {
   const { t } = useTranslation();
  return (
    <>
      <motion.div
        initial={{ y: "-5%", opacity: 0 }}
        whileInView={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        }}
        viewport={{ amount: 0.5, once: true }}
        className="contact"
        id="contact"
      >
        <div className="contact-banner">
          <div className="get-in-touch">
            <div className="get-in-touch-text">
              <h2>{t("contact.title")}</h2>
              <p>{t("contact.text1")}</p>
              <p>{t("contact.text2")}</p>
            </div>
          </div>
          <div className="img-contant">
            <img src={contactBG} alt="" loading="lazy" />
          </div>
        </div>
        <div className="contact-forms">
          <div className="form">
            <a href="https://www.linkedin.com/in/lucasmramires/">LinkedIn</a>

            <img src={linkedin} alt="" />
          </div>
          <div className="form">
            <a href="https://wa.me/5551983497704">51 - 983497704</a>
            <img src={phone} alt="" />
          </div>
          <div className="form">
            <a href="mailto:lucasm.ramires@hotmail.com">
              Lucasm.ramires@hotmail.com
            </a>
            <img src={email} alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
