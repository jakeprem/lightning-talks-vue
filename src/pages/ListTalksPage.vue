<template>
  <div class="content">
    <br>
    <div class="columns">
      <div class="column"></div>
      <div class="column is-four-fifths">
        <template v-for="talk in talks">
          <div class="card" :key="`${talk.submitter}:${talk.title}`">
            <div class="card-content">
              <p class="title">
                {{talk.title}}
              </p>
              <p class="subtitle">
                {{talk.submitter}}
              </p>
              <p class="content">
                {{talk.abstract}}
              </p>
            </div>
            <footer class="card-footer">
              <p class="card-footer-item">
                <a :href="talk.outline">{{ talk.outline }}</a>
              </p>
            </footer>
          </div>
          <br>
        </template>
      </div>
      <div class="column"></div>
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      talks: [
        {
          submitter: 'Jake Prem',
          title: 'WebRTC in 15 minutes or less',
          abstract: 'Let\'s talk about WebRTC',
          outline: 'https://www.google.com'
        },
        {
          submitter: 'Jake Prem',
          title: 'Elm: Fun(ctional) on the FrontEnd',
          abstract: 'Elm is cool, let\'s talk about that!',
          outline: 'https://www.google.com'
        }
      ]
    }
  }
}
</script>

<style>
</style>
