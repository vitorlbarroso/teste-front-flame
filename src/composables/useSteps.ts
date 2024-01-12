
import type { IStep } from '@/interface/step.interface'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import type { IPaymentMethod } from '@/interface/payment-method.interface'
import { PaymentMethodEnum } from '@/enum/payment-method.enum'
import type { ICard } from '@/interface/card.interface'
import { useStorage } from '@/composables/useStorage'

export function useSteps(){
	
    const store = useStore()
    const { set } = useStorage()
    const { push } = useRouter()
	
    const onSubmitStepOne = () => {
        redirectToNextStep(store.getters.paymentMethodSelected)
    }

    const goToSuccess = (card?: ICard) => {
        if(card){
            set('@Flame:NAME', card.name)
        }

        updateStep({ number: 3 }, false, 'success')
    }

    const redirectToNextStep = (payment: IPaymentMethod) => {
        switch (payment.value) {
            case PaymentMethodEnum.PIX:
                updateStep({ number: 2 }, false, 'payment-pix')
                break;
            case PaymentMethodEnum.CREDIT_CARD:
                updateStep({ number: 2 }, false, 'payment-debit-credit')
                break;
            case PaymentMethodEnum.TICKET:
                updateStep({ number: 2 }, false, 'payment-ticket')
                break;
        }
    }

    const updateStep = (step: IStep, autoRedirect = true, routeName = '') => {
        store.dispatch('setStep', step.number)
        if(autoRedirect) {
            push({ name: `step-${step.number}` })
            return;
        }
        
        push({ name: routeName })

        
    }
    

	return { onSubmitStepOne, updateStep, goToSuccess }
}