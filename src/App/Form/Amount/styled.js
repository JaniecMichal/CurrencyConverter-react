import styled from "styled-components";

export const Input = styled.input`
    margin-left: 30px;
    padding: 10px;
    width: 200px;
    border: 2px solid teal;

    @media(max-width:530px) {
        width: 100%;
        margin-top: 10px;
        margin-left: 0px;
    }
`;