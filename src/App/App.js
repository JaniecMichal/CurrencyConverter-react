import React from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import { currenciesRates } from "./CurrenciesRates/index.js";
import {useCurrenciesData} from "./useCurrenciesData";

function App() {
  const [exchangeCurrency,
    writeResultsContent,
    resultContainer,
    resultValue] = useCurrenciesData();


  return (
    <Container>
      <Header mainTitle="Currency Converter by {Imperator}" />
      <Form
        exchangeCurrency={exchangeCurrency}
        currenciesRates={currenciesRates}
        writeResultsContent={writeResultsContent}
      />
      <Result
        resultContainer={resultContainer}
        resultValue={resultValue}
      />
      <Footer />
    </Container>
  );
};

export default App;
