<script setup lang="ts">
import Title from './Title.vue'
import Divider from './Divider.vue'
import { DividerEnum } from '../enum/divider.enum'
import { type IProduct } from '../interface/product.interface'

import DetailValue from './DetailValue.vue';
import Product from './Product.vue';
import { useStore } from 'vuex';


import { computed } from 'vue';

defineProps<{
  currentStep: number,
  products: Array<IProduct>,
  }>()
  
const store = useStore();
const productsSum = computed(() => store.getters.allProductsSelectedSum);

</script>

<template>
    <div class="checkout-details">
      <Title class="checkout-details__title" text="Detalhes da compra"/>

      <Divider :direction="DividerEnum.HORIZONTAL"/>
      
      <DetailValue label="Produtos" :value="productsSum"/>
      <Divider :direction="DividerEnum.HORIZONTAL"/>
      <DetailValue label="Total" :value="productsSum"/>

      <div class="checkout-details__products-list">
        <div v-for="product in products" :key="product.id">
          <Product :product="product" />
        </div>

      </div>

      
      
    </div>
</template>

  
<style scoped lang="scss">
  .checkout-details {
    width: 40%;
    padding: 20px;
    background-color: #f1f1f1;
    gap: 12px;
    display: flex;
    flex-direction: column;
    max-height: 30rem;

    &__products-list {
      max-height: 100%;
      overflow-y: auto;
      display: grid;
      gap: 20px;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: #ED7A7A;
        margin: 2px; 
      }
    }

    &__title {
      padding: 0 1rem;
      text-align: center;
    }

    &__content {}
  }
</style>
  