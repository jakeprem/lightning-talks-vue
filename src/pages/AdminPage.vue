<template>
<div>
  <section class="section">
    <div class="level">
      <div class="level-item has-text-centered">
        <b-field label="Event" class="is-one-fifth is-offset-two-fifths">
          <b-select placeholder="Select an event" size="is-large">
            <option
              v-for="option in [activeEvent]"
              :value="option['.key']"
              :key="option['.key']">
              {{ option.start_datetime }}
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
    <button class="button field is-danger" @click="checkedRows = eventTalks"
      :disabled="!checkedRows.length">
      <b-icon icon="close"></b-icon>
      <span>Clear</span>
    </button>
    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="eventTalks"
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
import { mapGetters } from 'vuex'

export default {
  data() {
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
    ...mapGetters([
      'activeEvent',
      'eventTalks'
    ]),
    storedSelectedTalkIds () {
      return this.eventTalks.filter(x => x.selected == true).map(x => x['.key'])
    },
    localSelectedTalkIds () {
      return this.checkedRows.map(x => x['.key'])
    },
    diffIds () {
      return this.stuff()
    }
  },
  methods: {
    stuff () {
      let selectedTalkIds = this.localSelectedTalkIds
      let unselectedTalkIds = this.eventTalks.map(x => x['.key']).filter(x => !selectedTalkIds.includes(x))

      console.log('Selected: ', selectedTalkIds)
      console.log('Unselected: ', unselectedTalkIds)

      let diff = this.storedSelectedTalkIds.filter(x => unselectedTalkIds.includes(x))
      console.log('Diff: ', diff)
      return diff
    }
  },
  created () {
    this.checkedRows = this.eventTalks.filter(x => x.selected === true)
  }
}
</script>

<style>

</style>
