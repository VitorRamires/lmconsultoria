import { t } from "i18next";
import { data } from "../../utils/chartData.ts";
export function MobileSegment() {
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
