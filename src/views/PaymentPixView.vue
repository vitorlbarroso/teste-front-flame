<script setup lang="ts">
import Title from '@/components/Title.vue'
import Timer from '@/components/Timer.vue'
import { useSteps } from '@/composables/useSteps'

const { goToSuccess } = useSteps()
</script>
<style scoped lang="scss">
.payment-pix {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    &__qrcode {
        img {
            margin-left: 12px;
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
    <div class="payment-pix">
        <Title text="Obrigado por comprar com a gente!" />
        
        <section class="payment-pix__description">
            <h4>Faça a leitura do QR CODE para finalizar o pagamento!</h4> 
        </section>

        <figure class="payment-pix__qrcode">
            <img src="@/assets/qrcode.svg" alt="Descrição da imagem">
            <Timer/>
        </figure>

        <button @click="goToSuccess()" class="primary">Já fiz o pagamento</button>
    </div>

</template>
