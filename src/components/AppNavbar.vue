<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        <img src="/static/icon-128.png">
      </a>

      <div class="navbar-burger" :class="{'is-active': isMenuOpen}" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="navbar-menu" :class="{'is-active': isMenuOpen}">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Login
          </a>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggle () {
      if (this.isMenuOpen) {
        return this.hide()
      }
      return this.show()
    },
    show () {
      this.isMenuOpen = true
      setTimeout(() => document.addEventListener('click', this.hide), 0)
    },
    hide (event) {
      console.log(event)
      this.isMenuOpen = false
      document.removeEventListener('click', this.hide)
    }
  }
}
</script>

<style>

</style>
