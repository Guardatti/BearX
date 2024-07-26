import styled from 'styled-components'
import { Form } from "formik";

export const ContainerCheckout = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #101010;
    @media (min-width: 320px) and (max-width: 1199px){
        flex-direction: column;
    }
`

export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    padding: 30px 0px 30px 0px;
    gap: 30px;
    h2{
        color: #FFFFFF;
        font-size: 22px;
        font-weight: 600;
        border-bottom: 1px solid #FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }

    @media (min-width: 320px) and (max-width: 1200px){
        padding: 30px 0px 95px 0px;
    }
`

export const FormStyled = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 500px;
    height: 684px;
    gap: 15px;
    @media (min-width: 320px) and (max-width: 1199px){
        width: 300px;
        height: 444px;
    }
`

export const Button = styled.button`
    background-color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    width: 300px;
    min-height: 50px;
    border-radius: 5px;
`

export const Loading = styled.div`
    background-color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    width: 300px;
    min-height: 50px;
    border-radius: 5px;
    text-align: center;
    span{
        color: #000000;
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

export const ContainerOrders = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    padding: 30px 0px 30px 0px;
    gap: 30px;
    h2{
        color: #FFFFFF;
        font-size: 22px;
        font-weight: 600;
        border-bottom: 1px solid #FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
`

export const ContainerProducts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    width: 500px;
    height: 500px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    p{
        color: #FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
`

export const EmptyCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 700px;
`

export const ContainerSubTotalShippingCost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
    @media (min-width: 576px) and (max-width: 767px){
        width: 400px;
    }
`

export const SubTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    p{
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 300;
    }
    span{
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 300;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
    @media (min-width: 576px) and (max-width: 767px){
        width: 400px;
    }
`

export const Shippingcost = styled(SubTotal)`
`

export const Divisor = styled.span`
    background-color: white;
    width: 300px;
    min-height: 1px;
`

export const Total = styled(SubTotal)`
`