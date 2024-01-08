<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<style scoped>
.button {
    background-color: #ED7A7A;
    min-width: 268px;
    padding: 8px;
}
</style>
<template>
    <button class="button sm:rounded-lg w-24">
        <span class="text-white">{{text}}</span>
    </button>
</template>
