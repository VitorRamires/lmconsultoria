import contactBG from "@/assets/images/contato-bg.jpg";
import linkedin from "@/assets/icons/linkedin.svg";
import email from "@/assets/icons/email.svg";
import phone from "@/assets/icons/phone.svg";
import { motion } from "framer-motion";

export function Contact() {
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
              <h2>Entre em contato</h2>
              <p>
                Será um prazer conversarmos para entender seus desafios e
                elaborarmos uma solução para eles.
              </p>
              <p>
                Gostaria de firmar uma parceria ou entrar em contato? Utilize os
                canais abaixo.
              </p>
            </div>
          </div>
          <div className="img-contant">
            <img src={contactBG} alt="" />
          </div>
        </div>
        <div className="contact-forms">
          <div className="form">
            
              <a href="https://www.linkedin.com/in/lucasmramires/">Linkedin</a>
       
            <img src={linkedin} alt="" />
          </div>
          <div className="form">
            <p>51 - 983475750</p>
            <img src={phone} alt="" />
          </div>
          <div className="form">
            <p>lucasramires@hormail.com</p>
            <img src={email} alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
