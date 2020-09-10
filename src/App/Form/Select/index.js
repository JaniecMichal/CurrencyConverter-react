import React from "react";
import { SelectContainer } from "./styled";

const Select = ({ state, currencyRates, selectName, stateValue, onChange, first }) => {
  const options = () => {
    const currencyNames = Object.keys(currencyRates)
    currencyNames.sort((a, b) => a.localeCompare(b));

    return (
      currencyNames.map(currencyNames => (
        <option key={currencyNames} value={currencyNames}>{currencyNames}</option>
      )))
  };

  
  return (
    <SelectContainer
      first={first}
      id={selectName}
      value={stateValue}
      onChange={onChange}
      required
    >
      {state === "sucess" ? options() : ""}
    </SelectContainer>

  )
};

export default Select;