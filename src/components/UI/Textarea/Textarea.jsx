import React from 'react'
import { ErrorMessage, Field } from 'formik'
import { ContainerTextarea, LabelStyled, TextareaStyled, ErrorStyled } from './TextareaStyled'

const Textarea = ({name, label, isError}) => {
  return (
    <ContainerTextarea>
        <LabelStyled  htmlFor={label}>{label}</LabelStyled>
        <Field
            name={name}
            error={isError}
            id={label}
            as={TextareaStyled}
        />
        <ErrorMessage name={name} component={ErrorStyled} />
    </ContainerTextarea>
  )
}

export default Textarea
