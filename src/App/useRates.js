import { useState, useEffect } from "react";
import { key } from "./keytoAPI";

export const useRates = () => {
  const [appState, setAppState] = useState({
    state: "",
  });

  useEffect(() => {
    setAppState({
      state: "loading",
    });
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/${key}/latest/PLN`
        );
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const ratesData = await response.json();
        setAppState({
          currencyRates: ratesData.conversion_rates,
          date: ratesData.time_last_update_utc,
          state: "sucess",
        });
      } catch (error) {
        setAppState({
          state: "error",
        });
        console.error("Something bad happened!", error);
      }
    };
    setTimeout(fetchData, 1700);
  }, []);

  return appState;
};
