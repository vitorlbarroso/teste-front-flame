<script setup lang="ts">
import type { IProduct } from '@/interface/product.interface'
import { useProducts } from '../composables/useProducts'
import { useFormatMoney } from '../composables/useFormatMoney';
import { computed } from 'vue'

const props = defineProps<{
  product: IProduct
}>()

const { selectProduct } = useProducts();
const { formatMoney } = useFormatMoney();

const valueFormatted = computed(() => formatMoney(props.product.price));



</script>
<style scoped lang="scss">
.product {
    cursor: pointer;
    display: flex; 

    &__selected {
        width: 4px;
        background-color: #ED7A7A;
    }

    &__content {
        background-color: #D9D9D9;
        width: 100%;
        height: auto;
        display: flex;        
        justify-content: space-between;
        padding: 10px;
        flex-wrap: wrap;

        > div {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            max-width: 14rem;
        }
        &__name {
            font-weight: 800;
        }

        &__price {
            font-weight: 600;
        }

    }
}
</style>
<template>
    <div class="product" @click="selectProduct(product)">
        <div v-if="props.product.isSelected" class="product__selected animate__animated animate__fadeIn"></div>
        <div class="product__content">
            <div>
                <div class="product__content__name">{{product.name}}</div>
                <div class="product__content__description">{{product.description}}</div>
            </div>
            <span class="product__content__price">{{valueFormatted}}</span>
        </div>
    </div>
</template>
