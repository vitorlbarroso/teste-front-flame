<script setup lang="ts">
import Title from '../Title.vue'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import { useSteps } from '../../composables/useSteps'

const { handleSubmit } = useForm()

</script>
<style scoped lang="scss">

</style>
<template>
    <Title text="Escolha o método de pagamento"/>

    <button @click="$emit('step-changed', { number: 2 })">go to step 2</button>
    
</template>
