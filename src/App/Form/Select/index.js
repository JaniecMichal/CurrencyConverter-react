import React from "react";
import { SelectContainer } from "./styled";

const Select = ({ currencyRates, selectName, stateValue, onChange, first }) => {
  const currencyNames = Object.keys(currencyRates);
  currencyNames.sort((a, b) => a.localeCompare(b));
  return (
    <SelectContainer
      first={first}
      id={selectName}
      value={stateValue}
      onChange={onChange}
      required
    >
      {
        currencyNames.map(currencyName => (
          <option key={currencyName} value={currencyName}>{currencyName}</option>
        ))
      }
    </SelectContainer>

  )
};

export default Select;