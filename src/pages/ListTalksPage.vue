<template>
  <div class="content">
    <br>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <template v-for="talk in eventTalks">
          <div class="card" :key="`${talk.submitterName}:${talk.title}`">
            <div class="card-content">
              <p class="title">
                {{talk.title}}
              </p>
              <p class="subtitle">
                {{talk.submitterName}}
              </p>
              <p class="content">
                {{talk.abstract}}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <a :href="talk.outline">{{ talk.outline_link }}</a>
              </p>
            </footer>
          </div>
        </template>
      </div>
      <div class="column"></div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'activeEvent',
      'eventTalks'
    ])
  },
  created () {
    this.$store.dispatch('fetchEventTalks', this.activeEvent['.key'])
  }
}
</script>

<style>
</style>
