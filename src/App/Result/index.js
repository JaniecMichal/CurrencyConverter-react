import React from "react";
import {ResultWrapper, ResultHeader, ResultContent} from "./styled";

const Result = ({resultContainer,resultValue }) => {
  console.log(resultValue)
  return (
    <ResultWrapper>
      <ResultHeader>Here you see result:
        <ResultContent>
          {resultContainer.amountValue} {resultContainer.fromCurrencyName}
          {resultValue !== "" ? " = " : " "}
          {resultValue} {resultContainer.toCurrencyName}
        </ResultContent>
      </ResultHeader>
    </ResultWrapper>
  )
};

export default Result;