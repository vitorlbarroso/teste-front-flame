<script setup lang="ts">
import Divider from './components/Divider.vue';
import { DividerEnum } from './enum/divider.enum';

import CheckoutDetails from './components/CheckoutDetails.vue';
import StepByStep from './components/StepByStep.vue';
import { ref } from 'vue';
import type { IStep } from './interface/step.interface';
import StepOne from './components/steps/StepOne.vue';
import StepTwo from './components/steps/StepTwo.vue'
import StepThree from './components/steps/StepThree.vue'

const currentStep = ref(1);

const updateStep = (step: IStep) => {
    currentStep.value = step.number;
}

const steps: Array<IStep> = [
	{key:1, number: 1},
	{key:2, number: 2},
	{key:3, number: 3}
]

</script>

<template>
  <div class="app">
    <div class="app__container">
      <CheckoutDetails :currentStep="currentStep" />
      <StepByStep
	  	:steps="steps"
	  	:currentStep="currentStep"
		@step-changed="updateStep" />

	  <Divider :direction="DividerEnum.VERTICAL"/>

	  <div class="app__routes">

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
	}

	&__routes {
		background-color: #f5f5f5;
		padding: 2rem;
		width: 50%;
	}
}
</style>
