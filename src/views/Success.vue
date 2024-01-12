<script setup lang="ts">
import { useUser } from '@/composables/useUser'
import Title from '../components/Title.vue'

const { userLoggedin } = useUser()
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
            <h4>Olá, {{userLoggedin.name}} obrigado por comprar!</h4>
            <h4>O QR CODE abaixo de dá 5% de desconto no site!</h4> 
        </section>

        <figure class="success__qrcode">
            <img src="@/assets/qrcode.svg" alt="Descrição da imagem">
        </figure>

        <button class="primary">Voltar ao marketplace</button>
    </div>
</template>
