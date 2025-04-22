import AuSrc from "@/assets/images/automation.png";
import SapSrc from "@/assets/images/sap.png";
import ExcelSrc from "@/assets/images/EXCEL.png";
import UiSrc from "@/assets/images/ui-path.png";
import SalesSrc from "@/assets/images/salesforce.png";

export function Technologies() {
  return (
    <>
      <section className="technologies">
        <div className="center">
          <div className="tech-title">Tecnologias</div>
          <div className="tech-box">
            <div className="tech">
              <img src={AuSrc} alt="" />
            </div>
            <div className="tech">
              <img src={SapSrc} alt="" />
            </div>
            <div className="tech">
              <img src={ExcelSrc} alt="" />
            </div>
            <div className="tech">
              <img src={UiSrc} alt="" />
            </div>
            <div className="tech">
              <img src={SalesSrc} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
