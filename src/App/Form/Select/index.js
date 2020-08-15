import React from "react";
import "./style.css";

const Select = ({ currenciesRates, modifierClass, selectName, stateValue, onChange }) => (

  <select
    className={`form__select ${modifierClass}`}
    id={selectName}
    value={stateValue}
    onChange={onChange}
    required
  >
    {
      currenciesRates.map(currencyRate => (
        <option key={currencyRate.id} value={currencyRate.id}>{currencyRate.fullName}</option>
      ))
    }
  </select>

);

export default Select;