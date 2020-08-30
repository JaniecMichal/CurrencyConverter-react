import React from "react";
import { BoxWrapper, Information } from "./styled";

const InformationBox = ({ loading, errorState }) => {
    return (
        <BoxWrapper loading={loading === true ? "loading" : ""} >
            <Information>
                {
                    errorState === true
                        ?
                        "Ups... We have some problem... :( Please check your network connection or contact with website support: mail@ggmail.com"
                        :
                        "Loading... We connecting with server to dwonload current currensies rates. Thank you for patient! :)"
                }
            </Information>
        </BoxWrapper>
    )
};

export default InformationBox;