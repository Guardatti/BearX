import React from 'react'
import { ErrorStyled, InputBoxStyled, InputLabelStyled, InputStyled } from './FormInputStyled'
import { ErrorMessage, Field } from 'formik'

const FormInput = ({name, label, type, isError}) => {
  return (
    <InputBoxStyled>
        <InputLabelStyled htmlFor={label}>{label}</InputLabelStyled>
        <Field
            name={name}
            type={type}
            error={isError}
            id={label}
            as={InputStyled}
        />
        <ErrorMessage name={name} component={ErrorStyled} />
    </InputBoxStyled>
  )
}

export default FormInput
