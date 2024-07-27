import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../../axios/axiosOrders'
import { useLocation, useParams } from 'react-router-dom'
import { Container, ContainerProducts, ContainerText, ContainerTotal, ShippingCost, Subtotal, Total } from './SummaryStyled'
import SummaryCard from '../../components/SummaryCard/SummaryCard'
import { formatPrice } from '../../utils/formatPrice'

const Summary = () => {

  const dispatch = useDispatch()

  const {currentUser} = useSelector(state => state.user) 

  const {OrderID} = useParams()

  const [visitedOrder, setVisitedOrder] = useState(null)
  
  const orders = useSelector(state => state.orders.orders)

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useEffect(() => {
    if (!orders) {
      getOrders(dispatch, currentUser)
    }

    setVisitedOrder(orders?.find((order) => order._id === OrderID))
    
  },[OrderID, currentUser?.token, orders, dispatch])

  
  return (
    <Container>
      <ContainerText>
        <h2>Summary</h2>
      </ContainerText>
      <ContainerProducts>
        {
          visitedOrder?.items.map((item) => {
            return <SummaryCard {...item} key={item._id}/>
          })
        }
        <ContainerTotal>
          <Subtotal>
            <span>Subtotal</span>
            <span>{formatPrice(visitedOrder?.price)}</span>
          </Subtotal>
          <ShippingCost>
            <span>Shipping Cost</span>
            <span>{formatPrice(visitedOrder?.shippingCost)}</span>
          </ShippingCost>
          <Total>
            <span>Total</span>
            <span>{formatPrice(visitedOrder?.total)}</span>
          </Total>
        </ContainerTotal>
      </ContainerProducts>
    </Container>
  )
}

export default Summary
