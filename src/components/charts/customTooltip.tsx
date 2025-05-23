import { TooltipProps } from "recharts";
import { useTranslation } from "react-i18next";

export const CustomTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  const { t } = useTranslation();

  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <p style={{ margin: 0, fontWeight: "bold", fontSize: "1rem", marginBottom:"7px" }}>
          {t(payload[0].payload.name)}
        </p>
        <p style={{ margin: 0, fontSize: "1rem" }}>
          Quantidade: {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};
