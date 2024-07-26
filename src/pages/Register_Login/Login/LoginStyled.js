import styled from "styled-components";
import { Form } from "formik";
import { Link } from "react-router-dom";

export const ContainerLogin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-image: url('./backgroundgamer.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 800px;
    height: 800px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
    }

    @media (min-width: 576px) and (max-width: 991px){
        width: 500px;
    }
`


export const FormStyled = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #FFFFFF;
    backdrop-filter: blur(8px);
    width: 500px;
    height: 500px;
    border-radius: 10px;
    padding: 30px 0px 30px 0px;
    gap: 15px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
        border-radius: 0px;
        border-right: none;
        border-left: none;
    }
`

export const ContainerTitle = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    h2{
        color: #FFFFFF;
        font-size: 24px;
        font-weight: 300;
    }
`

export const ContainerButton = styled.div`
    padding: 30px 0px;
    height: 100px;
`

export const Button = styled.button`
    color: #FFFFFF;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
`

export const Loading = styled.div`
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
    text-align: center;
    span{
        color: #FFFFFF;
        animation: loading  2s infinite;
        font-size: 25px;
    }
    span:nth-child(1) {
        animation-delay: 0s;
    }

    span:nth-child(2) {
        animation-delay: 0.5s;
    }

    span:nth-child(3) {
        animation-delay: 1s;
    }
    @keyframes loading {
        0%, 20%, 80%, 100% {
            opacity: 0;
        }
        40%, 60% {
            opacity: 1;
        }
    }
`

export const Register = styled(Link)`
    color: #3CBD79;
`