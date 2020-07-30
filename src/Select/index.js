import React from "react";
import "./style.css";

const Select = ({ modifierClass, selectName }) => (
    <select className={`form__select ${modifierClass}`} id={selectName}>
        <option></option>
        <option>EUR</option>
        <option>USD</option>
        <option>CHF</option>
        <option>GBP</option>
        <option>PLN</option>
    </select>
);

export default Select;