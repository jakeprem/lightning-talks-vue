<template>
  <div class="container">
    <Stepper>
      <StepHeader
        v-for="(step, index) in steps"
        :key="step"
        :isActive="currentStep==index+1"
        :isCompleted="currentStep > index"
      >
        <p class="step-title">{{ step }}</p>
      </StepHeader>

      <template slot="content">
        <StepContent :isActive="currentStep==1">
          <div class="step-content has-text-centered is-active">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Email Address</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input" v-model="email" type="email" placeholder="Your email address" autofocus>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="steps-actions">
            <div class="steps-action">
              <button class="button is-info" @click="login">Login</button>
            </div>
          </div>
        </StepContent>
        <StepContent :isActive="currentStep==2">
          <div class="step-content has-text-centered is-active">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Verification Token</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input class="input" type="text" v-model="token" placeholder="Token" autofocus>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="steps-actions">
            <div class="steps-action">
              <button class="button is-info" @click="verify">Verify</button>
            </div>
          </div>
        </StepContent>
        <StepContent :isActive="currentStep==3">
          <TalkForm @submitSuccess="incr" />
        </StepContent>
        <StepContent :isActive="currentStep==4">
          <div class="step-content has-text-centered is-active">
            <h1 class="title">Your talk has been submitted!</h1>
          </div>
        </StepContent>
      </template>

      <template slot="actions">
        <!-- <div class="steps-actions">
          <div class="steps-action">
            <a href="#" class="button is-light" @click="decrStep">Previous</a>
          </div>
          <div class="steps-action">
            <a href="#" class="button is-light" @click="incrStep">Next</a>
          </div>
        </div> -->
      </template>
    </Stepper>
    <b-loading :is-full-page="true" :active.sync="isLoading"></b-loading>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import StepContent from '@/components/Steps/StepContent'
import StepHeader from '@/components/Steps/StepHeader'
import Stepper from '@/components/Steps/Stepper'
import TalkForm from '@/components/TalkForm'

export default {
  name: 'SubmitTalkContainer',
  components: {
    Stepper,
    StepContent,
    StepHeader,
    TalkForm
  },
  data () {
    return {
      currentStep: 1,
      steps: ['Login', 'Verify', 'Submit'],
      email: '',
      token: '',
      isLoading: false
    }
  },
  created () {
    if (this.isAuthenticated) {
      // TODO: submit an AJAX request to see if this user
      // has already submitted a talk. If so, navigate to/enter
      // edit mode
      this.currentStep = 3
    }
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  },
  methods: {
    ...mapActions([
      'loginAction',
      'verifyAction'
    ]),
    incr () {
      if (this.currentStep < this.steps.length + 1) {
        this.currentStep++
      }
    },
    decr () {
      if (this.currentStep > 0) {
        this.currentStep--
      }
    },
    login () {
      this.isLoading = true
      this.loginAction(this.email)
        .then(data => {
          this.isLoading = false
          this.$toast.open({ message: data.detail, type: 'is-success' })
          this.incr()
        })
        .catch(err => {
          this.isLoading = false
          this.$toast.open({ message: 'Unable to login at this time.', type: 'is-danger' })
          console.error(err)
        })
    },
    verify () {
      this.isLoading = true
      this.verifyAction(this.token)
        .then(data => {
          this.isLoading = false
          this.incr()
        })
    }
  }
}
</script>

<style>

</style>
