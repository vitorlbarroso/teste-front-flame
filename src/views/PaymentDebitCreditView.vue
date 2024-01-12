

<script setup lang="ts">
import { usePayments } from '@/composables/usePayments'
import Title from '../components/Title.vue'
import { Field, ErrorMessage } from 'vee-validate'
import { useSteps } from '@/composables/useSteps'

const { isFormComplete, formData } = usePayments()
const { goToSuccess } = useSteps()

</script>
<style scoped lang="scss">
.form {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    &__section {
        width: 100%;
        &--medium {
            width: 50% !important;
        }

        &--cvv {
            
            max-width: 42px;
        }
        
        &--validity {
            max-width: 94px;
        }
    }
}
</style>
<template>
    <Title text="Preencha os dados do pagamento"/>
    <div class="form">
        <section class="form__section">
            <label>Nome completo</label>
            <Field v-model="formData.name" name="name" type="text"/>
            <ErrorMessage name="name" />
        </section>
        <section class="form__section">
            <label>Número do cartão</label>
            <Field v-model="formData.cardNumber" name="cardNumber" v-mask="{ creditCard: true }"/>
            <ErrorMessage name="cardNumber" />
        </section>
        <section class="form__section">
            <label>CPF do responsável pelo cartão</label>
            <Field name="cpf" v-model="formData.cpf" v-mask="{ numericOnly: true, blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'] }"/>
            <ErrorMessage name="cpf" />
        </section>

        <section class="form__section flex gap-20">
            <div class="form__section--validity form__section--medium">
                <label>Validade</label>
                <Field v-model="formData.validity" name="validity" v-mask="{ numericOnly: true, blocks: [2, 2], delimiters: ['/']}"/>
                <ErrorMessage name="validity" />
            </div>
            <div class="form__section--cvv form__section--medium">
                <label>CVV</label>
                <Field v-model="formData.cvv" name="cvv" v-mask="{ numericOnly: true, blocks: [3]}"/>
                <ErrorMessage name="cvv" />
            </div>
        </section>
    
        <button @click="goToSuccess()" class="primary" :disabled="!isFormComplete">Realizar pagamento</button>
    </div>
</template>
