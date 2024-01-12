
import { useStore } from 'vuex'
import type { IPaymentMethod } from '@/interface/payment-method.interface'
import { computed, reactive } from 'vue'
import { useUtils } from './useUtils'
import type { ICard } from '@/interface/card.interface'

export function usePayments(){
	
    const store = useStore()
    const { isValidCPF, isValidCardNumber } = useUtils()
    
    const payments = computed(() => store.getters.allPaymentMethod)
    const selectedOption = computed(() => store.getters.paymentMethodSelected.value)
    const ticketNumber = computed(() => store.getters.getTicketNumber)

    const formData = reactive({
        name: '',
        cardNumber: '',
        cpf: '',
        validity: '',
        cvv: '',
    } as ICard)

    const isFormComplete = computed(() => {
        return !!formData.name &&
            !!formData.cardNumber &&
            !!formData.cpf &&
            !!formData.validity && 
            !!formData.cvv &&
            isValidCPF(formData.cpf) &&
            isValidCardNumber(formData.cardNumber)
    })

    const selectPaymentMethod = (payment: IPaymentMethod) => {
        store.dispatch('selectPaymentMethod', payment)
    }
    

	return {
        selectPaymentMethod,
        payments,
        selectedOption,
        isFormComplete,
        formData,
        ticketNumber
    }
}