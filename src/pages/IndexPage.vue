<template>
  <div>
    <AppNavbar />
    <div :is="activeComponent"></div>
    <AppFooter />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import SubmitPage from '@/pages/SubmitPage'
import ListTalksPage from '@/pages/ListTalksPage'
import LoginPage from '@/pages/LoginPage'

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
        case 'NoUser':
          return LoginPage
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
    AppNavbar,
    AppFooter
  }
}
</script>

<style>

</style>
