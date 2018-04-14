<template>
<section class="section">
    <div class="container">
      <h1 class="title">Please provide an email to continue</h1>
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input type="email" class="input" v-model="email" placeholder="Enter your email here">
        </div>
      </div>
     
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-info" @click="saveEmail">Continue</button>
        </div>
        <div class="control">
          <button class="button is-text" @click="resetInputs">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: ''
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'setEmail',
    ]),
    saveEmail () {
      this.setEmail(this.email)
    },
    resetInputs () {
      this.email = ''
    }
  }
}
</script>

<style>

</style>