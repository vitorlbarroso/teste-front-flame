<script setup lang="ts">
import Title from './Title.vue'
import Divider from './Divider.vue'
import { DividerEnum } from '../enum/divider.enum';

defineProps<{
    currentStep: number
}>()
</script>

<template>
    <div class="checkout-details">
      <Title class="checkout-details__title" text="Detalhes da compra"/>

      <Divider :direction="DividerEnum.HORIZONTAL"/>
      
      
    </div>
</template>

  
<style scoped lang="scss">
  .checkout-details {
    width: 30%;
    padding: 20px;
    background-color: #f1f1f1;
    gap: 12px;
    display: flex;
    flex-direction: column;

    &__title {
      padding: 0 1rem;
      text-align: center;
    }
  }
</style>
  