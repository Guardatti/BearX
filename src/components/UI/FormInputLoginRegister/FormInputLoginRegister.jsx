import React from 'react'
import { InputStyled, ErrorStyled, InputBoxStyled } from './FormInputLoginRegisterStyled'
import { ErrorMessage, Field } from 'formik'

const FormInputLoginRegister = ({name, label, type, isError}) => {
  return (
    <InputBoxStyled>
        <Field
            name={name}
            type={type}
            error={isError}
            id={label}
            as={InputStyled}
            placeholder={label}
        />
        <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  )
}

export default FormInputLoginRegister
