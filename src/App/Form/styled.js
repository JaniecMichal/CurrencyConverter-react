import styled from "styled-components";

export const FormWrapper = styled.form`
    text-align: center;
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

