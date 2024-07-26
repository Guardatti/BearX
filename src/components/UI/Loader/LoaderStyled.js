import styled from "styled-components";

export const Loading = styled.div`
    width: 100px;
    height: 100px;
    border: 5px solid #FFFFFF;
    border-bottom: solid transparent;
    border-radius: 100%;
    animation: loading infinite 1s linear;
    @keyframes loading {
        0%{
            transform: rotate(0deg);
        }

        100%{
            transform: rotate(360deg);
        }
    };
`