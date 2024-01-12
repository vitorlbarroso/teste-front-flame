import type { IPaymentMethod } from '@/interface/payment-method.interface'
import type { IProduct } from '@/interface/product.interface'
import type { IStep } from '@/interface/step.interface'
import type { IUser } from '@/interface//user.interface'

export interface State {
    products: Array<IProduct>
    steps: Array<IStep>
    productsSelecteds: number
    step: number
    paymentsMethod: Array<IPaymentMethod>
    paymentMethodSelected: IPaymentMethod | null
    userLoggedin: IUser
}