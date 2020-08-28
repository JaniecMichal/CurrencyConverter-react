import React from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import { currenciesRates } from "./CurrenciesRates/index.js";
import { useCurrenciesData } from "./useCurrenciesData";

function App() {
  const { calculate, resultContainer } = useCurrenciesData();


  return (
    <Container>
      <Header mainTitle="Currency Converter by {Imperator}" />
      <Form
        calculate={calculate}
        currenciesRates={currenciesRates}
      />
      <Result
        resultContainer={resultContainer}
      />
      <Footer />
    </Container>
  );
};

export default App;
