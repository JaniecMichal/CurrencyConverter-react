import React from "react";
import {LabelContainer} from "./styled";

const Label = ({ title, inputName }) => (
  <LabelContainer htmlFor={inputName}>{title}</LabelContainer>
);

export default Label;