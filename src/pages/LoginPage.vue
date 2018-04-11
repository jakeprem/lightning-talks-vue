<template>
  <section class="section">
    <div class="container has-text-centered">
      <h1 class="title">Login</h1>
      <h2 class="subtitle">Please login to continue</h2>
      <div id="firebase-auth-container"></div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'setUser'
    ]),
    login () {
      this.setUser(this.username)
      this.resetInputs()
    },
    resetInputs () {
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>