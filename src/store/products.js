import { create } from "zustand";

const productStore = create((set) => ({

    products: [],
    setProducts: (product) => set({  products: product }),

    productsButton: [],

    addProducts: (product) => {
        set(state => ({ productsButton: [...state.productsButton, product]}))
    },

    deleteProducts: (index) => {
        set(state => ({ productsButton: [...state.productsButton.filter((product, idx) => idx !== index)]}))
    }
}))

export default productStore