import React from "react";
import { SelectContainer } from "./styled";

const Select = ({ currenciesRates, modifierClass, selectName, stateValue, onChange, first }) => (

  <SelectContainer
    first={first}
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
  </SelectContainer>

);

export default Select;