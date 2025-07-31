export const getHighlightData = (lang: string) => {
  const isPT = lang.startsWith("pt");

  return [
    {
      text: "highlights.0",
      number: 350,
      speed: 50,
      symbol: ["+"],
    },
    {
      text: "highlights.1",
      number: isPT ? 6 : 1,
      speed: 200,
      symbol: ["+", "billions", `${isPT ? "R$" : "$"}`],
    },
    {
      text: "highlights.2",
      number: 450,
      speed: 50,
      symbol: ["+", "%"],
    },
    {
      text: "highlights.3",
      number: 12,
      speed: 150,
      symbol: ["+"],
    },
    {
      text: "highlights.4",
      number: isPT ? 120 : 25,
      speed: 50,
      symbol: ["+", "M", `${isPT ? "R$" : "$"}`],
    },
  ];
};
