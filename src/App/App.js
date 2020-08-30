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
      <InformationBox loading={appState.loading} errorState={appState.errorState} />
      <Form
        loading={appState.loading}
        calculate={calculate}
        currencyRates={appState.currencyRates}
        date={appState.date}
      />
      <Result
        loading={appState.loading}
        resultContainer={resultContainer}
      />
      <Footer />
    </Container>
  );
};

export default App;
