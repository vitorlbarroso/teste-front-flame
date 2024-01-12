<script setup lang="ts">
import Title from '@/components/Title.vue'
import { useStorage } from '@/composables/useStorage'

const { get, deletee } = useStorage()

const name = get<string>('@Flame:NAME')
deletee()
</script>
<style scoped lang="scss">
.success {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &__qrcode {
        img {
            width: 158px;
        }
    }

    &__description {
            h4 {
                text-align: center;
            }
    }
}
</style>
<template>
    <div class="success">
        <Title text="Obrigado por comprar com a gente!" />
        
        <section class="success__description">
            <h4>Olá, {{name ? name : 'caro cliente'}} obrigado por comprar!</h4>
            <h4>O QR CODE abaixo de dá 5% de desconto no site na sua próxima compra!</h4> 
        </section>

        <figure class="success__qrcode">
            <img src="@/assets/qrcode.svg" alt="Descrição da imagem">
        </figure>

        <button class="primary">Voltar ao marketplace</button>
    </div>
</template>
