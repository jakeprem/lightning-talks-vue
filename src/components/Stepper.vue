<template>
  <div class="steps">
    <slot></slot>

    <div class="steps-content">
      <slot name="content"></slot>
    </div>

    <slot name="actions"></slot>
    
  </div>
</template>

<script>
export default {
  name: 'Steps',
  data() {
    return {
      currentStep: 1
    }
  }
}
</script>

<style>

</style>
