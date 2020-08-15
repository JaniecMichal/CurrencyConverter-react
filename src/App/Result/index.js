import React from "react";
import "./style.css";

const Result = ({ resultValue, toCurrencySymbol, amountValue, fromCurrencySymbol }) => {
  return (
    <section className="section">
      <h2 className="section__header">Here you see result:
        <span className="section__result">
          {amountValue} {fromCurrencySymbol}
          {resultValue !== "" ? " = " : " "}
          {resultValue} {toCurrencySymbol}
        </span>
      </h2>
    </section>
  )
};

export default Result;