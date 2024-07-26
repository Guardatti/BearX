import React from 'react'
import { Arrow, Container, ContainerAll, ContainerIcons, ContainerSpans, ContainerUser, IconLogin, IconOrders, IconRegister, IconUser, SettingsIcon } from './ModalUserStyled'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from '../../redux/user/userSlice'
import { clearOrders } from '../../redux/orders/ordersSlice'


const ModalUser = ({stateUser, stateSetUser}) => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.user.currentUser)

  return (
    <ContainerAll $stateUser={stateUser}>
        <Arrow />
        {
          currentUser ?
          <ContainerUser>
            <ContainerIcons>
              <IconUser/>
              <IconOrders/>
              <SettingsIcon/>
              <IconLogin/>
            </ContainerIcons>
            <ContainerSpans>
              <span onClick={() => {stateSetUser(!stateUser) ; navigate('/profile')}}>Profile</span>
              <span onClick={() => {stateSetUser(!stateUser) ; navigate('/myorders')}}>My orders</span>
              <span onClick={() => {stateSetUser(!stateUser) ; navigate('/')}}>Settings</span>
              <span onClick={() => {dispatch(setCurrentUser(null)) ; dispatch(clearOrders()) ;stateSetUser(!stateUser) ; navigate('/login')}}>Log out</span>
            </ContainerSpans>
          </ContainerUser>
          :
          <Container>
            <ContainerIcons>
              <IconLogin/>
              <IconRegister/>
            </ContainerIcons>
            <ContainerSpans>
              <span onClick={() => {stateSetUser(!stateUser) ; navigate('/login')}}>Login</span>
              <span onClick={() => {stateSetUser(!stateUser) ; navigate('/register')}}>Register</span>
            </ContainerSpans>
          </Container>
        }
    </ContainerAll>
  )
}

export default ModalUser
