<script setup lang="ts">
import Divider from './components/Divider.vue';
import { DividerEnum } from './enum/divider.enum';

import CheckoutDetails from './components/CheckoutDetails.vue';
import StepByStep from './components/StepByStep.vue';
import { computed, onMounted, ref } from 'vue';
import type { IStep } from './interface/step.interface';
import StepOne from './components/steps/StepOne.vue';
import StepTwo from './components/steps/StepTwo.vue'
import StepThree from './components/steps/StepThree.vue'
import type { IProduct } from './interface/product.interface';
import { useStore } from 'vuex';

const store = useStore();
const currentStep = ref(1);
const products = computed(() => store.getters.allProducts);
const steps = computed(() => store.getters.allSteps);

const updateStep = (step: IStep) => {
    currentStep.value = step.number;
}


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

		<div v-if="currentStep === 1">
			<StepOne @step-changed="updateStep" />
		  </div>
		  <div v-else-if="currentStep === 2">
			<StepTwo @step-changed="updateStep"/>
		  </div>
	
		  <div v-else-if="currentStep === 3">
			<StepThree />
		  </div>
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
		border-radius: 0px 8px 8px 0px
	}
}
</style>
