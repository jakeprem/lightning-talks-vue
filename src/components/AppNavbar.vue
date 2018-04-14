<template>
  <section class="hero is-info">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
            </a>
            <span class="navbar-burger burger" :class="{'is-active': isMenuOpen}" @click="toggle">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div class="navbar-menu" :class="{'is-active': isMenuOpen}" >
            <div class="navbar-end">
              <router-link
                v-for="link in links"
                :key="link.name"
                :to="{name: link.name}"
                class="navbar-item"
                active-class="is-active"
                :exact="link.exact"
              >
                &nbsp; {{ link.text || link.name }}
              </router-link>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Lightning Talks
        </h1>
        <h2 class="subtitle">
          {{ eventDate }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { format } from '@/utils/dates'
// import {ClickOutside} from '@/directives/ClickOutside'

export default {
  data () {
    return {
      isMenuOpen: false,
      links: [
        // {
        //   text: 'Home',
        //   name: 'IndexPage',
        //   exact: true
        // }
      ]
    }
  },
  methods: {
    ...mapActions([
      'setActiveEvent'
    ]),
    toggle (event) {
      if (this.isMenuOpen) {
        return this.hide(event)
      }
      return this.show(event)
    },
    show (event) {
      this.isMenuOpen = true
      // event.stopPropagation()
      setTimeout(() => document.addEventListener('click', this.hide), 0)
    },
    hide (event) {
      this.isMenuOpen = false
      // event.stopPropagation()
      document.removeEventListener('click', this.hide)
    },
    logout () {
      // This maybe should be abstracted to Vuex
      this.$firebase.app.auth().signOut().then(() => {
        this.$router.push({name: 'IndexPage'})
      })
    }
  },
  computed: {
    ...mapGetters([
      'activeEvent',
      'username',
      'isValidUser'
    ]),
    eventDate () {
      return format.monthDayYearTime(this.activeEvent.start_datetime)
    }
  }
  // directives: {
  // To enable, add this tag to the html element:
  // <div v-click-outside="hide">...</div>
  //   ClickOutside
  // }
}
</script>

<style>

</style>
