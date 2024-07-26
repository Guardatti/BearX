import { createSlice } from '@reduxjs/toolkit'
import { Products } from '../../components/data/Products'

const INITIAL_STATE = {
    products: Products,
}

const productsSlice = createSlice({
    name: 'products',
    initialState: INITIAL_STATE,
    reducers: {
        getProducts: state => {
            return state
        },
    },
});

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer