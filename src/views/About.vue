<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b-button @click="onClick">
      <template v-slot:icon>
        <v-icon>mdi-home</v-icon>
      </template>
      <template>
        Hello
      </template>
    </b-button>
  </div>
</template>

<script>

export default {
  methods: {
    onClick() {
      this.$store.commit('omdb/test', 'hello world')
    }
  }
}
</script>
