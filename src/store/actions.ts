import type { ICard } from '@/interface/card.interface'
import type { IProduct } from '@/interface/product.interface'

export const actions = {
    addProduct({ commit }: unknown, product: IProduct) {
      commit('ADD_PRODUCT', product)
    },
    updateProduct({ commit }: unknown, product: IProduct) {
      commit('UPDATE_PRODUCT', product)
    },
    deleteProduct({ commit }: unknown, product: IProduct) {
      commit('DELETE_PRODUCT', product)
    },
    selectProduct({ commit }: unknown, product: IProduct) {
      commit('SELECT_PRODUCT', product)
    },
    setStep({ commit }: unknown, step: number) {
      commit('SET_STEP', step)
    },
    selectPaymentMethod({ commit }: unknown, product: IProduct) {
      commit('SELECT_PAYMENT_METHOD', product)
    },
    setCardData({ commit }: unknown, product: ICard) {
      commit('SELECT_PAYMENT_METHOD', product)
    },
  }
  