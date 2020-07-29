import React from 'react';
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";


function App() {
  return (
    <Container>
      <Header mainTitle="Currency Converter by {Imperator}" />
      <Form />
      <Result />
      <Footer />
    </Container>
  );
}

export default App;
