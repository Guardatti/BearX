import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";


export const ContainerFooter = styled.footer`
    background-color: #101010;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0px 50px 0px;
    border-top: 1px solid #FFFFFF;
`

export const NavFooter = styled.div`
    display: flex;
`

export const LinksNavFooter = styled(Link)`
    color: #FFFFFF;
    font-size: 15px;
    margin: 20px;
    text-align: center;
    @media (min-width: 320px) and (max-width: 575px){
        font-size: 12px;
    }
`

export const NavIcons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    label{
        color: #FFFFFF;
        font-size: 14px;
    }
    @media (min-width: 320px) and (max-width: 575px){
        label{
            font-size: 12px;
        }
    }
`

export const NavCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .cards{
        width: 38px;
        margin: 10px;
        padding: 20px 0px 20px 0px;
    }
`

export const Whatsapp = styled(FaWhatsapp)`
    font-size: 18px;
    margin: 5px;
    color: #2ABA17;
    @media (min-width: 320px) and (max-width: 575px){
        font-size: 16px;
    }
`

export const Email = styled(IoIosMail)`
    font-size: 18px;
    color: #FFFFFF;
    margin: 5px;
    @media (min-width: 320px) and (max-width: 575px){
        font-size: 16px;
    }
`

export const Location = styled(FaLocationDot)`
    font-size: 18px;
    color: #901010;
    margin: 5px;
    font-size: 16px;
`