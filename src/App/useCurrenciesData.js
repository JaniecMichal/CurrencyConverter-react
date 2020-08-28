import { useState } from "react";

export const useCurrenciesData = () => {
  const [resultContainer, setResultContainer] = useState("")

  const calculate = (rate, amountValue, fromCurrencyName, toCurrencyName) => {
    setResultContainer({
      resultValue: amountValue * rate,
      amountValue,
      fromCurrencyName,
      toCurrencyName,
    })
  };


  return { calculate, resultContainer }
};