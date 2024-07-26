import React from 'react'
import { Container, Content, Img, Price, Title } from './SummaryCardStyled'
import { formatPrice } from '../../utils/formatPrice'

const SummaryCard = ({img, price, quantity, title}) => {
  return (
    <Container>
        <Content>
            <Img>
                <img src={img}/>
            </Img>
            <Title>
                <span>{title}</span>
            </Title>
            <Price>
                <span>Qty: {quantity}</span>
                <span>{formatPrice(price * quantity)}</span>
            </Price>
        </Content>
    </Container>
  )
}

export default SummaryCard
