import { useTranslation } from "react-i18next";
import { getHighlightData } from "../../utils/highlight";
import { LiCounter } from "./highlight";

export function Highlight() {
  const { i18n } = useTranslation();
  const highlightData = getHighlightData(i18n.language)

  return (
    <div className="highlights">
      <ul>
        {highlightData.map(({ number, text, speed, symbol }) => (
          <LiCounter
            key={text}
            end={number}
            speed={speed}
            text={text}
            symbol={symbol}
          />
        ))}
      </ul>
    </div>
  );
}
