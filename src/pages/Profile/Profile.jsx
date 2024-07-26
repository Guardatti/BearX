import React, { useEffect } from 'react'
import { Container, ContainerMenu, ContainerOptions, ContainerProfile, IconCart, IconLogout, IconOrders, IconSettings } from './ProfileStyled'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentUser } from '../../redux/user/userSlice'
import { clearOrders } from '../../redux/orders/ordersSlice'

const Profile = () => {
  
    const currentUser = useSelector(state => state.user.currentUser)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [location])

    return (
    <Container>
        <ContainerProfile>
            <img src="./favicon.png" />
            <h2>Welcome to BearX</h2>
            <span>{currentUser.nombre}</span>
        </ContainerProfile>
        <ContainerMenu>
            <ContainerOptions onClick={() => navigate('/')}>
                <IconCart />
                <span>Go shopping</span>
            </ContainerOptions>
            <ContainerOptions onClick={() => navigate('/myorders')}>
                <IconOrders />
                <span>My orders</span>
            </ContainerOptions>
            <ContainerOptions>
                <IconSettings />
                <span>Settings</span>
            </ContainerOptions >
            <ContainerOptions onClick={() => {dispatch(setCurrentUser(null)) ; dispatch(clearOrders()) ;navigate('/login')}}>
                <IconLogout />
                <span>Log out</span>
            </ContainerOptions>
        </ContainerMenu>
    </Container>
  )
}

export default Profile
