<template>
  <div>
    <app-navbar>
      <h1 class="title">
        Lightning Talks Admin
      </h1>
      <div class="tabs is-centered" slot="footer">
        <ul>
          <li class="is-active">
            <a>Talks</a>
          </li>
          <li>
            <a>Events</a>
          </li>
        </ul>
      </div>
    </app-navbar>

    <admin-talk-selector></admin-talk-selector>

    <app-footer>
    </app-footer>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'
import AdminTalkSelector from '@/components/AdminTalkSelector'

export default {
  components: {
    AppNavbar,
    AppFooter,
    AdminTalkSelector
  },
  data () {
    return {
      activeTab: 0
    }
  },
  mounted () {
    this.$store.dispatch('adminStore/fetchEvents')
  }
}
</script>

<style>

</style>
