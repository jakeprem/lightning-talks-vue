<template>
  <div>
    <section class="hero is-info is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Lightning Talks
          </h1>
          <h2 class="subtitle">
            {{lightningTalkDate.toString()}}
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Submit a Lightning Talk</h1>
        <h2 class="subtitle is-size-6 has-text-grey-light">Deadline: {{deadline.toString()}}</h2>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input type="text" class="input" placeholder="Input title">
          </div>
        </div>
        <div class="field">
          <label class="label">Abstract</label>
          <div class="control">
            <textarea class="textarea" placeholder="Enter your abstract here"></textarea>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text">Cancel</button>
          </div>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      lightningTalkDate: new Date(2018, 2, 8, 15, 30),
      deadline: new Date(2018, 2, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
