import type { IProduct } from '@/interface/product.interface'
import { useStore } from 'vuex'

export function useSteps(){
	
    const store = useStore();

	
    const onSubmitStepOne = () => {

    }

	return { onSubmitStepOne }
}