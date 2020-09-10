import { useState, useEffect } from "react";

export const useRates = () => {
    const [appState, setAppState] = useState(
        {
            state:"",
        });

    useEffect(() => {
        setAppState({
            state:"loading",
        })
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.exchangeratesapi.io/latest?base=PLN");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const ratesData = await response.json();
                setAppState({
                    currencyRates:ratesData.rates,
                    date:ratesData.date,
                    state:"sucess",
                })
            } catch (error) {
                setAppState({
                    state:"error",
                })
                console.error("Something bad happened!", error);
            }
        };
        setTimeout(fetchData, 1700);
    }, []);
    
    return appState;
};
