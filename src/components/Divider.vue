<script setup lang="ts">
import { DividerEnum } from '../enum/divider.enum';

defineProps<{
  direction: DividerEnum
}>()
</script>

<style scoped lang="scss">
.divider {
    &__horizontal {
        width: 100%;
        height: 1px;
        background-color: #D9D9D9;
    }

    &__vertical {
        width: 1px;
        height: 100%;
        background-color: #D9D9D9;
    }
}
</style>

<template>
    <div class="divider">
        <div class="divider__horizontal" v-if="direction === DividerEnum.HORIZONTAL"></div>
        <div class="divider__vertical" v-else></div>
    </div>

</template>
