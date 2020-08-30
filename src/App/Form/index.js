import React, { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Amount from "./Amount";
import Button from "./Button";
import Clock from "./Clock";
import { useRate } from "./useRate";
import { 
        FormWrapper, 
        Fieldset, 
        Legend, 
        Flexbox, 
        InformParagraph 
       } from "./styled";

const Form = ({ calculate, currencyRates, loading, date }) => {
  const [fromCurrencyName, setFromCurrencyName] = useState("PLN");
  const [toCurrencyName, setToCurrencyName] = useState("EUR");
  const [amountValue, setAmountValue] = useState("");
  const rate = useRate(fromCurrencyName, toCurrencyName, currencyRates)

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculate(rate, amountValue, fromCurrencyName, toCurrencyName)
    setAmountValue("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit} loading={loading === true ? "loading" : ""} >
      <Fieldset>
        <Legend>Currency coverter input data</Legend>
        <Clock />
        <Flexbox>
          <Label
            title="From currency:"
            inputName="fromCurrency"
          />
          <Select
            first
            selectName="fromCurrency"
            stateValue={fromCurrencyName}
            onChange={({ target }) => setFromCurrencyName(target.value)}
            currencyRates={currencyRates}
          />
        </Flexbox>
        <Flexbox>
          <Label
            title="To currency:"
            inputName="toCurrency"
          />
          <Select
            selectName="toCurrency"
            stateValue={toCurrencyName}
            onChange={({ target }) => setToCurrencyName(target.value)}
            currencyRates={currencyRates}
          />

        </Flexbox>
        <Flexbox>
          <Label
            title="Amount to convert:"
            inputName="amount"
          />
          <Amount
            stateValue={amountValue}
            onChange={({ target }) => setAmountValue(target.value)}
          />
        </Flexbox>
        <Button />
        <InformParagraph>Current rates comes from European Central Bank for day {date} </InformParagraph>
      </Fieldset>
    </FormWrapper>
  )
};

export default Form;
