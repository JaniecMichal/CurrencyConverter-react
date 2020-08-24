import React, { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Amount from "./Amount";
import Button from "./Button";
import Clock from "./Clock";
import { currenciesRates } from "../CurrenciesRates/index.js";
import {useRate} from "./useRate";
import { FormWrapper, Fieldset, Legend, Flexbox } from "./styled";

const Form = ({
  exchangeCurrency,
  writeResultsContent }) => {
  const [fromCurrencyName, setFromCurrencyName] = useState("EUR");
  const [toCurrencyName, setToCurrencyName] = useState("PLN");
  const [amountValue, setAmountValue] = useState("");
  const rate = useRate(fromCurrencyName, toCurrencyName)

  const onFormSubmit = (event) => {
    event.preventDefault();
    exchangeCurrency(rate, amountValue);
    writeResultsContent(amountValue, fromCurrencyName, toCurrencyName)
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
