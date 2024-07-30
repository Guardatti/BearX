import styled from "styled-components";


export const ContainerMenuCart = styled.div`
    height: calc(100vh - 80px);
    width: 600px;
    background-color: #101010;
    position: absolute;
    top: 100%;
    right: 0px;
    border: 1px solid #FFFFFF;
    transition: all 0.5s ease;
    transform: ${({$stateCart}) => $stateCart ? 'translateX(0%)' : 'translateX(150%)'};
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 50px 0px;
    overflow-y: scroll;
    h2{
        color: #FFFFFF;
        font-size: 22px;
        font-weight: 600;
        border-bottom: 1px solid #FFFFFF;
    }
    p{
        color: #FFFFFF;
        font-weight: 300;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
    }
    @media (min-width: 576px) and (max-width: 767px){
        width: 500px;
    }
`

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
    @media (min-width: 576px) and (max-width: 767px){
        width: 400px;
    }
`

export const Img = styled.div`
    width: 100px;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    span{
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 300;
        text-align: center;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 100px;
    }
`

export const Handler = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100px;
    span{
        color: #FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 80px;
    }
`

export const BtnLess = styled.button`
    width: 25px;
    background-color: #FFFFFF;
    color: #101010;
`

export const BtnMore = styled(BtnLess)`
`

export const ContainerSubTotalShippingCost = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 500px;
    gap: 10px;
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

export const ClearCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
    p{
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

export const BtnCheckOut = styled.button`
    background-color: #FFFFFF;
    width: 500px;
    min-height: 50px;
    font-size: 16px;
    font-weight: 600;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
    @media (min-width: 576px) and (max-width: 767px){
        width: 400px;
    }
`

export const BtnClearCart = styled(BtnCheckOut)`
`