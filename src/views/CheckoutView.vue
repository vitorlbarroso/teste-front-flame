<script setup lang="ts">
import Card from '../components/Card.vue'
import Title from '../components/Title.vue'
import Divider from '../components/Divider.vue'
import { DividerEnum } from '../enum/divider.enum.ts'

</script>

<template>
<div class="checkout">
    <Title class="checkout__title" text="Detalhes da compra"/>

    <Divider :direction="DividerEnum.HORIZONTAL"/>

    <div>sdhsdjs</div>
</div>
</template>

<style scoped lang="scss">
.checkout {
    
    background-color: #F1F1F1;
    border-radius: 10px 0px 0px 10px;

    &__title {
        padding: 1.6rem;
        margin: 6px;
    }
}
</style>
