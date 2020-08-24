import React from "react";
import {useClock} from "./useClock";
import { ClockContainer } from "./styled";

const Clock = () => {
    const [newDate, setDateString] = useClock();

    return (
        <ClockContainer>Dzisiaj jest {setDateString(newDate)}  </ClockContainer>
    )
};

export default Clock;