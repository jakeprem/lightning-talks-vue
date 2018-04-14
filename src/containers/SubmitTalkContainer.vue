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
          <TalkForm />
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
  </div>
</template>

<script>
import StepContent from '@/components/Steps/StepContent'
import StepHeader from '@/components/Steps/StepHeader'
import Stepper from '@/components/Stepper'

import TalkForm from '@/components/TalkForm'

import AuthService from '@/lib/AuthService.js'

export default {
  name: 'SubmitTalkContainer',
  components: {
    Stepper,
    StepContent,
    StepHeader,
    TalkForm
  },
  data() {
    return {
      currentStep: 1,
      steps: ['Login', 'Verify', 'Submit'],
      email: '',
      token: ''
    }
  },
  methods: {
    incrStep() {
      if (this.currentStep < this.steps.length + 1) {
        this.currentStep++
      }
    },
    decrStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },
    login() {
      AuthService.login(this.email)
        .then(data => {
          this.$toast.open({ message: data.detail, type: 'is-success' })
          this.currentStep++
        })
    },
    verify() {
      AuthService.verify(this.token)
        .then(data => {
          console.log(data)
          this.currentStep++
        })

    }
  }
}
</script>

<style>

</style>
