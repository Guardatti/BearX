import * as Yup from 'yup';

export const validationSchemaContactUs = Yup.object({
    user_name: Yup.string().trim().min(2, 'Invalid name').required('Required field'),
    surname: Yup.string().trim().min(2, 'Invalid surname').required('Required field'),
    age: Yup.number().moreThan(17, 'You must be of legal age').integer('Must be an integer').required('Required field'),
    user_email: Yup.string().email().required('Required field'),
    message: Yup.string().min(10, 'Very short message').required('Required field'),
})

export const validationSchemaCheckout = Yup.object({
    name: Yup.string().trim().min(2, 'Invalid name').required('Required field'),
    cellphone: Yup.string().matches(/^\d{10}$/, 'Invaild number').required('Required field'),
    location: Yup.string().required('Required field'),
    address: Yup.string().required('Required field'),
})

export const validationSchemaRegister = Yup.object({
    name: Yup.string().trim().min(2, 'Invalid name').required('Required field'),
    email: Yup.string().email().required('Required field'),
    password: Yup.string().min(6, 'Very short password').required('Required field')
})

export const validationSchemaLogin = Yup.object({
    email: Yup.string().email().required('Required field'),
    password: Yup.string().required('Required field')
})