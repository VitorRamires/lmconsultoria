import { TooltipProps } from "recharts";

export const CustomTooltip = ({ active, payload }: TooltipProps<number, string>) => {
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
        <p style={{ margin: 0, fontWeight: "bold" }}>
          {payload[0].payload.name}
        </p>
        <p style={{ margin: 0 }}>Quantidade: {payload[0].value}</p>
      </div>
    );
  }

  return null;
};
