import styled, { css } from "styled-components";

export const ResultWrapper = styled.section`
    display:flex;
    flex-flow:row wrap;
    padding: 10px;
    max-width: 800px;
    background-color: teal;
    font-weight: 800;

    ${({ notSucess }) => notSucess && css`
        display:none;
    `}
`;

export const ResultHeader = styled.h2`
    font-size: 24px;
`;

export const ResultContent = styled.span`
    max-width:800px;
    margin-left:5px;
    text-decoration: underline;
`;