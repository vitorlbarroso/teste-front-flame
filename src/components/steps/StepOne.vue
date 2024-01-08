<script setup lang="ts">
import Title from '../Title.vue'
</script>
<style scoped>

</style>
<template>
    <Title text="Escolha o método de pagamento"/>

    <button @click="$emit('step-changed', { number: 2 })">go to step 2</button>
</template>
