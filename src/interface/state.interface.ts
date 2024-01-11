import type { IProduct } from "./product.interface";
import type { IStep } from "./step.interface";

export interface State {
    products: Array<IProduct>;
    steps: Array<IStep>;
    productsSelecteds: number
}