<template>
  <form @submit.prevent="submitTalk">
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
      <label class="label">Outline/Slides Link</label>
      <div class="control">
        <input type="text" class="input" v-model="inputOutline" placeholder="Enter a link here">
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-info">Submit</button>
      </div>
      <div class="control">
        <button class="button is-text" @click.prevent="resetInputs">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { format } from '@/utils/dates'

export default {
  name: 'TalkForm',
  data () {
    return {
      inputTitle: '',
      inputAbstract: '',
      inputOutline: ''
    }
  },
  methods: {
    ...mapActions([
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
      })
        .then(x => {
          this.$toast.open({ message: 'Successfully submitted talk', type: 'is-success' })
          this.$emit('submitSuccess')
          this.resetInputs()
        })
        .catch(err => {
          console.log(err)
          this.$toast.open({ message: 'Failed to submit talk', type: 'is-danger' })
        })
    }
  },
  computed: {
    ...mapGetters([
      'activeEvent'
    ]),
    submissionDeadline () {
      return format.monthDayYear(this.activeEvent.submissionDeadline)
    }
  }
}
</script>

<style>
</style>
