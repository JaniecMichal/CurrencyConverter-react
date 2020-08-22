import React, { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Amount from "./Amount";
import Button from "./Button";
import { currenciesRates } from "../CurrenciesRates/index.js";
import Clock from "./Clock";
import {FormWrapper, Fieldset, Legend, Flexbox} from "./styled";


const Form = ({
  exchangeCurrency,
  writeToSymbol,
  writeFromSymbol,
  writeAmountValue }) => {
  const [fromCurrencyName, setFromCurrencyName] = useState("EUR");
  const [toCurrencyName, setToCurrencyName] = useState("PLN");
  const [amountValue, setAmountValue] = useState("");
  const fromCurrency = currenciesRates.find(({ id }) => id === fromCurrencyName);
  const toCurrency = currenciesRates.find(({ id }) => id === toCurrencyName);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const currentRate = (fromCurrency.rate / toCurrency.rate).toFixed(2);
    exchangeCurrency(currentRate, amountValue);
    writeFromSymbol(fromCurrency.id);
    writeToSymbol(toCurrency.id);
    writeAmountValue(amountValue);
    setAmountValue("");
  };

  return (
    <FormWrapper onSubmit={onFormSubmit} >
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
            currenciesRates={currenciesRates}
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
            currenciesRates={currenciesRates}
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
      </Fieldset>
    </FormWrapper>
  )
};

export default Form;
