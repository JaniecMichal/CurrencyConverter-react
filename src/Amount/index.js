import React from "react";
import "./style.css";

const Amount = ({ stateValue, onChange }) => (
  <input
    type="number"
    className="form__input"
    id="amount"
    min="1"
    step="0.01"
    value={stateValue}
    onChange={onChange}
    required
  />
);

export default Amount;

