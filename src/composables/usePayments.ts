
import { useStore } from 'vuex'
import type { IPaymentMethod } from '@/interface/payment-method.interface'
import { computed, reactive } from 'vue'
import { useUtils } from './useUtils'

export function usePayments(){
	
    const store = useStore()
    const { isValidCPF, isValidCardNumber } = useUtils()
    
    const payments = computed(() => store.getters.allPaymentMethod)
    const selectedOption = computed(() => store.getters.paymentMethodSelected.value);

    const formData = reactive({
        name: '',
        cardNumber: '',
        cpf: '',
        validity: '',
        cvv: '',
    });

    const isFormComplete = computed(() => {
        return !!formData.name &&
            !!formData.cardNumber &&
            !!formData.cpf &&
            !!formData.validity && 
            !!formData.cvv &&
            isValidCPF(formData.cpf) &&
            isValidCardNumber(formData.cardNumber);
    });

    const selectPaymentMethod = (payment: IPaymentMethod) => {
        store.dispatch('selectPaymentMethod', payment);
    }
    

	return { selectPaymentMethod, payments, selectedOption, isFormComplete, formData }
}