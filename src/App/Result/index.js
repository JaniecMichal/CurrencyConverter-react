import React from "react";
import {ResultWrapper, ResultHeader, ResultContent} from "./styled";

const Result = ({ resultValue, toCurrencySymbol, amountValue, fromCurrencySymbol }) => {
  return (
    <ResultWrapper>
      <ResultHeader>Here you see result:
        <ResultContent>
          {amountValue} {fromCurrencySymbol}
          {resultValue !== "" ? " = " : " "}
          {resultValue} {toCurrencySymbol}
        </ResultContent>
      </ResultHeader>
    </ResultWrapper>
  )
};

export default Result;