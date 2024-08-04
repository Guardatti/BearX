import styled from "styled-components";
import { TbLogin2 } from "react-icons/tb";
import { IoMdPersonAdd } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { SlUser } from "react-icons/sl";


export const ContainerAll = styled.div`
    position: absolute;
    top: 80px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 2;
    transition: all 0.5s ease;
    transform: ${({$stateUser}) => $stateUser ? 'translateX(0%)' : 'translateX(150%)'};
`

export const Arrow = styled.div`
    transform: translateX(26px);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #FFFFFF;
    @media (min-width: 320px) and (max-width: 991px){
        transform: translateX(41px);
    }
`

export const Container = styled.div`
    width: 200px;
    height: 100px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    border-radius: 10px 0px 0px 10px;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: #101010;
        cursor: pointer;
        font-size: 15px;
    }
`

export const IconLogin = styled(TbLogin2)`
    color: #101010;
    font-size: 16px;
`

export const IconRegister = styled(IoMdPersonAdd)`
    color: #101010;
    font-size: 16px;
`
export const SettingsIcon = styled(CiSettings)`
    color: #101010;
    font-size: 16px;
`

export const IconOrders = styled(BsHandbag)`
    color: #101010;
    font-size: 16px;
`

export const IconUser = styled(SlUser)`
    color: #101010;
    font-size: 16px;
`

export const ContainerUser = styled.div`
    width: 200px;
    height: 150px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 10px;
    padding-left: 10px;
    border-radius: 10px 0px 0px 10px;
    span{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: #101010;
        cursor: pointer;
        font-size: 15px;
    }
`

export const ContainerIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 15px;
`

export const ContainerSpans = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 8px;
`