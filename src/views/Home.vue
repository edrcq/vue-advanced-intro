<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    Subdomain: <input v-model="subdomain" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  inject: [ 'authRepository' ],
  components: {
    HelloWorld
  },
  data() { return {
    s_subdomain: '',
  }},
  mounted() {
    this.$store.commit('omdb/test', 'hello world')
  },
  computed: {
    subdomain: {
      get() {
        return this.s_subdomain
      },
      set(value) {
        this.s_subdomain = value.toLowerCase()
      }
    }
  }
}
</script>
