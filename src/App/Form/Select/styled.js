import styled, { css } from "styled-components";

export const SelectContainer = styled.select`
    margin-left: 89px;
    padding: 10px;
    width: 200px;
    border: 2px solid teal;

    ${({ first }) => first && css`
        margin-left: 67px;
    `}

    @media(max-width:530px) {
        width: 100%;
        margin-top: 10px;
        margin-left: 0px;
    }
`;