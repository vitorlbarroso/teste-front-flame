<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
<style scoped>
.title {
    font-size: 22px;
    font-weight: 600;
    color: #000000;
    text-align: center;
}
</style>
<template>
    <h1 class="title">{{text}}</h1>
</template>
