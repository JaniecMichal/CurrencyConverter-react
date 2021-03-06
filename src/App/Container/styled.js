import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 800px;
    margin: 20px auto;
    display: grid;
    grid-template-rows: 100px 1fr 100px 80px;
    grid-gap: 20px;

    @media(max-width:670px) {
        margin: 20px auto;
        grid-template-rows: 200px 1fr 100px 130px;
    }
`;