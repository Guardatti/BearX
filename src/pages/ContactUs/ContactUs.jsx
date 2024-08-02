import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { ButtonStyled, ContainerButton, ContainerForm, ContainerFormStyled, ContainerFormText, ContainerMap, Loading } from './ContactUsStyled'
import { Formik } from 'formik'
import { initialValueContactUs } from '../../components/formik/initialValues'
import { validationSchemaContactUs } from '../../components/formik/validationSchema'
import FormInput from '../../components/UI/FormInput/FormInput'
import Textarea from '../../components/UI/Textarea/Textarea'
import emailjs from '@emailjs/browser';


const ContactUs = () => {

  const location = useLocation();

  const form = useRef();

  const [isLoading, setLoading] = useState(false)

  const sendEmail = () => {

    emailjs
      .sendForm('service_p6keizc', 'template_39gingf', form.current, {
        publicKey: '4J18PYcgaGGgyLwvL',
      })
      .then(
        () => {
          alert('Message sent succesfully')
          setLoading(false)
        },
        () => {
          alert('The message could not be sent')
          setLoading(false)
        },  
      );
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ContainerForm>
      <ContainerFormText>
        <h2>Form to contact us</h2>
      </ContainerFormText>
      <ContainerMap>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.13575577781!2d-117.19918752380603!3d33.705435935962264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc9ddfdfb2d8fb%3A0x4cbdc1cefbf5a7da!2s25393%20Carmel%20Rd%2C%20Sun%20City%2C%20CA%2092586%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1711378569605!5m2!1ses-419!2sar" width="1100" height="350" loading="lazy"></iframe>
      </ContainerMap>
      <Formik
        initialValues={initialValueContactUs}
        validationSchema={validationSchemaContactUs}
        onSubmit={(values, {resetForm}) => {
          setLoading(true)
          sendEmail(values)
          resetForm();
        }}
      >
        <ContainerFormStyled ref={form}>
          <FormInput
            name="user_name"
            label="Name"
            type="text"
          />
          <FormInput
            name="surname"
            label="Surname"
            type="text"
          />
          <FormInput
            name="age"
            label="Age"
            type="number"
          />
          <FormInput
            name="user_email"
            label="Email"
            type="email"
          />
          <Textarea 
            name="message"
            label="Message"
          />
          <ContainerButton>
            {
              isLoading ?
              <Loading><span>.</span><span>.</span><span>.</span></Loading>
              :
              <ButtonStyled type='submit'>Send</ButtonStyled>
            }
          </ContainerButton>
        </ContainerFormStyled>
      </Formik>
    </ContainerForm>
  )
}

export default ContactUs
