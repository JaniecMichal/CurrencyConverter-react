import styled, { css } from "styled-components";

export const BoxWrapper = styled.div`
    display:none;
    text-align: center;
    padding: 30px;
    border: 5px solid teal;
    background-color: #eee;

    ${({ loading }) => loading && css`
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content: center;
    `}

`;

export const Information = styled.h2`
    color: teal;
    font-size:35px;
    font-style: italic;
`;

