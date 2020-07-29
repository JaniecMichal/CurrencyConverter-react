import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Currency coverter input data</legend>
            <p className="flexbox">
                <label className="form__label" for="select">From currency:</label>
                <select className="form__select form__select--firstSelect" id="select">
                    <option></option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>CHF</option>
                    <option>GBP</option>
                    <option>PLN</option>
                </select>
            </p>
            <p className="flexbox">
                <label className="form__label" for="select">To currency:</label>
                <select className="form__select" id="select">
                    <option></option>
                    <option>EUR</option>
                    <option>USD</option>
                    <option>CHF</option>
                    <option>GBP</option>
                    <option>PLN</option>
                </select>
            </p>
            <p className="flexbox">
                <label className="form__label" for="amount">Amount to convert:</label>
                <input type="number" className="form__input" min="1" step="0.01" />
            </p>
            <button className="form__button">Exchange!</button>
        </fieldset>
    </form>
)

export default Form;