import styled from 'styled-components'

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