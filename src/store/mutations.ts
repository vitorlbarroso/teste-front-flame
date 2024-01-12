import type { IPaymentMethod } from '@/interface/payment-method.interface'
import type { IProduct } from '@/interface/product.interface'
import type { State } from '@/interface/state.interface'
import type { MutationTree } from 'vuex'

export const mutations: MutationTree<State> = {
    ADD_PRODUCT(state: State, product: IProduct){
        state.products = [...state.products, product];
    },
    UPDATE_PRODUCT(state: State, product: IProduct){
        const index = state.products.findIndex(prod => prod.id === product.id);
        if (index !== -1) {
            state.products.splice(index, 1, product);
        }
    },
    DELETE_PRODUCT(state: State, product: IProduct){
        state.products = state.products.filter(prod => prod.id !== product.id)
    },
    SELECT_PRODUCT(state: State, product: IProduct){
        state.products = state.products.map(prod => {
            if(prod.id === product.id){
                return { ...prod, isSelected: !prod.isSelected }
            }

            return prod;
        })
    },
    SET_STEP(state: State, step: number){
        state.step = step;
    },
    SELECT_PAYMENT_METHOD(state: State, payment: IPaymentMethod){
        state.paymentsMethod = state.paymentsMethod.map(pay => {
            pay.isSelected = false;
            if(pay.value === payment.value){

                return { ...pay, isSelected: true };
            }

            return pay;
        })
    }
};