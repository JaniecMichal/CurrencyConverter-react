import React, { useState, useEffect } from "react";
import {ClockContainer} from "./styled";

const Clock = () => {
    const [newDate, setNewDate] = useState(new Date());

    useEffect(() => {
        const intervalId =
            setInterval(
                () => {
                    setNewDate(new Date());
                }, 1000);
        return () => {
            clearInterval(intervalId)
        }
    }, []);

    const setDateString = (date) => {
       return (date.toLocaleString(undefined, {
            weekday: "long",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            day: "numeric",
            month: "long",
            year:"numeric"
        }));
    };


    return (
        <ClockContainer>Dzisiaj jest {setDateString(newDate)}  </ClockContainer>
    )
};

export default Clock;