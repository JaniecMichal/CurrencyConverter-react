import React, { useState } from "react";
import Label from "./Label";
import Select from "./Select";
import Amount from "./Amount";
import Button from "./Button";
import { currenciesRates } from "../CurrenciesRates/index.js";
import Clock from "./Clock";
import "./style.css";

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
    <form className="form" onSubmit={onFormSubmit} >
      <fieldset className="form__fieldset">
        <legend className="form__legend">Currency coverter input data</legend>
        <Clock />
        <p className="flexbox">
          <Label
            title="From currency:"
            inputName="fromCurrency"
          />
          <Select
            modifierClass="form__select--firstSelect"
            selectName="fromCurrency"
            stateValue={fromCurrencyName}
            onChange={({ target }) => setFromCurrencyName(target.value)}
            currenciesRates={currenciesRates}
          />
        </p>
        <p className="flexbox">
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

        </p>
        <p className="flexbox">
          <Label
            title="Amount to convert:"
            inputName="amount"
          />
          <Amount
            stateValue={amountValue}
            onChange={({ target }) => setAmountValue(target.value)}
          />
        </p>
        <Button />
      </fieldset>
    </form >
  )
};

export default Form;
