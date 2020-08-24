import {currenciesRates} from "../CurrenciesRates";

export const useRate = (fromCurrencyName, toCurrencyName) => {
    const fromCurrency = currenciesRates.find(({ id }) => id === fromCurrencyName);
    const toCurrency = currenciesRates.find(({ id }) => id === toCurrencyName);
    const currentRate = (fromCurrency.rate / toCurrency.rate).toFixed(2);

    return currentRate;
};