<template>
  <section class="hero is-info">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="/static/icon-128.png" alt="Logo">
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
              <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fas fa-sign-in-alt"></i>
                  </span>
                  <span>Login</span>
                </a>
              </span>
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
          {{ friendlyDate }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment/min/moment.min'
import {ClickOutside} from '@/directives/ClickOutside'

export default {
  data () {
    return {
      isMenuOpen: false,
      links: [
        {
          text: 'Home',
          name: 'IndexPage',
          exact: true
        },
        {
          text: 'Submit a Talk',
          name: 'SubmitPage',
          exact: true
        },
        {
          text: 'View Talks',
          name: 'ListTalksPage',
          exact: true
        }
      ],
      eventDate: new Date(2018, 2, 8, 17, 30)
    }
  },
  methods: {
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
    }
  },
  computed: {
    friendlyDate () {
      // March 1st 2018, 1:20 pm
      let formatString = 'MMMM Do YYYY, h:mm a'
      return moment(this.eventDate).format(formatString)
    }
  },
  // directives: {
  // To enable, add this tag to the html element: 
  // <div v-click-outside="hide">...</div>
  //   ClickOutside
  // }
}
</script>

<style>

</style>
