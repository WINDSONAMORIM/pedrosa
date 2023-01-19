import styled from "styled-components";

export const ContainerForm = styled.section`
    width: 100%;
    height: 100%;
    display: flex;    
    flex-direction: column;
    justify-content: center;
    padding: 20px;

    @media (min-height: 600px) {
        justify-content: flex-start;
    }

    @media (max-height: 900px) {
        justify-content: center;
    }
`