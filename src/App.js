import React, { useState } from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";

const currenciesRates = [
  { id: "EUR", rate: 4.4573 },
  { id: "GBP", rate: 4.9328 },
  { id: "USD", rate: 3.9741 },
  { id: "CHF", rate: 4.1811 },
  { id: "PLN", rate: 1.0 }
];

function App() {

  const [amountValue, setAmountValue] = useState("");
  const [fromCurrencySymbol, setFromCurrencySymbol] = useState("");
  const [resultValue, setResultValue] = useState("");
  const [toCurrencySymbol, setToCurrencySymbol] = useState("");

  const exchangeCurrency = (currentRate, amountValue) => {
    setResultValue(resultValue => (amountValue * currentRate).toFixed(2))
  };

  const writeToSymbol = (toCurrencyName) => {
    setToCurrencySymbol(toCurrencyName)
  };

  const writeAmountValue = (amountValue) => {
    setAmountValue(amountValue);
  }
  const writeFromSymbol = (fromCurrencyName) => {
    setFromCurrencySymbol(fromCurrencyName)
  };

  return (
    <Container>
      <Header mainTitle="Currency Converter by {Imperator}" />
      <Form
        exchangeCurrency={exchangeCurrency}
        currenciesRates={currenciesRates}
        writeFromSymbol={writeFromSymbol}
        writeToSymbol={writeToSymbol}
        writeAmountValue={writeAmountValue}
      />
      <Result
        resultValue={resultValue}
        toCurrencySymbol={toCurrencySymbol}
        amountValue={amountValue}
        fromCurrencySymbol={fromCurrencySymbol}
      />
      <Footer />
    </Container>
  );
};

export default App;
