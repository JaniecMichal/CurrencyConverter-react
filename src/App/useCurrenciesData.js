import {useState} from "react";

export const useCurrenciesData = () => {
    const [resultValue, setResultValue] = useState("");
    const [resultContainer, setResultContainer] = useState("")
  
    const exchangeCurrency = (currentRate, amountValue) => {
      setResultValue(resultValue => (amountValue * currentRate).toFixed(0))
    };
  
    const writeResultsContent = (amountValue, fromCurrencyName, toCurrencyName) => {
      setResultContainer({
        amountValue,
        fromCurrencyName,
        toCurrencyName
      })
    };
  
    return [exchangeCurrency,
      writeResultsContent,
      resultContainer,
      resultValue
    ]
  };