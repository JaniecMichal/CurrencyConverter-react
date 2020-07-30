import React from "react";
import "./style.css";
import Label from "../Label";
import Select from "../Select";
import Amount from "../Amount";
import Button from "../Button";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Currency coverter input data</legend>
            <p className="flexbox">
                <Label title="From currency:" inputName="fromCurrency" />
                <Select modifierClass="form__select--firstSelect" selectName="fromCurrency" />
            </p>
            <p className="flexbox">
                <Label title="To currency:" inputName="toCurrency" />
                <Select selectName="toCurrency" />
            </p>
            <p className="flexbox">
                <Label title="Amount to convert:" inputName="amount" />
                <Amount />
            </p>
            <Button />
        </fieldset>
    </form>
)

export default Form;