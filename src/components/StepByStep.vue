<script setup lang="ts">
import { type IStep } from '@/interface/step.interface'
import { useSteps } from '@/composables/useSteps'

const { updateStep } = useSteps()

defineProps<{
  currentStep: number,
  steps: Array<IStep>
}>()
</script>

<template>
    <section class="step-by-step">
      <div v-for="step in steps" :key="step.key"
           class="step-by-step__step"
           :class="{
              'step-by-step__step--is-clickable': step.number === 1,
              'step-by-step__step--active': currentStep >= step.number,
            }"
           @click="step.number === 1 ? updateStep({ number: 1 }) : null">
        {{ step.number }}
      </div>
    </section>
</template>
  
<style scoped lang="scss">
.step-by-step {
  background-color: #f5f5f5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  &__step {
    padding: 20px;
    border-radius: 50%;
    background-color: #eee;
    transition: background-color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    position: relative;

    &--active {
      background-color: #ED7A7A;
      color: white;
    }

    &--is-clickable {
      cursor: pointer;
      &:hover {
        background-color: #ddd;
      }
    }

    &:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 52%;
      bottom: -1.9rem;
      width: 4px;
      height: 28px;
      border-left: 4px dotted #D9D9D9;
      transform: translateX(-66%);
    }
  }
}
</style>
  