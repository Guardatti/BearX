import styled from "styled-components";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";


export const Container = styled.div`
    width: 500px;
    height: 150px;
    display: flex;
    justify-content: start;
    align-items: center;
    background-color: #0C0C0C;
    padding-left: 1rem;
    border-radius: 5px;
    cursor: pointer;
    -webkit-box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 7px 8px 0px rgba(0,0,0,0.75);
    @media (min-width: 320px) and (max-width: 575px){
        width: 300px;
    }
`

export const ContainerText = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 15px;
    width: 75%;
    span{
        color: #FFFFFF;
    }
`

export const ContainerIcon = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Pending = styled(IoTimeOutline)`
    color: #FF8B00;
    font-size: 24px;
`

export const Check = styled(CiCircleCheck)`
    color: #35C840;
    font-size: 24px;
`

export const Cancel = styled(MdOutlineCancel)`
    color: #DF2121;
    font-size: 24px;
`

export const ContainerTitle = styled.div`
    width: 300px;
    text-align: center;
    h2{
        color: #FFFFFF;
        font-size: 1.2rem;
    }
`