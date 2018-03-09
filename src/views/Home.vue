<template>
  <div>
    <app-navbar>
      <h1 class="title">
        Lightning Talks
      </h1>
      <h2 class="subtitle">
        {{ eventDate }}
      </h2>
    </app-navbar>
    <div :is="activeComponent"></div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'
import TalkForm from '@/components/TalkForm'

import { format } from '@/utils/dates'

import { mapGetters } from 'vuex'

export default {
  mounted () {
    this.$store.dispatch('userStore/fetchEvent')
  },
  computed: {
    ...mapGetters('userStore', [
      'event',
      'event_state'
    ]),
    activeComponent () {
      switch (this.event_state) {
        case 'BeforeSubmissionDeadline':
          return TalkForm
        case 'BeforeEventStart':
          return ''
        case 'AfterEventStart':
          return 'FeedbackPage'
        default:
          //
          break
      }
    },
    eventDate () {
      return format.monthDayYearTime(this.event.start_datetime)
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
