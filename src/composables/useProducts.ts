import type { IProduct } from '@/interface/product.interface'
import { useStore } from 'vuex'

export function useProducts(){
	
    const store = useStore()

	const selectProduct = (prod: IProduct) => store.dispatch('selectProduct', prod)


	return { selectProduct }
}