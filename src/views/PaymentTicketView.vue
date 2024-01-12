<script setup lang="ts">
import Title from '@/components/Title.vue'
import { usePayments } from '@/composables/usePayments'
import Clipboard from '@/components/Clipboard.vue'
import { useSteps } from '@/composables/useSteps'

const { ticketNumber } = usePayments()
const { goToSuccess } = useSteps()

</script>
<style scoped lang="scss">
.payment-ticket {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &__content {
        display: grid;
        gap: 10px;
        &--ticket-number {
            background-color: white;
            padding: 10px;
            code {
                font-weight: 600;
            }
        }

        &--clipboard {
            text-align: center;
        }
    }

    &__description {
            h4 {
                text-align: center;
            }
    }
}
</style>
<template>
    <div class="payment-ticket">
        <Title text="Pagamento por boleto" />
        
        <section class="payment-ticket__description">
            <h4>Copie e cole o código no seu banco</h4> 
            <h4>Ou leve até uma lotérica da Caixa para realizar o pagamento!</h4> 
        </section>
        <section class="payment-ticket__content">
            <section class="payment-ticket__content--ticket-number">
                <code>{{ticketNumber}}</code>
            </section>
            
            <Clipboard class="payment-ticket__content--clipboard" :value="ticketNumber" />
        </section>


        <button @click="goToSuccess()" class="primary">Já fiz o pagamento</button>
    </div>
</template>
