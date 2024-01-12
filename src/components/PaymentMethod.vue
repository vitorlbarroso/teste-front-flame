<template>
  <div class="payment-method">
    <div v-for="payment in payments" :key="payment.value" class="payment-method__option">
      <input
        type="radio"
        @click="selectPaymentMethod(payment)"
        :id="payment.value"
        :value="payment.value"
        v-model="selectedOption"
      />
      <label :for="payment.value" :class="{ 'payment-method__active': selectedOption === payment.value }">
        {{ payment.text }}
        <span class="payment-method__circle"></span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePayments } from '@/composables/usePayments'



const {
  selectPaymentMethod,
  payments,
  selectedOption
} = usePayments()


</script>

<style scoped lang="scss">
.payment-method {
  display: flex;
  flex-direction: column;
  &__option {
    margin-bottom: 0.5rem;
  }
  &__circle {
    height: 20px;
    width: 20px;
    background-color: #fff;
    border-radius: 50%;
    display: inline-block;
    border: 2px solid #ED7A7A;
  }

  &__active {
    background-color: #ED7A7A !important;
    border-color: #ED7A7A !important;
    color: white !important;
    font-weight: 900;
  }
}
</style>
