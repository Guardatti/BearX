import styled from 'styled-components'
import { FaShopify } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaOpencart } from "react-icons/fa";
import { HiLogout } from "react-icons/hi";


export const Container = styled.div`
    width: 100%;
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 320px) and (max-width: 991px){
        flex-direction: column;
    }
`

export const ContainerProfile = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: 90px 0px 50px 0px;
    gap: 15px;
    h2{
        font-size: 22px;
        color: #FFFFFF;
    }
    span{
        font-size: 18px;
        color: #FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 576px){
        width: 100%;
    }
`

export const ContainerMenu = styled.div`
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 90px 0px 50px 0px;
    @media (min-width: 320px) and (max-width: 991px){
        width: 100%;
        justify-content: center;
        padding: 30px 0px 50px 0px;
    }
`

export const ContainerOptions = styled.div`
    width: 40%;
    height: 150px;
    background-color: #0C0C0C;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border-radius: 5px;
    -webkit-box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    text-align: center;
    cursor: pointer;
    &:hover{
        background-color: #151515;
    }
    span{
        font-size: 18px;
        color: #FFFFFF;
    }
    @media (min-width: 320px) and (max-width: 991px){
        width: 50%;
    }
`

export const IconOrders = styled(FaShopify)`
    font-size: 30px;
    color: #FFFFFF;
`

export const IconSettings = styled(IoMdSettings)`
    font-size: 30px;
    color: #FFFFFF;
`

export const IconCart = styled(FaOpencart)`
    font-size: 30px;
    color: #FFFFFF;
`

export const IconLogout = styled(HiLogout)`
    font-size: 30px;
    color: #FFFFFF;
`