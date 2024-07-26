import React from 'react'
import { Cancel, Check, Container, ContainerIcon, ContainerText, ContainerTitle, Pending } from './CardsStyled'
import { useSelector } from 'react-redux'
import Loader from '../UI/Loader/Loader'
import { formatPrice } from '../../utils/formatPrice'
import { formatDate } from '../../utils/formatDate'
import { useNavigate } from 'react-router-dom'

const Cards = () => {

  const {orders, loading, error} = useSelector(state => state.orders)

  if (loading && !orders) {
    return <Loader />
  }

  if (error) {
    return <h2 style={{textAlign: 'center'}}>{error}</h2>
  }

  const navigate = useNavigate()

  return (
    <>
        {
          orders?.length ? (
            orders.map((order) => {
              return (
              <Container key={order._id} onClick={()=> navigate(`/summary/${order._id}`)}>
                <ContainerText>
                  <span>ID: #{order._id.slice(0, 12)}</span>
                  <span>Date: {formatDate(order.createdAt)}</span>
                  <span>Price: {formatPrice(order.price)}</span>
                </ContainerText>
                <ContainerIcon>
                  {
                    order.status === 'pending' && (
                      <Pending />
                    )
                  }
                  {
                    order.status === 'check' && (
                      <Check />
                    )
                  }
                  {
                    order.status === 'cancel' && (
                      <Cancel />
                    )
                  }
                </ContainerIcon>
              </Container>
              )
            })
          ) : (
            <ContainerTitle>
              <h2>¡Place your first order!</h2>
            </ContainerTitle>
          )
        }
    </>
  )
}

export default Cards
