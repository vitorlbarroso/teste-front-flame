<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { useToast } from 'vue-toastification'

const props = defineProps<{
  value: string
}>()

const { copy } = useClipboard({ source: props.value })
const { success } = useToast()

const copyTicketNumber = async () => {
    await copy(props.value)
    success('Copiado com sucesso!', {
        timeout: 2000
    });
}

</script>
<style scoped lang="scss">
.clipboard {
    h3 {
        font-size: 12px;
        color: #4891FF;
        font-weight: 600;
        cursor: pointer;
        &:hover {
            opacity: .6;
        }
    }
}
</style>
<template>
    <div class="clipboard">
        <h3 @click="copyTicketNumber">Clique aqui para copiar o código</h3>
    </div>
</template>
