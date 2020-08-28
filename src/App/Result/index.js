import React from "react";
import { ResultWrapper, ResultHeader, ResultContent } from "./styled";

const Result = ({ resultContainer }) => {
  return (
    <ResultWrapper>
      <ResultHeader>Here you see result:
        <ResultContent>
          {resultContainer.amountValue} {resultContainer.fromCurrencyName}
          {resultContainer.resultValue !== undefined ? " = " : " "}
          {resultContainer.resultValue !== undefined ? resultContainer.resultValue.toFixed(0) : " "} {resultContainer.toCurrencyName}
        </ResultContent>
      </ResultHeader>
    </ResultWrapper>
  )
};

export default Result;