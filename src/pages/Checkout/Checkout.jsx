import React, { useEffect, useState } from 'react'
import { ContainerCheckout, ContainerForm, ContainerOrders, ContainerProducts, EmptyCart, FormStyled, ContainerSubTotalShippingCost, SubTotal, Shippingcost, Divisor, Total, Button, Loading} from './CheckoutStyled'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import Products from './Products/Products'
import { formatPrice }from '../../utils/formatPrice'
import FormInput from '../../components/UI/FormInputCheckout/FormInput'
import { InitialValueCheckout } from '../../components/formik/initialValues'
import { validationSchemaCheckout } from '../../components/formik/validationSchema'
import { useLocation, useNavigate } from 'react-router-dom'
import { clearCart } from '../../redux/cart/cartSlice'
import { createOrder } from '../../axios/axiosOrders'


const MyOrders = () => {

  const {cartItems, shippingCost} = useSelector(state => state.cart)

  const location = useLocation()

  const price = cartItems.reduce((acc, item) => {
    return (acc + item.price * item.quantity)
  }, 0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const dispatch = useDispatch()

  const {currentUser} = useSelector(state => state.user)

  const navigate = useNavigate()

  const [isLoading, setLoading] = useState(false)

  return (
    <ContainerCheckout>
      <ContainerOrders>
        <h2>My Orders</h2>
        <ContainerProducts>
        {
            cartItems.length ? (
              cartItems.map((items) => {
                return <Products {...items} key={items.id} />
              })
            ) : (<EmptyCart><p>Your cart is currently empty</p></EmptyCart>)
          }
        </ContainerProducts>
        <ContainerSubTotalShippingCost>
          <SubTotal>
            <p>Subtotal</p>
            <span>{formatPrice(price)}</span>
          </SubTotal>
          <Shippingcost>
            <p>Shipping Cost</p>
            <span>{formatPrice(shippingCost)}</span>
          </Shippingcost>
        </ContainerSubTotalShippingCost>
        <Divisor />
        <Total>
          <p>Total</p>
          <span>{formatPrice(price + shippingCost)}</span>
        </Total>
      </ContainerOrders>
      <ContainerForm>
        <h2>Enter your details</h2>
        <Formik
          initialValues={InitialValueCheckout}
          validationSchema={validationSchemaCheckout}
          onSubmit={async (values) => {

            setLoading(true)

            const orderData = {items: cartItems, price, shippingCost, total: price + shippingCost, shippingDetails: {...values}}
          
            try {
              
              await createOrder(orderData, dispatch, currentUser);
              
              navigate('/myorders')
              dispatch(clearCart())

            } catch (error) {
              alert('Error creating order')
            }

            setLoading(false)

          }}
        >
          <FormStyled>
            <FormInput
              name="name"
              label="Name"
              type="text"
            />
            <FormInput
              name="cellphone"
              label="Cellphone"
              type="number"
            />
            <FormInput
              name="location"
              label="Location"
              type="text"
            />
            <FormInput
              name="address"
              label="Address"
              type="text"
            />
            {isLoading ? 
              <Loading><span>.</span><span>.</span><span>.</span></Loading>
              :              
              <Button type='submit' disabled={!cartItems.length}>Pay now</Button>
            }
          </FormStyled>
        </Formik>
      </ContainerForm>
    </ContainerCheckout>
  )
}

export default MyOrders
