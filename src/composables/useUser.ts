import { computed } from 'vue'
import { useStore } from 'vuex'

export function useUser(){
	
    const store = useStore()

	const userLoggedin = computed(() => store.getters.userLoggedin)


	return { userLoggedin }
}