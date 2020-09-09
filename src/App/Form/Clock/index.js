import React from "react";
import {useClock} from "./useClock";
import { ClockContainer } from "./styled";

const Clock = () => {
    const [newDate, setDateString] = useClock();

    return (
        <ClockContainer>Today is {setDateString(newDate)}  </ClockContainer>
    )
};

export default Clock;