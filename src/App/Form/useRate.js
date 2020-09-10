
export const useRate = (fromCurrencyName, toCurrencyName, currencyRates, state) => {

    const fromCurrency = () => {
        if (state !== "sucess") {
            return 1;
        }
        return currencyRates[fromCurrencyName]
    };

    const toCurrency = () => {
        if (state !== "sucess") {
            return 1;
        }
        return currencyRates[toCurrencyName]
    };
    const currentRate = (toCurrency() / fromCurrency());

    return currentRate;
};