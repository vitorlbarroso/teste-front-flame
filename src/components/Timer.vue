<template>
    <h4>
      Faltam {{ formattedTime }} para expirar
    </h4>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useTimer } from '@/composables/useTimer'

const {
    updateFormattedTime,
    formattedTime,
    callInterval,
    cleanInterval
} = useTimer()
  
onMounted(() => {
    updateFormattedTime()
    callInterval()
  });
  
onUnmounted(() => {
    cleanInterval()
});
</script>

<style scoped lang="scss">
h4 {
    color: #09A42B;
    font-weight: 600;
}
</style>
  