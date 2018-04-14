<template>
  <div class="step-item is-success" :class="{'is-active': isActive, 'is-completed': isCompleted}">
    <div class="step-marker">
      <slot name="marker">
        <span class="icon">
          <i class="fa fa-check"></i>
        </span>
      </slot>
    </div>
    <div class="step-details">
      <slot name="title"><slot></slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StepHeader',
  props: {
    isActive: {
      type: Boolean
    },
    isCompleted: {
      type: Boolean
    },
    number: {
      type: Number
    }
  }
}
</script>

<style>

</style>
