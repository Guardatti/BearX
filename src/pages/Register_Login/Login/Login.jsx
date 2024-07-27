import React, { useEffect, useState } from 'react'
import { Button, Container, ContainerButton, ContainerLogin, ContainerTitle, FormStyled, Loading, Register } from './LoginStyled'
import FormInputLoginRegister from '../../../components/UI/FormInputLoginRegister/FormInputLoginRegister'
import { Formik } from 'formik'
import { InitialValueLogin } from '../../../components/formik/initialValues'
import { validationSchemaLogin } from '../../../components/formik/validationSchema'
import { loginUser } from '../../../axios/axiosUser'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../../redux/user/userSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import useRedirect from '../../../Hooks/useRedirect'
import { fetchOrdersSuccess } from '../../../redux/orders/ordersSlice'

const Login = () => {

  const [isLoading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const redirect = useNavigate()

  const location = useLocation()

  useRedirect('/profile')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ContainerLogin>
        <Container>
            <Formik
              initialValues={InitialValueLogin}
              validationSchema={validationSchemaLogin}
              onSubmit={ async (values) => {
                
                setLoading(true)

                const user = await loginUser(values.email, values.password)
                
                if (user) {
                  dispatch(setCurrentUser({
                    ...user.usuario,
                    token: user.token
                  }));
                  
                  redirect('/profile')
                }


                setLoading(false)
              }}
            >
              <FormStyled>
                <ContainerTitle>
                  <h2>Login</h2>
                </ContainerTitle>
                <FormInputLoginRegister
                  name="email"
                  label="Email"
                  type="email"
                />
                <FormInputLoginRegister 
                  name="password"
                  label="Password"
                  type="password"
                />
                <ContainerButton>
                  {isLoading ?
                  <Loading><span>.</span><span>.</span><span>.</span></Loading>
                  :
                  <Button type='submit'>Login</Button>
                  }
                </ContainerButton>
                <Register to='/register'>Create Account</Register>
              </FormStyled>
            </Formik>
        </Container>
    </ContainerLogin>
  )
}

export default Login
