export const getHighlightData = (lang: string) => {
  const isPT = lang.startsWith("pt");

  return [
    {
      text: "highlights.0",
      number: 400,
      speed: 5,
      symbol: ["+"],
    },
    {
      text: "highlights.1",
      number: isPT ? 6 : 1,
      speed: 50,
      symbol: ["+", "billions", `${isPT ? "R$" : "$"}`],
    },
    {
      text: "highlights.2",
      number: 458,
      speed: 5,
      symbol: ["+", "%"],
    },
    {
      text: "highlights.4",
      number: isPT ? 150 : 25,
      speed: 15,
      symbol: ["+", "M", `${isPT ? "R$" : "$"}`],
    },
    {
      text: "highlights.3",
      number: 12,
      speed: 15,
      symbol: ["+"],
    },
  ];
};
