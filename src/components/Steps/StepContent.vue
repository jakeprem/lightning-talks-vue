<template>
  <div class="step-content" :class="{'is-active': isActive}">
    <slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'StepContent',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
