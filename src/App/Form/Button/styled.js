import styled from "styled-components";

export const Exchange = styled.button`
    font-weight: 800;
    padding: 10px;
    width: 410px;
    border: 3px solid teal;
    background-color: hsl(180, 100%, 33%);

    &:hover{
        background-color: hsl(180, 100%, 36%);
        border: 3px solid black;
        cursor: pointer;
    }

    @media(max-width:530px) {
        width: 100%;
    }
`;
