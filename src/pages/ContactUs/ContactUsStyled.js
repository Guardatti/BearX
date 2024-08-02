import styled from "styled-components";
import { Form } from "formik";

export const ContainerForm = styled.div`
    width: 100%;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerFormText = styled.div`
    width: 1100px;
    padding: 50px 0px 50px 0px;
    h2{
        color: #FFFFFF;
        font-size: 38px;
        font-weight: 300;
        text-align: left;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
        h2{
            text-align: center;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 500px;
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 700px;
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 900px;
    }
`

export const ContainerMap = styled.div`
    width: 1100px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
        iframe{
            width: 300px;
        }
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 500px;
        iframe{
            width: 500px;
        }
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 700px;
        iframe{
            width: 700px;
        }
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 900px;
        iframe{
            width: 900px;
        }
    }
`

export const ContainerFormStyled = styled(Form)`
    width: 1100px;
    padding: 30px 0px 30px 0px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 500px;
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 700px;
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 900px;
    }
`

export const ContainerButton = styled.div`
    width: 1100px;
    padding: 20px 0px 30px 0px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (min-width: 576px) and (max-width: 767px){
        width: 500px;
    }

    @media (min-width: 768px) and (max-width: 991px){
        width: 700px;
    }

    @media (min-width: 992px) and (max-width: 1199px){
        width: 900px;
    }
`

export const ButtonStyled = styled.button`
    background-color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    width: 300px;
    height: 50px;
    border-radius: 5px;
`

export const Loading = styled.div`
    background-color: #FFFFFF;
    width: 300px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #FFFFFF;
    text-align: center;
    span{
        color: black;
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