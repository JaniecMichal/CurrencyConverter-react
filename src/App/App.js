import React from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import InformationBox from "./InformationBox";
import { useCurrenciesData } from "./useCurrenciesData";
import { useRates } from "./useRates";

function App() {
  const { calculate, resultContainer } = useCurrenciesData();
  const appState = useRates();

  return (
    <Container>
      <Header mainTitle="Currency Converter by {Imperator}" />
      <InformationBox state={appState.state} />
      <Form
        state={appState.state}
        calculate={calculate}
        currencyRates={appState.currencyRates}
        date={appState.date}
      />
      <Result
        state={appState.state}
        resultContainer={resultContainer}
      />
      <Footer />
    </Container>
  );
};

export default App;
