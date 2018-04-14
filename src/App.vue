<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar'
import AppFooter from '@/components/AppFooter'

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import 'bulma/bulma.sass';
@import 'bulma-steps/dist/bulma-steps.sass';

</style>
