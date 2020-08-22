import React from "react";
import { Input } from "./styled";

const Amount = ({ stateValue, onChange }) => (
  <Input
    type="number"
    id="amount"
    min="1"
    step="0.01"
    value={stateValue}
    onChange={onChange}
    required
  />
);

export default Amount;

