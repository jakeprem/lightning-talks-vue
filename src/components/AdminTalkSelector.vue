<template>
<div>
  <section class="section">
    <div class="level">
      <div class="level-item has-text-centered">
        <b-field label="Event" class="is-one-fifth is-offset-two-fifths">
          <b-select placeholder="Select an event" size="is-large" @input="eventSelected">
            <option
              v-for="option in events"
              :value="option"
              :key="option['.key']">
              {{ formatDate(option.start_datetime) }}
            </option>
          </b-select>
        </b-field>
      </div>
    </div>
    <button class="button field is-success" @click="checkedRows = []"
      :disabled="!checkedRows.length">
      <b-icon icon="content-save"></b-icon>
      <span>Save</span>
    </button>
    <button class="button field is-danger" @click="checkedRows = submittedTalks"
      :disabled="!checkedRows.length">
      <b-icon icon="close"></b-icon>
      <span>Clear</span>
    </button>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="submittedTalks"
          :columns="columns"
          :checked-rows.sync="checkedRows"
          checkable>

          <template slot="bottom-left">
            <b>Total checked</b>: {{ checkedRows.length }}
          </template>
        </b-table>
      </b-tab-item>

      <b-tab-item label="Checked rows">
        <pre>{{ checkedRows }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { format } from '@/utils/dates'

export default {
  data () {
    return {
      checkedRows: [],
      columns: [
        {
          field: 'title',
          label: 'Title'
        },
        {
          field: 'abstract',
          label: 'Abstract'
        },
        {
          field: 'submitterName',
          label: 'Submitter'
        },
        {
          field: 'outline_link',
          label: 'Outline'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('adminStore', [
      'events',
      'submittedTalks'
    ]),
    storedSelectedTalkIds () {
      return this.submittedTalks.filter(x => x.selected === true).map(x => x['.key'])
    },
    localSelectedTalkIds () {
      return this.checkedRows.map(x => x['.key'])
    },
    diffIds () {
      return this.stuff()
    }
  },
  methods: {
    ...mapActions('adminStore', [
      'fetchSubmittedTalks'
    ]),
    formatDate (date) {
      return format.monthDayYearTime(date)
    },
    eventSelected (payload) {
      this.fetchSubmittedTalks(payload).then(talks => {
        this.checkedRows = talks.filter(talk => talk.selected === true)
      })
    }
  }
}
</script>

<style>

</style>
