<script setup lang="ts">
import Divider from './components/Divider.vue'
import { DividerEnum } from './enum/divider.enum'
import CheckoutDetails from './components/CheckoutDetails.vue'
import StepByStep from './components/StepByStep.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'
import { useSteps } from './composables/useSteps'

const store = useStore()
const currentStep = computed(() => store.getters.actualStep)
const products = computed(() => store.getters.allProducts)
const steps = computed(() => store.getters.allSteps)

const { updateStep } = useSteps()

</script>

<template>
  <div class="app">
    <div class="app__container">
      <CheckoutDetails :products="products" :currentStep="currentStep" />
      <StepByStep
	  	:steps="steps"
	  	:currentStep="currentStep"
		@step-changed="updateStep" />

	
	  <Divider :direction="DividerEnum.VERTICAL"/>

	  <div class="app__step-content">
		<RouterView />
	  </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	&__container {
		display: flex;
		border-radius: 8px;
		overflow: hidden;
		width: 60vw;
		min-width: 60vw;
		max-width: 60vw;

		&--divider {

		}
	}

	&__step-content {
		background-color: #f5f5f5;
		padding: 2rem;
		width: 50%;
		border-radius: 0px 8px 8px 0px;
		display: grid;
	}
}
</style>
