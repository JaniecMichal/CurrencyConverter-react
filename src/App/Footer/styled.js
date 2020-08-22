import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: #eee;
    max-width: 100%;
    color: black;
    padding: 10px;
    text-align: center;
    border: 2px solid teal;
`;

export const FooterLink = styled.a`
    color: black;
    text-decoration: none;

    &:hover{
        color: teal;
    }
`;