import type { IProduct } from "@/interface/product.interface";
import type { State } from "@/interface/state.interface";
import type { IStep } from "@/interface/step.interface";
import type { GetterTree } from 'vuex';

export const getters: GetterTree<State, State> = {
    allProducts: (state: State): Array<IProduct> =>  state.products,
    allProductsSelectedSum: (state: State): number => {
        const prices = state.products
            .filter(prod => prod.isSelected)
            .map(prod => (prod.price));
        
        return prices.reduce((acc, current) => acc + current, 0)
    },
    allSteps: (state: State): Array<IStep> => state.steps,
};