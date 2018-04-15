<template>
  <div>
    <AppNavbar />
    <section class="section">
      <div :is="activeComponent"></div>
    </section>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import ListTalksPage from '@/pages/ListTalksPage'

import SubmitTalkContainer from '@/containers/SubmitTalkContainer'

import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

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
          return SubmitTalkContainer
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
    AppNavbar,
    AppFooter
  }
}
</script>

<style>

</style>
