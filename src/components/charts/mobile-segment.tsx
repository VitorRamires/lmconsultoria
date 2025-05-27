import { data } from "../../utils/chartData.ts";
import { useTranslation } from "react-i18next";
export function MobileSegment() {
  const { t } = useTranslation();
  return (
    <>
      {data.map((segment, index) => {
        return (
          <div className="mobile-segment" key={index}>
            <div className="segment-name">
              <h3>{t(segment.name)}</h3>
            </div>
            <div className="quantity">
              <p>{segment.quantidade}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
