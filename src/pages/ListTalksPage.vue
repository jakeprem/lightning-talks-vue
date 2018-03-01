<template>
  <div class="content">
    <ol>
      <li v-for="talk in talks" :key="`${talk.submitter}:${talk.title}:${talk.abstract}`">
        <span>{{ `${talk.submitter}:${talk.title}:${talk.abstract}` }}</span>
      </li>
    </ol>
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
