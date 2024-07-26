import styled from "styled-components";
import { motion } from 'framer-motion';

export const ContainerTplink = styled.div`
    width: 100%;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ContainerCategory = styled.div`
    position: fixed;
    top: 80px;
    background-color: #101010;
    padding: 30px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    z-index: 1;
    h2{
        color: #FFFFFF; 
    }
    select{
        width: 75%;
        background-color: #101010;
        border: 1px solid #FFFFFF;
        color: #FFFFFF;
        font-size: 14px;
        option{
            font-size: 14px;
        }
    }
`

export const ContainerProducts = styled.div`
    padding: 90px 0px 30px 0px;
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const Container = styled.div`
    background-color: #FFFFFF;
    width: 25%;
    height: 400px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #DFDFDF;
    img{
        width: 70%;
        height: 200px;
        object-fit: contain;
    }
    @media (min-width: 320px) and (max-width: 575px){
        width: 100%;
    }

    @media (min-width: 576px) and (max-width: 991px){
        width: 50%;
    }
    @media (min-width: 992px) and (max-width: 1199px){
        width: 33.33%;
    }
`

export const ContainerInfo = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ProductTop = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 15px;
        font-weight: 400;
        text-align: center;

    }
`

export const ProductMid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    label{
        font-size: 15px;
    }
`

export const ProductBot = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
`

export const BuyButton = styled(motion.button)`
    padding: 10px 40px 10px 40px;
    background-color: #101010;
    color: #FFFFFF;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover{
        background-color: #505050;
        transition: all 0.2s ease;
        }
`