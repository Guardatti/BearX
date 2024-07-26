import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px;
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const Img = styled.div`
    background-color: #FFFFFF;  
    img{
        width: 100px;
        height: 100px;
        object-fit: contain;
    }
`

export const Title = styled.div`
    text-align: center;
    width: 40%;
    span{
        color: #FFFFFF;
    }
`

export const Price = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 5px;
    span{
        color: #FFFFFF;
    }
`