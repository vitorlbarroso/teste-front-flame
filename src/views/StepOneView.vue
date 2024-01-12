<script setup lang="ts">
import Title from '@/components/Title.vue'
import { useSteps } from '@/composables/useSteps'
import PaymentMethod from '@/components/PaymentMethod.vue'

const { onSubmitStepOne } = useSteps()

</script>
<style scoped lang="scss">
.step-one {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>
<template>
    <Title text="Escolha o método de pagamento"/>

    <PaymentMethod />

    
    <button @click="onSubmitStepOne()" class="primary">Prosseguir</button>

</template>
