<script setup lang="ts">
import { computed } from 'vue'
import { useFormatMoney } from '../composables/useFormatMoney';

const { formatMoney } = useFormatMoney();

const props = defineProps<{
  label: string,
  value: number,
}>()


const valueFormatted = computed(() => formatMoney(props.value));
</script>

<style scoped lang="scss">
.detail-value {
    display: flex;
    justify-content: space-between;
    &__value {
        font-weight: 600;
    }

    &__label {
        font-weight: 500;
    }
}
</style>

<template>
    <div class="detail-value">
        <p class="detail-value__label">{{label}}:</p>
        <span class="detail-value__value">{{valueFormatted}}</span>
      </div>

</template>
