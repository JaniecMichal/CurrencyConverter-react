import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
    text-align: center;

    ${({ loading }) => loading && css`
        display:none;
    `}
`;

export const Fieldset = styled.fieldset`
    padding: 30px;
    border: 2px solid teal;
    background-color: #eee;
`;

export const Legend = styled.legend`
    background-color: teal;
    padding: 10px;
    font-weight: 800;
`;

export const Flexbox = styled.p`
    @media(max-width:530px) {
        display: flex;
        flex-flow: column;
    }
`;

export const InformParagraph = styled(Flexbox)`
    font-weight: 700;
    margin-top:30px;
`;

