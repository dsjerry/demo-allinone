<script setup lang="ts">
import { ref } from 'vue'
import {useUserStore} from '../store/userStore'

defineProps<{ msg: string }>()

const count = ref(0)

const userStore =  useUserStore()
const { username } = useUserStore()

userStore.$onAction(({name, after}) =>{
  console.log(name);
  after((result) => {
    console.log('res'+ result);
  })
})

setTimeout(() => {
  // setUsername('zx912iiiii3299c')
  // userStore.resetUsername('12123asdasd3')
    console.log(userStore.namePlus);
    
}, 2000);
</script>

<template>
  <h1>{{ userStore.username }}</h1>
<h2>{{ useUserStore().username }}</h2>
<h3>{{ username }}</h3>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
