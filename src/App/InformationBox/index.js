import React from "react";
import { BoxWrapper, Information } from "./styled";

const InformationBox = ({ state }) => {
    if (state === "loading") {
        return (
            <BoxWrapper loading={state}>
                <Information>
                    Loading... We connecting with server to dwonload current currensies rates. Thank you for patient! :)
                </Information>
            </BoxWrapper>
        )}
        return (
            <BoxWrapper error={state === "error" ? "error" : ""}>
                <Information>
                   Ups... We have some problem... :( Please check your network connection or contact with website support: mail@ggmail.com
                </Information>
            </BoxWrapper>
        )
};

export default InformationBox;