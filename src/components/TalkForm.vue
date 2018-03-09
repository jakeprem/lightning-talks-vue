<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Submit a Lightning Talk</h1>
      <h2 class="subtitle is-size-6 has-text-grey-light">Deadline: {{ submissionDeadline }}</h2>
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input type="text" class="input" v-model="inputTitle" placeholder="Enter your title here">
        </div>
      </div>
      <div class="field">
        <label class="label">Abstract</label>
        <div class="control">
          <textarea class="textarea" v-model="inputAbstract" placeholder="Enter your abstract here"></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Outline/Slides</label>
        <div class="control">
          <input type="text" class="input" v-model="inputOutline" placeholder="Enter a link here">
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-info" @click="submitTalk">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text" @click="resetInputs">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { format } from '@/utils/dates'

export default {
  name: 'SubmitPage',
  data () {
    return {
      inputTitle: '',
      inputAbstract: '',
      inputOutline: ''
    }
  },
  methods: {
    ...mapActions('userStore', [
      'submitTalkForEvent'
    ]),
    resetInputs () {
      this.inputTitle = ''
      this.inputAbstract = ''
      this.inputOutline = ''
    },
    submitTalk () {
      this.submitTalkForEvent({
        title: this.inputTitle,
        abstract: this.inputAbstract,
        outline_link: this.inputOutline
      }).then(x => {
        this.resetInputs()
        this.$snackbar.open({
          message: 'Talk successfully submitted',
          type: 'is-success',
          position: 'is-top'
        })
      })
    }
  },
  computed: {
    ...mapGetters('userStore', [
      'event'
    ]),
    submissionDeadline () {
      return format.monthDayYear(this.event.submissionDeadline)
    }
  }
}
</script>

<style>
</style>
