import React, { useEffect, useState } from 'react'
import { Button, Container, ContainerButton, ContainerRegister, ContainerText, ContainerTitle, FormStyled, Login, Loading } from './RegisterStyled'
import FormInputLoginRegister from '../../../components/UI/FormInputLoginRegister/FormInputLoginRegister'
import { Formik } from 'formik'
import { InitialValueRegister } from '../../../components/formik/initialValues'
import { validationSchemaRegister } from '../../../components/formik/validationSchema'
import { createUser } from '../../../axios/axiosUser'
import { useLocation, useNavigate } from 'react-router-dom'
import useRedirect from '../../../Hooks/useRedirect'

const Register = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  const [isLoading, setLoading] = useState()

  const redirect = useNavigate()

  const location = useLocation()

  useRedirect('/profile')

  return (
    <ContainerRegister>
        <Container>
            <Formik
              initialValues={InitialValueRegister}
              validationSchema={validationSchemaRegister}
              onSubmit={ async (values, actions) => {

                setLoading(true)

                const user = await createUser(values.name, values.email, values.password)
                actions.resetForm()
                
                if (user) {
                  redirect('/login')
                }

                setLoading(false)
              }}
            >
              <FormStyled>
                <ContainerTitle>
                  <h2>Register</h2>
                </ContainerTitle>
                <FormInputLoginRegister
                  name="name"
                  label="Name"
                  type="text"
                />
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
                  <Button type='submit'>Register</Button>
                  }
                </ContainerButton>
                <ContainerText>
                  <h2>Already have an account?</h2>
                  <Login to='/login'>Login</Login>
                </ContainerText>
              </FormStyled>
            </Formik>
        </Container>
    </ContainerRegister>
  )
}

export default Register
