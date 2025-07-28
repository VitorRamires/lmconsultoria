import serviceImg from "@/assets/images/serviços-bg.png";
import { servicesInformation } from "../utils/services";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";


export function Services() {
  const { t } = useTranslation();
  return (
    <>
      <section className="services" id="services">
        <div className="center">
          <div className="service-wrapper">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
              viewport={{ amount: 0.4, once: true }}
            >
              <img src={serviceImg} alt="" />
            </motion.div>

            <div className="services-box">
              <div className="title-services">
                <h2>{t("services.title")}</h2>
              </div>

              <motion.div
                initial={{ opacity: 0, x: "-100px" }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 0.3 },
                }}
                viewport={{ amount: 0.2, once: true }}
                className="services-listed"
              >
                {servicesInformation.map((service) => {
                  return (
                    <div className="service" key={service}>
                      <p>{t(service)}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{
              opacity: 1,
              width: "1150px",
              transition: { duration: 0.3 },
            }}
            viewport={{ amount: 0.4, once: true }}
            className="service-decoration"
          ></motion.div>
        </div>
      </section>

    </>
  );
}
