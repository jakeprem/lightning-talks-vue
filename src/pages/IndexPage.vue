<template>
  <div></div>
</template>

<script>
export default {
  data () {
    return {
      eventState: {
        beforeSubmitDeadline: true,
        beforeEvent: true,
        duringEvent: false,
        votingEnabled: false
      },
      userState: {
        hasSubmitted: false,
        talkAccepted: false
      }
    }
  }
}
</script>

<style>

</style>
