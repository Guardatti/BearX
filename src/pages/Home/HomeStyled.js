import styled from "styled-components";

export const ContainerHome = styled.section`
    width: 100%;
`

export const ContainerSlider = styled.div`
    height: 500px;
    @media (min-width: 320px) and (max-width: 767px){
        height: 200px;
    }
`

export const ContainerBrands = styled.div`
    height: 400px;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    color: #FFFFFF;
    h2{
        font-size: 25px;
        font-weight: 300;
    }
`

export const ContainerSliderBrands = styled.div`
    background-color: #101010;
    height: 250px;
    width: 1100px;
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
        height: 150px;
    }
    @media (min-width: 576px) and (max-width: 767px){
        width: 570px;
    }
    @media (min-width: 768px) and (max-width: 991px){
        width: 750px;
    }
    @media (min-width: 992px) and (max-width: 1199px){
        width: 950px;
    }
`

export const ContainerCategories = styled.div`
    height: 300px;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    @media (min-width: 320px) and (max-width: 767px){
        flex-direction: column;
        height: 800px;
        gap: 35px;
    }
`

export const CategoryStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 250px;
    height: 150px;
    opacity: 0.5;
    transition: all 0.4s ease;
    &:hover{
        opacity: 1;
        transition: all 0.4s ease;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        width: 170px;
    }
`

export const ContainerImgCategory = styled.div`
    width: 250px;
    height: 150px;
    @media (min-width: 768px) and (max-width: 1199px) {
        width: 170px;
    }
`

export const ContainerTextCategory = styled.div`
    font-size: 16px;
    font-weight: 300;
    color: #101010;
    background-color: #FFFFFF;
    width: 250px;
    text-align: center;
    @media (min-width: 768px) and (max-width: 1199px) {
        width: 170px;
    }
`