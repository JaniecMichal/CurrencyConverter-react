import React from "react";
import { ResultWrapper, ResultHeader, ResultContent } from "./styled";

const Result = ({ state, resultContainer }) => {
  return (
    <ResultWrapper notSucess={state !== "sucess" ? "notSucess" : ""}>
      <ResultHeader>Here you see result:
        <ResultContent>
          {resultContainer.amountValue} {resultContainer.fromCurrencyName}
          {resultContainer.resultValue !== undefined ? " = " : " "}
          {resultContainer.resultValue !== undefined ? resultContainer.resultValue.toFixed(2) : " "} {resultContainer.toCurrencyName}
        </ResultContent>
      </ResultHeader>
    </ResultWrapper>
  )
};

export default Result;