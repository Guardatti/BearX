import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #101010;
    padding: 50px 0px 50px 0px;
    gap: 30px;
`

export const ContainerText = styled.div`
    text-align: center;
    padding-bottom: 30px;
    h2{
        font-size: 36px;
        color: #FFFFFF;
        font-weight: 500;
        border-bottom: 1px solid #FFFFFF;
    }
`

export const ContainerProducts = styled.div`
    width: 1000px;
    background-color: #0C0C0C;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    -webkit-box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
        border-radius: 0px;
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

export const ContainerTotal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    border-top: 1px solid #FFFFFF;
    padding: 15px;
`

export const Subtotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span{
        color: #FFFFFF;
        font-weight: 300;
    }
`

export const ShippingCost = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span{
        color: #FFFFFF;
        font-weight: 300;
    }
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    span{
        color: #FFFFFF;
        font-weight: 500;
    }
`