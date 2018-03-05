<template>
  <div :is="activeComponent"></div>
</template>

<script>
import { mapGetters } from 'vuex'
import SubmitPage from '@/pages/SubmitPage'
import ListTalksPage from '@/pages/ListTalksPage'

export default {
  data () {
    return {
      eventState: {
        beforeSubmitDeadline: true,
        beforeEvent: true,
        duringEvent: false,
        votingEnabled: false
      },
      userState: {
        hasSubmitted: false,
        talkAccepted: false
      }
    }
  },
  computed: {
    ...mapGetters([
      'activeEventState'
    ]),
    activeComponent () {
      switch (this.activeEventState) {
        case 'BeforeSubmissionDeadline':
          return SubmitPage
        case 'BeforeEventStart':
          return ListTalksPage
        case 'AfterEventStart':
          return 'FeedbackPage'
        default:
          //
          break
      }
    }
  },
  components: {
    ListTalksPage
  }
}
</script>

<style>

</style>
