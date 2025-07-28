import { highlightData } from "../../utils/highlight";
import { LiCounter } from "./highlight";

export function Highlight() {
  return (
    <>
      <div className="highlights">
        <ul>
          {highlightData.map(({ number, text, speed, symbol }) => {
            return <LiCounter end={number} speed={speed} text={text} symbol={symbol} />;
          })}
        </ul>
      </div>
    </>
  );
}
