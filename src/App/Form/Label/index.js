import React from "react";
import "./style.css";

const Label = ({ title, inputName }) => (
  <label className="form__label" htmlFor={inputName}>{title}</label>
);

export default Label;