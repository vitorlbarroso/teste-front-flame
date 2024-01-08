<script setup lang="ts">
import Title from '../Title.vue'
</script>
<style scoped>

</style>
<template>
    <Title text="Preencha os dados do pagamento"/>

    <button @click="$emit('step-changed', { number: 3 })">go to step 3</button>
</template>
