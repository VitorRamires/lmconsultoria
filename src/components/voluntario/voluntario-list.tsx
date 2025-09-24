import { mentoring, volunteer } from "../../utils/volunteer";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export function VolunteerList() {
  const { t } = useTranslation();

  return (
    <div className="volunteer-list-wrapper">
      <div className="center">
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
          className="recolocation"
        >
          <h3 className="volunteer-title">{t("volunteer.title1")}</h3>
          <div className="recolocation-box">
            <h4>{t("volunteer.volunteerText")}</h4>
            <div className="recolocation-list">
              <ul>
                {volunteer.map((item, index) => (
                  <li key={index}>
                    <span>{t(item.item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "-50px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="leader-formation"
        >
          <h3 className="volunteer-title">{t("volunteer.title2")}</h3>
          <div className="recolocation-box">
            <h4>{t("volunteer.volunteerText2")}</h4>
            <div className="recolocation-list">
              <ul>
                {mentoring.map((item, index) => (
                  <li key={index}>
                    <span>{t(item.item)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
