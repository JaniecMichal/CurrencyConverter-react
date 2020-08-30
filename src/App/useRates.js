import { useState, useEffect } from "react";

export const useRates = () => {
    const [appState, setAppState] = useState(
        {
            loading: false,
            errorState: false,
            currencyRates: {},
            date: ""
        });

    const saveRates = (data) => {
        setAppState({
            ...appState,
            currencyRates: data.rates,
            date: data.date
        })
    };

    const setLoading = () => {
        setAppState({
            ...appState,
            loading: !appState.loading
        })
    };

    const setError = () => {
        setAppState({
            ...appState,
            loading: true,
            errorState: true
        })
    };

    useEffect(() => {
        setTimeout(() => {
            fetch("https://api.exchangeratesapi.io/latest?base=PLN")
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.satusText);
                    }
                    return response;
                })
                .then(response => response.json())
                .then(data => saveRates(data))
                .then(setLoading())
                .catch(setError())
        }, 2500);
        setLoading();
    }, [])

    return appState;
};