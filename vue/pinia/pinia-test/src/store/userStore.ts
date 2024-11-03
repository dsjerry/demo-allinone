import { ref,computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    const username = ref('')
    const setUsername = (name: string) => {
        username.value = name
    }
    const resetUsername = (name: string) => {
        username.value = 'reset' + name
        return 123
    }
    const namePlus = computed(()=> username.value + 'plus')
    return { username, setUsername, resetUsername, namePlus }
})
