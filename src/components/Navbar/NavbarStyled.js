import styled from "styled-components";
import { FaShoppingCart } from 'react-icons/fa'
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";


export const ContainerNavbar = styled.div`
    width: 100%;
    height: 80px;
    background-color: #101010;
    border-bottom: 1px solid #FFFFFF;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`

export const MenuIcon = styled(FiMenu)`
    font-size: 24px;
    cursor: pointer;
    display: none;
    color: #FFFFFF;
    @media (min-width: 320px) and (max-width: 991px){
        display: flex;
        margin-left: 1rem;
    }
`

export const LogoLink = styled(Link)`
    font-family: 'Allerta Stencil';
    font-size: 52px;
    margin-left: 2rem;
    color: #FFFFFF;
    @media (min-width: 320px) and (max-width: 991px){
        margin-left: 1rem;
    }
`

export const ContainerLinks = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    overflow-y: auto;
    @media (min-width: 320px) and (max-width: 575px){
        gap: 0px;
        position: absolute;
        top: 100%;
        width: 100%;
        height: calc(100vh - 80px);
        flex-direction: column;
        justify-content: start;
        background-color: #101010;
        transition: all 0.5s ease;
        border-top: 1px solid white;
        transform: ${({$isMenuOpen}) => $isMenuOpen ? 'translateX(-150%)' : 'translateX(0%)'};
        z-index: 2;
    }
    @media (min-width: 576px) and (max-width: 991px){
        gap: 0px;
        position: absolute;
        top: 100%;
        width: 400px;
        height: calc(100vh - 80px);
        flex-direction: column;
        justify-content: start;
        background-color: #101010;
        transition: all 0.5s ease;
        border-top: 1px solid #FFFFFF;
        border-right: 1px solid #FFFFFF;
        transform: ${({$isMenuOpen}) => $isMenuOpen ? 'translateX(-150%)' : 'translateX(0%)'};
        z-index: 2;
    }
`

export const Links = styled(Link)`
    color: #FFFFFF;
    font-size: 17px;
    padding: 10px;
    @media (min-width: 320px) and (max-width: 991px){
        width: 100%;
        border-bottom: 1px solid #FFFFFF;
    }
    @media (min-width: 992px) {
        position: relative;
        &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`

export const DropdownMenu = styled.div`
    display: flex;
    max-height: 0;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    transition: all 0.4s ease-in-out;
    top: 100%;
    z-index: 2;
    @media (min-width: 320px) and (max-width: 991px){
        position: relative;
        width: 100%;
        top: 0%;
    }
`

export const ContainerDropdownMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 80px;
    &:hover{
        ${DropdownMenu} {
            max-height: 500px;
            transition: all 0.3s ease-in;
            border: 1px solid #FFFFFF;
            @media (min-width: 320px) and (max-width: 991px) {
                border: none;
            }
        }
    }
    @media (min-width: 320px) and (max-width: 991px){
        width: 100%;
        min-height: auto;
    }
`

export const CointainerDivProducts = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 17px;
    color: #FFFFFF;
    cursor: pointer;
    padding: 10px;
    @media (min-width: 320px) and (max-width: 991px){
        width: 100%;
        border-bottom: 1px solid #FFFFFF;
        
    }
    @media (min-width: 992px) {
        position: relative;
        &::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #FFFFFF;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }
`

export const LinksDropDown = styled(Link)`
    font-size: 15px;
    color: #FFFFFF;
    width: 100%;
    text-align: left;
    padding: 10px;
    background-color: #101010;
    &:hover{
        background-color: #1A1A1A;
    }
    @media (min-width: 320px) and (max-width: 991px){
        padding-left: 30px;
        border-bottom: 1px solid #FFFFFF;
    }
`

export const ContainerUserCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin-right: 2rem;
    @media (min-width: 320px) and (max-width: 991px){
        margin-right: 1rem;
    }
`

export const User = styled(FaUser)`
    font-size: 18px;
    cursor: pointer;
    color: #FFFFFF;
`

export const ContainerCart = styled.div`
    cursor: pointer;
`

export const Cart = styled(FaShoppingCart)`
    font-size: 18px;
    color: #FFFFFF;
`

export const ArrowDown = styled(MdKeyboardArrowDown)`
    font-size: 18px;
    color: #FFFFFF;
`

export const CartBubble = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-size: 12px;
    background-color: white;
    top: 20px;
    right: 18px;
    @media (min-width: 320px) and (max-width: 991px){
        right: 0px;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 80px;
    width: 100%;
    height: 100vh;
    opacity: 0.7;
    background-color: #000000;
    z-index: 1;
`