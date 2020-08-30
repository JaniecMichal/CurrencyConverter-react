
export const useRate = (fromCurrencyName, toCurrencyName, currencyRates) => {
    
    const fromCurrency = currencyRates[fromCurrencyName];
    const toCurrency = currencyRates[toCurrencyName]
    const currentRate = (toCurrency / fromCurrency);

    return currentRate;
};