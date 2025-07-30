import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export function LiCounter({
  end,
  speed,
  text,
  symbol,
}: {
  end: number;
  speed: number;
  text: string;
  symbol: string[];
}) {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    setNumber(0);
  }, [end]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );
    const currentElement = ref.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  useEffect(() => {
    if (!visible || number >= end) return;
    const interval = setInterval(() => {
      setNumber((prev) => {
        if (prev >= end) {
          clearInterval(interval);
          return prev;
        }
        return end >= 100 ? prev + 10 : prev + 1;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [number, end, visible]);

  return (
    <>
      <li ref={ref}>
        <div className="wrapper-text-highlight">
          <p className="number-highlight">
            {symbol[2]}
            {symbol[0]}
            <span>{number}</span>
            {t(symbol[1])}
          </p>
          <p>{t(text)}</p>
        </div>
      </li>
    </>
  );
}
