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

export const ContainerCards = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
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

export const Button = styled.button`
    background-color: #FFFFFF;
    font-weight: 600;
    font-size: 16px;
    width: 300px;
    height: 50px;
    border-radius: 5px;
`