import serviceImg from "@/assets/images/serviços-bg.png";
import { servicesInformation } from "../../utils/services";
import { motion } from "framer-motion";

export function Services() {
  return (
    <>
      <section className="services" id="services">
        <div className="center">
          <div className="service-wrapper">
            <motion.img
              initial={{ opacity: 0, x: "-100px" }}
              whileInView={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
              viewport={{ amount: 0.4, once: true }}
              src={serviceImg}
              alt=""
            />

            <div className="services-box">
              <div className="title-services">
                <h2>Serviços Prestados</h2>
              </div>
              <motion.div
                initial={{ opacity: 0, x: "-100px" }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.2, duration: 0.3 },
                }}
                viewport={{ amount: 0.4, once: true }}
                className="services-listed"
              >
                {servicesInformation.map((service) => {
                  return (
                    <div className="service" key={service}>
                      <p>{service}</p>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          <div className="service-decoration"></div>
        </div>
      </section>
    </>
  );
}
