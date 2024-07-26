import React, { useEffect } from 'react'
import { Button, Container, ContainerCards, ContainerText } from './MyOrdersStyled'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../axios/axiosOrders'
import { clearError, fetchOrdersFail } from '../../redux/orders/ordersSlice'
import { useNavigate } from 'react-router-dom'
import Cards from '../../components/MyOrders/Cards'

const MyOders = () => {

  const currentUser = useSelector(state => state.user.currentUser)

  const {orders, error} = useSelector(state => state.orders)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }

    if (!currentUser?.token) {
      dispatch(fetchOrdersFail())
    } else{
      error && dispatch(clearError())
    }

  }, [dispatch, currentUser?.token, orders, error])

  return (
    <Container>
        <ContainerText>
          <h2>My orders</h2>
        </ContainerText>
        <ContainerCards>
          <Cards />
        </ContainerCards>
        <Button onClick={() => navigate('/')}>Go shopping</Button>
    </Container>
  )
}

export default MyOders
