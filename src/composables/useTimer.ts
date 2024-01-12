import { ref } from 'vue'

export function useTimer(){

    const totalTime = ref(10 * 60);
    const timerInterval = ref(0);
    const formattedTime = ref('');

	const updateFormattedTime = () => {
        const minutes = Math.floor(totalTime.value / 60).toString().padStart(2, '0');
        const seconds = (totalTime.value % 60).toString().padStart(2, '0');
        formattedTime.value = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    const callInterval = () => {
        timerInterval.value = setInterval(() => {
            if (totalTime.value > 0) {
              totalTime.value--;
              updateFormattedTime();
            } else {
              clearInterval(timerInterval.value);
            }
          }, 1000);
    }

    const cleanInterval = () => {
        if (timerInterval.value) {
            clearInterval(timerInterval.value);
          }
    }


	return {
        updateFormattedTime,
        formattedTime,
        callInterval,
        cleanInterval
    }
}