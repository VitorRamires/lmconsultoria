import serviceImg from "@/assets/images/serviços-bg.png";
import { servicesInformation } from "../../utils/services";

export function Services() {
  return (
    <>
      <section className="services">
        <div className="center">
          <div className="service-wrapper">
            <img src={serviceImg} alt="" />
            <div className="services-box">
              <div className="title-services">
                <h2>Serviços Prestados</h2>
              </div>
              <div className="services-listed">
                {servicesInformation.map((service) => {
                  return (
                    <div className="service" key={service}>
                      <p>{service}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="service-decoration"></div>
        </div>
      </section>
    </>
  );
}
